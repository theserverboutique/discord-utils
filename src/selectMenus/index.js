const {
    ActionRowBuilder,
    StringSelectMenuBuilder
} = require("discord.js");

/**
 * Creates a reusable string select menu.
 */
function createSelectMenu({
    customId,
    placeholder = "Choose an option...",
    minValues = 1,
    maxValues = 1,
    disabled = false,
    options = []
}) {
    if (!customId) {
        throw new TypeError("customId is required.");
    }

    if (!Array.isArray(options) || options.length === 0) {
        throw new TypeError("At least one option is required.");
    }

    const menu = new StringSelectMenuBuilder()
        .setCustomId(customId)
        .setPlaceholder(placeholder)
        .setMinValues(minValues)
        .setMaxValues(maxValues)
        .setDisabled(disabled)
        .addOptions(options);

    return menu;
}

/**
 * Wraps a select menu in an action row.
 */
function createSelectMenuRow(menu) {
    return new ActionRowBuilder().addComponents(menu);
}

module.exports = {
    createSelectMenu,
    createSelectMenuRow
};