import { useQuery, gql } from '@redwoodjs/web'

export default () => {
  const { loading, error, data } = useQuery(
    gql`
      query {
        getProductList {
          proof
          items {
            name
            price
            _id
            image {
              sourceUrl
            }
          }
        }
      }
    `
  )

  if (loading) return <h1>Loading...</h1>

  if (error) return <h1>Failed to load TakeShape. {error.data}</h1>

  const { items, proof } = data.getProductList

  return (
    <>
      <h1>TakeShape Alt Product List</h1>
      <h2>{proof}</h2>
      <ul
        style={{
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          rowGap: '3rem',
          fontSize: '2rem',
        }}
      >
        {items.map((product) => (
          <li
            key={product._id}
            style={{
              width: '100%',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              rowGap: '1rem',
            }}
          >
            <span>
              <b>{product.name}:</b>${product.price}
            </span>
            <img
              alt={product.name}
              src={product.image.sourceUrl}
              style={{
                width: '400px',
                height: '300px',
              }}
            ></img>
          </li>
        ))}
      </ul>
    </>
  )
}
