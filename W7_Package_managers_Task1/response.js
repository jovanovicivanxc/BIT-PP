var loremIpsum = require('lorem-ipsum');

function generateText() {
    for (const i = 0; i < 20; i++) {
        output = loremIpsum({
            count: 2,
            units: words
        });
    }
    return output;
};

module.exports = { generateText }