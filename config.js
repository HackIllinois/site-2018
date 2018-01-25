
const isProd = window.location.hostname === "hackillinois.org" || window.location.hostname === "www.hackillinois.org"

const api_url = isProd ? "https://api.hackillinois.org" : "http://api.test.hackillinois.org"

export {api_url};
