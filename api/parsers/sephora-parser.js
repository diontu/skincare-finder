// parser used to parse the sephora HTML page which contains both HTML and scripts.
// takes the scripts and puts them into an array
module.exports = (html) => {
    try {
        if (!(/^<DOCTYPE html>/.test())) throw 'Argument NOT HTML string';

        // find and separate the script tags from the html body
        const scripts = scriptFinder(html);
        return scripts;
    } catch (err) {
        console.log(err);
        console.trace();
    }
};

const scriptFinder = (html) => {
    return html.match(/<script id\=\"linkJSON\" type=\"text\/json\" data-comp\=\"PageJSON \"\>(.*)<\/script>/);
}