var loremIpsum = require('lorem-ipsum');

function generateText() {
    let blogs = []
    for (let i = 0; i < 20; i++) {
        let title = loremIpsum({
            count: 3,
            units: 'words'
        });
        let intro = loremIpsum({
            count: 4,
            units: 'sentences'
        })
        const out = {
            title: title,
            body: intro
        }
        blogs.push(out);
    }
    return blogs;

};

module.exports = { generateText }