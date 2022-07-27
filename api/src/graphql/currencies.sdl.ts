export const schema = gql`
  type Currency {
    id: Int!
    name: String!
    amount: Int!
    item: Item!
    itemId: Int!
  }

  type Query {
    currencies: [Currency!]! @requireAuth
    currency(id: Int!): Currency @requireAuth
  }

  input CreateCurrencyInput {
    name: String!
    amount: Int!
    itemId: Int!
  }

  input UpdateCurrencyInput {
    name: String
    amount: Int
    itemId: Int
  }

  type Mutation {
    createCurrency(input: CreateCurrencyInput!): Currency! @requireAuth
    updateCurrency(id: Int!, input: UpdateCurrencyInput!): Currency!
      @requireAuth
    deleteCurrency(id: Int!): Currency! @requireAuth
  }
`
