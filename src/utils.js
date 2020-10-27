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

/**
 * 
 * @param {string} url 
 * @param {object} query 
 */
function get(url, query) {
    const urlObj = new URL(url);
    if (query) {
        urlObj.search = new URLSearchParams(query).toString();
    }
    const req = new Request(urlObj, { method: "GET" });
    return fetch(req);
}

function sendJsonVia(choice) {
    return (url, obj) => {
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');
        const req = new Request(url, { method: choice, headers: headers, body: JSON.stringify(obj) })
        return fetch(req);
    }
}

export default {
    truncate: truncate,
    get: get,
    post: sendJsonVia('POST'),
    put: sendJsonVia('PUT'),
};