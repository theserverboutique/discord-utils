# Embed Utilities

The embed utilities provide a consistent way to create Discord embeds.

## Available Functions

- createEmbed()
- createSuccessEmbed()
- createErrorEmbed()
- createWarningEmbed()
- createInfoEmbed()

## Example

```js
const {
    createSuccessEmbed
} = require("@theserverboutique/discord-utils");

const embed = createSuccessEmbed(
    "Success",
    "Everything worked!"
);