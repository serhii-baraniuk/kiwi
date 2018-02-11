const queryParams = params =>
  Object.keys(params)
    .filter(k => params[k] !== undefined)
    .map(k => `${encodeURIComponent(k)}=${encodeURIComponent(params[k])}`)
    .join('&')

export default queryParams
