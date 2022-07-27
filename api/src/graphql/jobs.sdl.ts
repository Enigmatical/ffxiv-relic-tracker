export const schema = gql`
  type Job {
    id: Int!
    name: String!
    abbreviation: String!
    icon: String
    relics: [Relic]!
  }

  type Query {
    jobs: [Job!]! @requireAuth
    job(id: Int!): Job @requireAuth
  }

  input CreateJobInput {
    name: String!
    abbreviation: String!
    icon: String
  }

  input UpdateJobInput {
    name: String
    abbreviation: String
    icon: String
  }

  type Mutation {
    createJob(input: CreateJobInput!): Job! @requireAuth
    updateJob(id: Int!, input: UpdateJobInput!): Job! @requireAuth
    deleteJob(id: Int!): Job! @requireAuth
  }
`
