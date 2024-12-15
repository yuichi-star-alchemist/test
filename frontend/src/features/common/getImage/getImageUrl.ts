const getImageUrl = async (
  endpoint: string,
) => {
  const apiBaseUrl = "http://57.180.44.232/api/"
  const response = await fetch(`${ apiBaseUrl }/getImageUrl?endpoint=${ endpoint }`)

  return response?.status === 200 ? await response.json() : null
}

export default getImageUrl