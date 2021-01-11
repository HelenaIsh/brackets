module.exports = function check(str, bracketsConfig) {
    let rules = [];
    let result = str;
    for (let [openBracket, closeBracket] of bracketsConfig) {
        let rule = `${openBracket}${closeBracket}`
        rules.push(rule);
    }
    while (true) {
        if (result === '') return true;
        let foundRule = findRule(result, rules);
        if (foundRule) {
            result = result.replace(foundRule,'')
        } else return false;
    }
}

function findRule(result, rules){
    for (let rule of rules) {
        if (result.includes(rule)) {
            return rule;
        }
    }
}
