import type { RelicsForJobQuery } from 'types/graphql'

import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

export const QUERY = gql`
  query RelicsForJobQuery($jobId: Int!) {
    relicsForJob(jobId: $jobId) {
      id
      name
      reference
      chain {
        id
        name
        description
        reference
        order
      }
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div style={{ color: 'red' }}>Error: {error.message}</div>
)

export const Success = ({
  children,
  relicsForJob,
}: CellSuccessProps<
  RelicsForJobQuery & { children?: (relicsForJob) => JSX.Element }
>) => {
  if (children) {
    return <>{children(relicsForJob)}</>
  }
  return null
}
