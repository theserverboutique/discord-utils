const {
    createSuccessEmbed,
    createErrorEmbed,
    createWarningEmbed,
    createInfoEmbed
} = require("../src");

console.log(
    createSuccessEmbed(
        "Success",
        "Everything worked!"
    ).toJSON()
);

console.log(
    createErrorEmbed(
        "Error",
        "Something went wrong."
    ).toJSON()
);

console.log(
    createWarningEmbed(
        "Warning",
        "Please double-check your settings."
    ).toJSON()
);

console.log(
    createInfoEmbed(
        "Information",
        "Welcome to The Server Boutique."
    ).toJSON()
);