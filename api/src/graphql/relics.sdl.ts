export const schema = gql`
  type Relic {
    id: Int!
    name: String!
    reference: String
    job: Job!
    jobId: Int!
    chain: Chain!
    chainId: Int!
  }

  type Query {
    relics: [Relic!]! @requireAuth
    relic(id: Int!): Relic @requireAuth
    relicsForJob(jobId: Int!): [Relic!]! @requireAuth
  }

  input CreateRelicInput {
    name: String!
    reference: String
    jobId: Int!
    chainId: Int!
  }

  input UpdateRelicInput {
    name: String
    reference: String
    jobId: Int
    chainId: Int
  }

  type Mutation {
    createRelic(input: CreateRelicInput!): Relic! @requireAuth
    updateRelic(id: Int!, input: UpdateRelicInput!): Relic! @requireAuth
    deleteRelic(id: Int!): Relic! @requireAuth
  }
`
