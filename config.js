
const isProd = process.env["TRAVIS_BRANCH"] !== undefined && process.env["TRAVIS_BRANCH"] === "master";

const api_url = isProd ? "https://api.hackillinois.org" : "http://api.test.hackillinois.org"

export {api_url};
