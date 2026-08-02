const {
    ActionRowBuilder,
    ButtonBuilder,
    ButtonStyle
} = require("discord.js");

const BUTTON_STYLES = Object.freeze({
    primary: ButtonStyle.Primary,
    secondary: ButtonStyle.Secondary,
    success: ButtonStyle.Success,
    danger: ButtonStyle.Danger,
    link: ButtonStyle.Link
});

/**
 * Resolves a readable button style name or Discord.js ButtonStyle value.
 *
 * @param {string|number} style
 * @returns {number}
 */
function resolveButtonStyle(style = "primary") {
    if (typeof style === "number") {
        return style;
    }

    const resolvedStyle = BUTTON_STYLES[String(style).toLowerCase()];

    if (!resolvedStyle) {
        throw new TypeError(
            `Invalid button style "${style}". Use primary, secondary, success, danger, or link.`
        );
    }

    return resolvedStyle;
}

/**
 * Creates a Discord button.
 *
 * Link buttons require a URL and do not use a custom ID.
 * All other button styles require a custom ID.
 *
 * @param {Object} options
 * @param {string} [options.customId]
 * @param {string} options.label
 * @param {string|number} [options.style="primary"]
 * @param {string} [options.emoji]
 * @param {boolean} [options.disabled=false]
 * @param {string} [options.url]
 * @returns {ButtonBuilder}
 */
function createButton({
    customId,
    label,
    style = "primary",
    emoji,
    disabled = false,
    url
}) {
    if (!label || typeof label !== "string") {
        throw new TypeError("A button label is required.");
    }

    const resolvedStyle = resolveButtonStyle(style);
    const button = new ButtonBuilder()
        .setLabel(label)
        .setStyle(resolvedStyle)
        .setDisabled(Boolean(disabled));

    if (resolvedStyle === ButtonStyle.Link) {
        if (!url || typeof url !== "string") {
            throw new TypeError("Link buttons require a valid URL.");
        }

        button.setURL(url);
    } else {
        if (!customId || typeof customId !== "string") {
            throw new TypeError("Non-link buttons require a customId.");
        }

        button.setCustomId(customId);
    }

    if (emoji) {
        button.setEmoji(emoji);
    }

    return button;
}

/**
 * Creates an action row containing up to five buttons.
 *
 * @param {...ButtonBuilder} buttons
 * @returns {ActionRowBuilder<ButtonBuilder>}
 */
function createButtonRow(...buttons) {
    const flattenedButtons = buttons.flat();

    if (flattenedButtons.length === 0) {
        throw new TypeError("At least one button is required.");
    }

    if (flattenedButtons.length > 5) {
        throw new RangeError("A Discord action row can contain a maximum of five buttons.");
    }

    return new ActionRowBuilder().addComponents(flattenedButtons);
}

module.exports = {
    BUTTON_STYLES,
    createButton,
    createButtonRow,
    resolveButtonStyle
};