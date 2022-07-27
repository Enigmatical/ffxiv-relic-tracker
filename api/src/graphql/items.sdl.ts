export const schema = gql`
  type Item {
    id: Int!
    name: String!
    order: Int!
    amount: Int!
    step: Step!
    stepId: Int!
    cost: Currency
  }

  type Query {
    items: [Item!]! @requireAuth
    item(id: Int!): Item @requireAuth
  }

  input CreateItemInput {
    name: String!
    order: Int!
    amount: Int!
    stepId: Int!
  }

  input UpdateItemInput {
    name: String
    order: Int
    amount: Int
    stepId: Int
  }

  type Mutation {
    createItem(input: CreateItemInput!): Item! @requireAuth
    updateItem(id: Int!, input: UpdateItemInput!): Item! @requireAuth
    deleteItem(id: Int!): Item! @requireAuth
  }
`
