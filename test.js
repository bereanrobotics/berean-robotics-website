const yaml = require('js-yaml');
const fs = require('fs');
try {
    const config = yaml.safeLoad(fs.readFileSync('test.yml', 'utf8'));
    for (const fruit of config.fruit) {
        console.log(fruit);
    }
} catch (e) {
    console.log(e);
}