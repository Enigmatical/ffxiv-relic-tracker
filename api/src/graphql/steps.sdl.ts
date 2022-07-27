export const schema = gql`
  type Step {
    id: Int!
    name: String!
    order: Int!
    description: String
    quest: Quest!
    questId: Int!
    items: [Item]!
  }

  type Query {
    steps: [Step!]! @requireAuth
    step(id: Int!): Step @requireAuth
  }

  input CreateStepInput {
    name: String!
    order: Int!
    description: String
    questId: Int!
  }

  input UpdateStepInput {
    name: String
    order: Int
    description: String
    questId: Int
  }

  type Mutation {
    createStep(input: CreateStepInput!): Step! @requireAuth
    updateStep(id: Int!, input: UpdateStepInput!): Step! @requireAuth
    deleteStep(id: Int!): Step! @requireAuth
  }
`
