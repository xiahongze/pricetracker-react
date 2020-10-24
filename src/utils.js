/**
 * 
 * @param {String} name 
 * @param {Number} maxLength 
 */
function truncate_string(name, maxLength) {
    if (name.length <= maxLength) {
        return name;
    }
    return name.slice(0, maxLength) + "...";
}

export default { truncate_string: truncate_string };