const assert = require("node:assert/strict");

const {
    Colours,
    createEmbed,
    createSuccessEmbed,
    createErrorEmbed,
    createWarningEmbed,
    createInfoEmbed
} = require("../src");

let passed = 0;
let failed = 0;

function runTest(name, testFunction) {
    try {
        testFunction();
        passed += 1;
        console.log(`✓ ${name}`);
    } catch (error) {
        failed += 1;
        console.error(`✗ ${name}`);
        console.error(error);
    }
}

runTest("creates a standard embed", () => {
    const embed = createEmbed({
        title: "Test title",
        description: "Test description"
    });

    const data = embed.toJSON();

    assert.equal(data.title, "Test title");
    assert.equal(data.description, "Test description");
    assert.equal(data.color, parseInt(Colours.PRIMARY.slice(1), 16));
    assert.ok(data.timestamp);
});

runTest("supports optional embed properties", () => {
    const embed = createEmbed({
        title: "Optional properties",
        description: "Testing optional values",
        footer: "The Server Boutique",
        thumbnail: "https://example.com/thumbnail.png",
        image: "https://example.com/image.png"
    });

    const data = embed.toJSON();

    assert.equal(data.footer.text, "The Server Boutique");
    assert.equal(
        data.thumbnail.url,
        "https://example.com/thumbnail.png"
    );
    assert.equal(
        data.image.url,
        "https://example.com/image.png"
    );
});

runTest("creates a success embed", () => {
    const data = createSuccessEmbed(
        "Success",
        "The action was completed."
    ).toJSON();

    assert.equal(data.title, "Success");
    assert.equal(
        data.color,
        parseInt(Colours.SUCCESS.slice(1), 16)
    );
});

runTest("creates an error embed", () => {
    const data = createErrorEmbed(
        "Error",
        "Something went wrong."
    ).toJSON();

    assert.equal(data.title, "Error");
    assert.equal(
        data.color,
        parseInt(Colours.ERROR.slice(1), 16)
    );
});

runTest("creates a warning embed", () => {
    const data = createWarningEmbed(
        "Warning",
        "Please check this carefully."
    ).toJSON();

    assert.equal(data.title, "Warning");
    assert.equal(
        data.color,
        parseInt(Colours.WARNING.slice(1), 16)
    );
});

runTest("creates an information embed", () => {
    const data = createInfoEmbed(
        "Information",
        "Here is some useful information."
    ).toJSON();

    assert.equal(data.title, "Information");
    assert.equal(
        data.color,
        parseInt(Colours.INFO.slice(1), 16)
    );
});

console.log("");
console.log(`${passed} test${passed === 1 ? "" : "s"} passed.`);
console.log(`${failed} test${failed === 1 ? "" : "s"} failed.`);

if (failed > 0) {
    process.exitCode = 1;
}