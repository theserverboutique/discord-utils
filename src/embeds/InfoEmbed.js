const { createEmbed } = require("./EmbedBuilder");
const Colours = require("./Colours");

/**
 * Creates a standard informational embed.
 *
 * @param {string} title
 * @param {string} description
 * @returns {import("discord.js").EmbedBuilder}
 */
function createInfoEmbed(title, description) {
    return createEmbed({
        title,
        description,
        colour: Colours.INFO
    });
}

module.exports = {
    createInfoEmbed
};