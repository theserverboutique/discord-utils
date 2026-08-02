const {
    ActionRowBuilder,
    ModalBuilder,
    TextInputBuilder,
    TextInputStyle
} = require("discord.js");

/**
 * Creates a Discord text input.
 */
function createTextInput({
    customId,
    label,
    style = "short",
    placeholder,
    required = true,
    minLength,
    maxLength,
    value
}) {
    if (!customId) {
        throw new TypeError("customId is required.");
    }

    if (!label) {
        throw new TypeError("label is required.");
    }

    const input = new TextInputBuilder()
        .setCustomId(customId)
        .setLabel(label)
        .setStyle(
            style === "paragraph"
                ? TextInputStyle.Paragraph
                : TextInputStyle.Short
        )
        .setRequired(required);

    if (placeholder) input.setPlaceholder(placeholder);
    if (value) input.setValue(value);
    if (minLength) input.setMinLength(minLength);
    if (maxLength) input.setMaxLength(maxLength);

    return input;
}

/**
 * Wraps a text input in an action row.
 */
function createModalRow(input) {
    return new ActionRowBuilder().addComponents(input);
}

/**
 * Creates a Discord modal.
 */
function createModal({
    customId,
    title,
    rows
}) {
    if (!customId) {
        throw new TypeError("customId is required.");
    }

    if (!title) {
        throw new TypeError("title is required.");
    }

    if (!rows || !rows.length) {
        throw new TypeError("At least one row is required.");
    }

    return new ModalBuilder()
        .setCustomId(customId)
        .setTitle(title)
        .addComponents(rows);
}

module.exports = {
    createTextInput,
    createModalRow,
    createModal
};