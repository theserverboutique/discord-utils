const { createEmbed } = require("./EmbedBuilder");
const Colours = require("./Colours");

/**
 * Creates a standard error embed.
 *
 * @param {string} title
 * @param {string} description
 * @returns {import("discord.js").EmbedBuilder}
 */
function createErrorEmbed(title, description) {
    return createEmbed({
        title,
        description,
        colour: Colours.ERROR
    });
}

module.exports = {
    createErrorEmbed
};