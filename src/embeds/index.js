const Colours = require("./Colours");

module.exports = {
    Colours,
    ...require("./EmbedBuilder"),
    ...require("./SuccessEmbed"),
    ...require("./ErrorEmbed"),
    ...require("./WarningEmbed"),
    ...require("./InfoEmbed")
};