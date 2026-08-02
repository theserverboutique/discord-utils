const { createEmbed } = require("./EmbedBuilder");
const Colours = require("./Colours");

/**
 * Creates a standard warning embed.
 *
 * @param {string} title
 * @param {string} description
 * @returns {import("discord.js").EmbedBuilder}
 */
function createWarningEmbed(title, description) {
    return createEmbed({
        title,
        description,
        colour: Colours.WARNING
    });
}

module.exports = {
    createWarningEmbed
};