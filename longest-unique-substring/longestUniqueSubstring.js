/**
 * @param {string} s
 * @return {number}
 */

// RESULTS - runtime: 919 ms , memory: 51.5 MB
 var lengthOfLongestSubstring = function(s) {
    let result = 0;
    let currentSubString = {
        value: '',
        length: 0
    };
    let uniqueChars = [];
    let sCopy = s;
    
    for (let j = 0; j < s.length; j++) {
        for (let i = 0; i < sCopy.length; i++) {
            if (uniqueChars.includes(sCopy[i]) || uniqueChars.includes(true)) {
                if (currentSubString.length > result) {
                    result = currentSubString.length;
                }
                currentSubString = {
                    value: '',
                    length: 0
                };
                uniqueChars = [];
                sCopy = sCopy.slice(1, sCopy.length);
                break;
            }
            if (sCopy[i].match(/\s/)) {
                    uniqueChars.push(true);
                    currentSubString.value += `\s`;
                    currentSubString.length ++;
                }
            if (sCopy[i].match(/\s/) === null) {
                uniqueChars.push(sCopy[i]);
                currentSubString.value += sCopy[i];
                currentSubString.length ++;
            }
            if (s.length === 1) {
                result++;
            }   
        }
    }
    return result;
};