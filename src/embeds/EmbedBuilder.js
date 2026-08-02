const { EmbedBuilder } = require("discord.js");
const Colours = require("./Colours");

/**
 * Creates a reusable Discord embed.
 *
 * Both British "colour" and American "color" are accepted.
 *
 * @param {Object} options
 * @param {string} [options.title]
 * @param {string} [options.description]
 * @param {string|number} [options.colour]
 * @param {string|number} [options.color]
 * @param {string|Object} [options.footer]
 * @param {string} [options.thumbnail]
 * @param {string} [options.image]
 * @param {string} [options.url]
 * @param {string} [options.authorName]
 * @param {string} [options.authorIcon]
 * @param {string} [options.authorUrl]
 * @param {Array<Object>} [options.fields]
 * @param {boolean} [options.timestamp=true]
 * @returns {EmbedBuilder}
 */
function createEmbed({
    title,
    description,
    colour,
    color,
    footer,
    thumbnail,
    image,
    url,
    authorName,
    authorIcon,
    authorUrl,
    fields,
    timestamp = true
} = {}) {
    const resolvedColour =
        colour ??
        color ??
        Colours.PRIMARY;

    const embed = new EmbedBuilder()
        .setColor(resolvedColour);

    if (title) {
        embed.setTitle(title);
    }

    if (description) {
        embed.setDescription(description);
    }

    if (url) {
        embed.setURL(url);
    }

    if (footer) {
        if (typeof footer === "string") {
            embed.setFooter({
                text: footer
            });
        } else if (
            typeof footer === "object" &&
            typeof footer.text === "string"
        ) {
            embed.setFooter(footer);
        } else {
            throw new TypeError(
                "footer must be a string or a valid footer object."
            );
        }
    }

    if (thumbnail) {
        embed.setThumbnail(thumbnail);
    }

    if (image) {
        embed.setImage(image);
    }

    if (authorName) {
        const author = {
            name: authorName
        };

        if (authorIcon) {
            author.iconURL = authorIcon;
        }

        if (authorUrl) {
            author.url = authorUrl;
        }

        embed.setAuthor(author);
    }

    if (fields !== undefined) {
        if (!Array.isArray(fields)) {
            throw new TypeError("fields must be an array.");
        }

        if (fields.length > 0) {
            embed.addFields(fields);
        }
    }

    if (timestamp) {
        embed.setTimestamp();
    }

    return embed;
}

module.exports = {
    createEmbed
};