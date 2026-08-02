const LOG_LEVELS = Object.freeze({
    DEBUG: "debug",
    INFO: "info",
    SUCCESS: "success",
    WARN: "warn",
    ERROR: "error"
});

const LEVEL_LABELS = Object.freeze({
    [LOG_LEVELS.DEBUG]: "DEBUG",
    [LOG_LEVELS.INFO]: "INFO",
    [LOG_LEVELS.SUCCESS]: "SUCCESS",
    [LOG_LEVELS.WARN]: "WARN",
    [LOG_LEVELS.ERROR]: "ERROR"
});

/**
 * Formats a Date as an ISO timestamp.
 *
 * @param {Date} [date=new Date()]
 * @returns {string}
 */
function createTimestamp(date = new Date()) {
    if (!(date instanceof Date) || Number.isNaN(date.getTime())) {
        throw new TypeError("date must be a valid Date instance.");
    }

    return date.toISOString();
}

/**
 * Converts additional log data into readable text.
 *
 * @param {*} data
 * @returns {string}
 */
function formatLogData(data) {
    if (data === undefined) {
        return "";
    }

    if (data instanceof Error) {
        return data.stack ?? `${data.name}: ${data.message}`;
    }

    if (typeof data === "string") {
        return data;
    }

    try {
        return JSON.stringify(data, null, 2);
    } catch {
        return String(data);
    }
}

/**
 * Creates a formatted log message.
 *
 * @param {Object} options
 * @param {string} options.level
 * @param {string} options.message
 * @param {*} [options.data]
 * @param {Date} [options.date]
 * @returns {string}
 */
function formatLogMessage({
    level,
    message,
    data,
    date = new Date()
}) {
    if (!Object.values(LOG_LEVELS).includes(level)) {
        throw new RangeError(
            `Invalid log level "${level}".`
        );
    }

    if (typeof message !== "string" || !message.trim()) {
        throw new TypeError(
            "message must be a non-empty string."
        );
    }

    const timestamp = createTimestamp(date);
    const label = LEVEL_LABELS[level];
    const formattedData = formatLogData(data);

    return formattedData
        ? `[${timestamp}] [${label}] ${message}\n${formattedData}`
        : `[${timestamp}] [${label}] ${message}`;
}

/**
 * Writes a log message to the appropriate console method.
 *
 * @param {string} level
 * @param {string} message
 * @param {*} [data]
 * @returns {string}
 */
function log(level, message, data) {
    const formattedMessage = formatLogMessage({
        level,
        message,
        data
    });

    switch (level) {
        case LOG_LEVELS.ERROR:
            console.error(formattedMessage);
            break;

        case LOG_LEVELS.WARN:
            console.warn(formattedMessage);
            break;

        case LOG_LEVELS.DEBUG:
            console.debug(formattedMessage);
            break;

        default:
            console.log(formattedMessage);
    }

    return formattedMessage;
}

function debug(message, data) {
    return log(LOG_LEVELS.DEBUG, message, data);
}

function info(message, data) {
    return log(LOG_LEVELS.INFO, message, data);
}

function success(message, data) {
    return log(LOG_LEVELS.SUCCESS, message, data);
}

function warn(message, data) {
    return log(LOG_LEVELS.WARN, message, data);
}

function error(message, data) {
    return log(LOG_LEVELS.ERROR, message, data);
}

module.exports = {
    LOG_LEVELS,
    createTimestamp,
    formatLogData,
    formatLogMessage,
    log,
    debug,
    info,
    success,
    warn,
    error
};