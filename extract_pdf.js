
const fs = require('fs');
const pdf = require('pdf-parse');

const dataBuffer = fs.readFileSync('Adarsh-2.pdf');

// Check if pdf is a function, otherwise try default
const parsePdf = typeof pdf === 'function' ? pdf : pdf.default;

parsePdf(dataBuffer).then(function (data) {
    fs.writeFileSync('pdf_content.txt', data.text);
    console.log("Extraction complete!");
});
