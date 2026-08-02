/**
 * Converts a duration in milliseconds into a readable string.
 *
 * @param {number} milliseconds
 * @returns {string}
 */
function formatDuration(milliseconds) {
    if (!Number.isFinite(milliseconds) || milliseconds < 0) {
        throw new TypeError("milliseconds must be a non-negative number.");
    }

    const totalSeconds = Math.floor(milliseconds / 1000);

    const days = Math.floor(totalSeconds / 86400);
    const hours = Math.floor((totalSeconds % 86400) / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;

    const parts = [];

    if (days) parts.push(`${days}d`);
    if (hours) parts.push(`${hours}h`);
    if (minutes) parts.push(`${minutes}m`);
    if (seconds || parts.length === 0) parts.push(`${seconds}s`);

    return parts.join(" ");
}

/**
 * Creates a Discord timestamp from a Date, timestamp, or date string.
 *
 * @param {Date|string|number} date
 * @param {"t"|"T"|"d"|"D"|"f"|"F"|"R"} [style="R"]
 * @returns {string}
 */
function formatDiscordTimestamp(date, style = "R") {
    const validStyles = new Set([
        "t",
        "T",
        "d",
        "D",
        "f",
        "F",
        "R"
    ]);

    if (!validStyles.has(style)) {
        throw new TypeError(
            'style must be one of: "t", "T", "d", "D", "f", "F", or "R".'
        );
    }

    const resolvedDate = date instanceof Date
        ? date
        : new Date(date);

    if (Number.isNaN(resolvedDate.getTime())) {
        throw new TypeError("A valid date is required.");
    }

    const unixTimestamp = Math.floor(resolvedDate.getTime() / 1000);

    return `<t:${unixTimestamp}:${style}>`;
}

/**
 * Truncates text and adds an ellipsis when necessary.
 *
 * @param {string} text
 * @param {number} maxLength
 * @returns {string}
 */
function truncateText(text, maxLength) {
    if (typeof text !== "string") {
        throw new TypeError("text must be a string.");
    }

    if (!Number.isInteger(maxLength) || maxLength < 1) {
        throw new TypeError("maxLength must be a positive integer.");
    }

    if (text.length <= maxLength) {
        return text;
    }

    if (maxLength === 1) {
        return "…";
    }

    return `${text.slice(0, maxLength - 1)}…`;
}

/**
 * Capitalises the first character of a string.
 *
 * @param {string} text
 * @returns {string}
 */
function capitalise(text) {
    if (typeof text !== "string") {
        throw new TypeError("text must be a string.");
    }

    if (!text) {
        return "";
    }

    return text.charAt(0).toUpperCase() + text.slice(1);
}

/**
 * Converts text into a URL-friendly slug.
 *
 * @param {string} text
 * @returns {string}
 */
function slugify(text) {
    if (typeof text !== "string") {
        throw new TypeError("text must be a string.");
    }

    return text
        .normalize("NFKD")
        .replace(/[\u0300-\u036f]/g, "")
        .toLowerCase()
        .trim()
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/^-+|-+$/g, "");
}

/**
 * Formats a number using a chosen locale.
 *
 * @param {number} value
 * @param {string} [locale="en-GB"]
 * @returns {string}
 */
function formatNumber(value, locale = "en-GB") {
    if (!Number.isFinite(value)) {
        throw new TypeError("value must be a finite number.");
    }

    return new Intl.NumberFormat(locale).format(value);
}

module.exports = {
    formatDuration,
    formatDiscordTimestamp,
    truncateText,
    capitalise,
    slugify,
    formatNumber
};