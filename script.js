// t("My name is @name", { name: "John "});
// "My name is John"

function t(string, obj = {}) {
    if(Object.entries(obj).length === 0) return string;
    const reg = /@[a-zA-Z]+\b/gm;
    let matches = string.match(reg);
    let newString = string;
    matches.forEach(element => {
        let key = element.replace("@", '');
        newString = newString.replace(`${element}`, obj[key]);
    });
    return newString;
}