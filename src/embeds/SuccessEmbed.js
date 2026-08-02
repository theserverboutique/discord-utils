const { createEmbed } = require("./EmbedBuilder");
const Colours = require("./Colours");

/**
 * Creates a standard success embed.
 *
 * @param {string} title
 * @param {string} description
 * @returns {import("discord.js").EmbedBuilder}
 */
function createSuccessEmbed(title, description) {
    return createEmbed({
        title,
        description,
        colour: Colours.SUCCESS
    });
}

module.exports = {
    createSuccessEmbed
};