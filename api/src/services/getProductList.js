export const getProductList = async () => {
  try {
    const result = await fetch(`${process.env.TAKESHAPE_ENDPOINT}`, {
      headers: {
        Authorization: `Bearer ${process.env.TAKESHAPE_API_KEY}`,
      },
      method: 'POST',
      body: JSON.stringify({
        query: `
          query{
            getProductList{
              items{
                _id
                name
                price
                image{
                  sourceUrl
                }
              }
            }
          }`,
      }),
    })

    const resultJSON = await result.json()

    const { items } = resultJSON.data.getProductList

    return {
      items,
      proof: 'This is proof that you got this data from redwood!',
    }
  } catch (error) {
    return {
      error,
    }
  }
}
