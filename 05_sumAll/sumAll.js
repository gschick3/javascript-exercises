const sumAll = function(a, b) {
    if (!Number.isFinite(a) || !Number.isFinite(b) || Math.min(a, b) < 0) return "ERROR";
    let sum = 0;
    for (let i = Math.min(a, b); i <= Math.max(a, b); i++) sum += i;
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
