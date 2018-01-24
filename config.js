
const isProd = process.env["SITE_ENV"] !== undefined && process.env["SITE_ENV"] === "master";

const api_url = isProd ? "https://api.hackillinois.org" : "http://api.test.hackillinois.org"

export {api_url};
