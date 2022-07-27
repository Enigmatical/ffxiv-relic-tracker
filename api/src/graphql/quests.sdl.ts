export const schema = gql`
  type Quest {
    id: Int!
    name: String!
    order: Int!
    description: String
    chain: Chain!
    chainId: Int!
    steps: [Step]!
  }

  type Query {
    quests: [Quest!]! @requireAuth
    quest(id: Int!): Quest @requireAuth
  }

  input CreateQuestInput {
    name: String!
    order: Int!
    description: String
    chainId: Int!
  }

  input UpdateQuestInput {
    name: String
    order: Int
    description: String
    chainId: Int
  }

  type Mutation {
    createQuest(input: CreateQuestInput!): Quest! @requireAuth
    updateQuest(id: Int!, input: UpdateQuestInput!): Quest! @requireAuth
    deleteQuest(id: Int!): Quest! @requireAuth
  }
`
