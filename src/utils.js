import config from "./config";

/**
 * 
 * @param {String} name 
 * @param {Number} maxLength 
 */
function truncate_name(name, maxLength = config.maxNameLength) {
    if (name.length <= maxLength) {
        return name;
    }
    return name.slice(0, maxLength) + "...";
}

export default { truncate_name };