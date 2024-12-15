const getCategoryList = async (
  cookie: string,
) => {
  const apiBaseUrl = "http://57.180.44.232/api/"
  const response = await fetch(
    `${ apiBaseUrl }items/create?endpoint=category`,
    {
      headers: {
        cookie: cookie,
      },
    }
  )
  const categoryList = response.status === 200 ? await response.json() : []
  return categoryList
}

export default getCategoryList