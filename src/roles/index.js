/**
 * Resolves a role from a guild using its ID, name, or mention.
 *
 * @param {import("discord.js").Guild} guild
 * @param {string} roleReference
 * @returns {import("discord.js").Role|null}
 */
function resolveRole(guild, roleReference) {
    if (!guild?.roles?.cache || !roleReference) {
        return null;
    }

    const reference = String(roleReference).trim();
    const mentionedRoleId = reference.match(/^<@&(\d+)>$/)?.[1];
    const roleId = mentionedRoleId ?? reference;

    return (
        guild.roles.cache.get(roleId) ??
        guild.roles.cache.find(
            (role) =>
                role.name.toLowerCase() === reference.toLowerCase()
        ) ??
        null
    );
}

/**
 * Checks whether a guild member has a role.
 *
 * @param {import("discord.js").GuildMember} member
 * @param {string} roleReference
 * @returns {boolean}
 */
function hasRole(member, roleReference) {
    if (!member?.guild || !member?.roles?.cache) {
        return false;
    }

    const role = resolveRole(member.guild, roleReference);

    return Boolean(role && member.roles.cache.has(role.id));
}

/**
 * Adds a role to a guild member.
 *
 * @param {import("discord.js").GuildMember} member
 * @param {string} roleReference
 * @param {string} [reason]
 * @returns {Promise<import("discord.js").GuildMember>}
 */
async function addRole(
    member,
    roleReference,
    reason = "Role added using The Server Boutique Discord Utils"
) {
    if (!member?.guild || !member?.roles) {
        throw new TypeError("A valid guild member is required.");
    }

    const role = resolveRole(member.guild, roleReference);

    if (!role) {
        throw new Error(`Role "${roleReference}" could not be found.`);
    }

    if (member.roles.cache.has(role.id)) {
        return member;
    }

    await member.roles.add(role, reason);

    return member;
}

/**
 * Removes a role from a guild member.
 *
 * @param {import("discord.js").GuildMember} member
 * @param {string} roleReference
 * @param {string} [reason]
 * @returns {Promise<import("discord.js").GuildMember>}
 */
async function removeRole(
    member,
    roleReference,
    reason = "Role removed using The Server Boutique Discord Utils"
) {
    if (!member?.guild || !member?.roles) {
        throw new TypeError("A valid guild member is required.");
    }

    const role = resolveRole(member.guild, roleReference);

    if (!role) {
        throw new Error(`Role "${roleReference}" could not be found.`);
    }

    if (!member.roles.cache.has(role.id)) {
        return member;
    }

    await member.roles.remove(role, reason);

    return member;
}

/**
 * Adds a role when the member does not have it,
 * or removes it when they do.
 *
 * @param {import("discord.js").GuildMember} member
 * @param {string} roleReference
 * @param {string} [reason]
 * @returns {Promise<{member: import("discord.js").GuildMember, action: "added"|"removed"}>}
 */
async function toggleRole(
    member,
    roleReference,
    reason = "Role toggled using The Server Boutique Discord Utils"
) {
    if (hasRole(member, roleReference)) {
        await removeRole(member, roleReference, reason);

        return {
            member,
            action: "removed"
        };
    }

    await addRole(member, roleReference, reason);

    return {
        member,
        action: "added"
    };
}

/**
 * Returns the highest role shared between a member and a supplied list.
 *
 * @param {import("discord.js").GuildMember} member
 * @param {string[]} roleReferences
 * @returns {import("discord.js").Role|null}
 */
function getHighestMatchingRole(member, roleReferences = []) {
    if (!Array.isArray(roleReferences)) {
        throw new TypeError("roleReferences must be an array.");
    }

    const matchingRoles = roleReferences
        .map((reference) => resolveRole(member.guild, reference))
        .filter(
            (role) =>
                role &&
                member.roles.cache.has(role.id)
        )
        .sort((firstRole, secondRole) =>
            secondRole.position - firstRole.position
        );

    return matchingRoles[0] ?? null;
}

module.exports = {
    resolveRole,
    hasRole,
    addRole,
    removeRole,
    toggleRole,
    getHighestMatchingRole
};