const { PermissionFlagsBits } = require("discord.js");

/**
 * Checks whether a guild member has a Discord permission.
 *
 * @param {import("discord.js").GuildMember} member
 * @param {bigint} permission
 * @returns {boolean}
 */
function hasPermission(member, permission) {
    if (!member?.permissions) {
        return false;
    }

    return member.permissions.has(permission);
}

/**
 * Checks whether a guild member has the Administrator permission.
 *
 * @param {import("discord.js").GuildMember} member
 * @returns {boolean}
 */
function isAdministrator(member) {
    return hasPermission(
        member,
        PermissionFlagsBits.Administrator
    );
}

/**
 * Checks whether a guild member can manage the server.
 *
 * @param {import("discord.js").GuildMember} member
 * @returns {boolean}
 */
function canManageGuild(member) {
    return hasPermission(
        member,
        PermissionFlagsBits.ManageGuild
    );
}

/**
 * Checks whether a guild member can manage channels.
 *
 * @param {import("discord.js").GuildMember} member
 * @returns {boolean}
 */
function canManageChannels(member) {
    return hasPermission(
        member,
        PermissionFlagsBits.ManageChannels
    );
}

/**
 * Checks whether a guild member can manage roles.
 *
 * @param {import("discord.js").GuildMember} member
 * @returns {boolean}
 */
function canManageRoles(member) {
    return hasPermission(
        member,
        PermissionFlagsBits.ManageRoles
    );
}

/**
 * Checks whether a guild member can moderate members.
 *
 * @param {import("discord.js").GuildMember} member
 * @returns {boolean}
 */
function canModerateMembers(member) {
    return hasPermission(
        member,
        PermissionFlagsBits.ModerateMembers
    );
}

/**
 * Checks whether a guild member can manage messages.
 *
 * @param {import("discord.js").GuildMember} member
 * @returns {boolean}
 */
function canManageMessages(member) {
    return hasPermission(
        member,
        PermissionFlagsBits.ManageMessages
    );
}

/**
 * Checks whether a guild member has at least one permission
 * from the supplied list.
 *
 * @param {import("discord.js").GuildMember} member
 * @param {bigint[]} permissions
 * @returns {boolean}
 */
function hasAnyPermission(member, permissions = []) {
    if (!Array.isArray(permissions)) {
        throw new TypeError("permissions must be an array.");
    }

    return permissions.some((permission) =>
        hasPermission(member, permission)
    );
}

/**
 * Checks whether a guild member has every permission
 * from the supplied list.
 *
 * @param {import("discord.js").GuildMember} member
 * @param {bigint[]} permissions
 * @returns {boolean}
 */
function hasAllPermissions(member, permissions = []) {
    if (!Array.isArray(permissions)) {
        throw new TypeError("permissions must be an array.");
    }

    return permissions.every((permission) =>
        hasPermission(member, permission)
    );
}

module.exports = {
    PermissionFlagsBits,
    hasPermission,
    hasAnyPermission,
    hasAllPermissions,
    isAdministrator,
    canManageGuild,
    canManageChannels,
    canManageRoles,
    canModerateMembers,
    canManageMessages
};