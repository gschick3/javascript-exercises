const repeatString = function(word, times) {
    let newWord = "";
    for (let i = 0; i < times; i++) {
        newWord += word;
    }
    return times < 0 ? "ERROR" : newWord;
};

// Do not edit below this line
module.exports = repeatString;
