export const schema = gql`
  type Chain {
    id: Int!
    name: String!
    order: Int!
    description: String
    reference: String
    relic: [Relic]!
    quests: [Quest]!
  }

  type Query {
    chains: [Chain!]! @requireAuth
    chain(id: Int!): Chain @requireAuth
  }

  input CreateChainInput {
    name: String!
    order: Int!
    description: String
    reference: String
  }

  input UpdateChainInput {
    name: String
    order: Int
    description: String
    reference: String
  }

  type Mutation {
    createChain(input: CreateChainInput!): Chain! @requireAuth
    updateChain(id: Int!, input: UpdateChainInput!): Chain! @requireAuth
    deleteChain(id: Int!): Chain! @requireAuth
  }
`
