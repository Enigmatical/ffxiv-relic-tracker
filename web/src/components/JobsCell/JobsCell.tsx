import { JobsQuery } from 'types/graphql'

import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

export const QUERY = gql`
  query JobsQuery {
    jobs {
      id
      name
      abbreviation
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
  jobs,
}: CellSuccessProps<JobsQuery & { children?: (jobs) => JSX.Element }>) => {
  if (children) {
    return <>{children(jobs)}</>
  }
  return null
}
