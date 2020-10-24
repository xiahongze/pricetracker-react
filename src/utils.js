/**
 * 
 * @param {String} string 
 * @param {Number} maxLength 
 */
function truncate(string, maxLength) {
    if (string.length <= maxLength) {
        return string;
    }
    return string.slice(0, maxLength) + "...";
}

export default {
    truncate: truncate,
};