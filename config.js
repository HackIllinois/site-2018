const isProd = HACKILLINOIS_API_ISPROD
const api_url = (isProd) ? "https://api.hackillinois.org" : "http://api.test.hackillinois.org" 

export {api_url};
