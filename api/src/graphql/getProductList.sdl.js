export const schema = gql`
  type ImageData {
    sourceUrl: String!
  }

  type Product {
    name: String!
    price: Float!
    _id: String!
    image: ImageData!
  }

  type ProductList {
    items: [Product!]!
    proof: String!
  }

  type Query {
    getProductList: ProductList
  }
`
