/**
 * Checks whether a value is a non-empty string.
 *
 * @param {*} value
 * @returns {boolean}
 */
function isNonEmptyString(value) {
    return (
        typeof value === "string" &&
        value.trim().length > 0
    );
}

/**
 * Checks whether a value looks like a Discord snowflake ID.
 *
 * @param {*} value
 * @returns {boolean}
 */
function isSnowflake(value) {
    return (
        typeof value === "string" &&
        /^\d{17,20}$/.test(value)
    );
}

/**
 * Checks whether a value is a valid HTTP or HTTPS URL.
 *
 * @param {*} value
 * @returns {boolean}
 */
function isValidUrl(value) {
    if (!isNonEmptyString(value)) {
        return false;
    }

    try {
        const url = new URL(value);

        return (
            url.protocol === "http:" ||
            url.protocol === "https:"
        );
    } catch {
        return false;
    }
}

/**
 * Checks whether a value is a valid hexadecimal colour.
 *
 * Accepts values such as #F7B6D2 or F7B6D2.
 *
 * @param {*} value
 * @returns {boolean}
 */
function isHexColour(value) {
    return (
        typeof value === "string" &&
        /^#?[0-9A-Fa-f]{6}$/.test(value)
    );
}

/**
 * Checks whether a value is within a numeric range.
 *
 * @param {*} value
 * @param {number} minimum
 * @param {number} maximum
 * @returns {boolean}
 */
function isNumberInRange(value, minimum, maximum) {
    if (
        !Number.isFinite(minimum) ||
        !Number.isFinite(maximum)
    ) {
        throw new TypeError(
            "minimum and maximum must be finite numbers."
        );
    }

    if (minimum > maximum) {
        throw new RangeError(
            "minimum cannot be greater than maximum."
        );
    }

    return (
        Number.isFinite(value) &&
        value >= minimum &&
        value <= maximum
    );
}

/**
 * Checks whether a string length is within a given range.
 *
 * @param {*} value
 * @param {number} minimum
 * @param {number} maximum
 * @returns {boolean}
 */
function isStringLengthInRange(
    value,
    minimum,
    maximum
) {
    if (
        !Number.isInteger(minimum) ||
        !Number.isInteger(maximum) ||
        minimum < 0 ||
        maximum < 0
    ) {
        throw new TypeError(
            "minimum and maximum must be non-negative integers."
        );
    }

    if (minimum > maximum) {
        throw new RangeError(
            "minimum cannot be greater than maximum."
        );
    }

    return (
        typeof value === "string" &&
        value.length >= minimum &&
        value.length <= maximum
    );
}

/**
 * Throws when a required value is missing.
 *
 * @param {*} value
 * @param {string} [fieldName="value"]
 * @returns {*}
 */
function requireValue(value, fieldName = "value") {
    const isMissing =
        value === undefined ||
        value === null ||
        value === "";

    if (isMissing) {
        throw new TypeError(`${fieldName} is required.`);
    }

    return value;
}

/**
 * Throws when a value is not one of the accepted options.
 *
 * @param {*} value
 * @param {*[]} allowedValues
 * @param {string} [fieldName="value"]
 * @returns {*}
 */
function requireOneOf(
    value,
    allowedValues,
    fieldName = "value"
) {
    if (!Array.isArray(allowedValues)) {
        throw new TypeError(
            "allowedValues must be an array."
        );
    }

    if (!allowedValues.includes(value)) {
        throw new RangeError(
            `${fieldName} must be one of: ${allowedValues.join(", ")}.`
        );
    }

    return value;
}

module.exports = {
    isNonEmptyString,
    isSnowflake,
    isValidUrl,
    isHexColour,
    isNumberInRange,
    isStringLengthInRange,
    requireValue,
    requireOneOf
};