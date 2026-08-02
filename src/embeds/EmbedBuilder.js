const { EmbedBuilder } = require("discord.js");

/**
 * Creates a standard TSB embed.
 * @param {Object} options
 * @param {string} options.title
 * @param {string} options.description
 * @param {string} [options.color]
 * @returns {EmbedBuilder}
 */
function createEmbed({
    title,
    description,
    color = "#F7B6D2"
}) {
    return new EmbedBuilder()
        .setColor(color)
        .setTitle(title)
        .setDescription(description)
        .setTimestamp();
}

module.exports = {
    createEmbed
};
