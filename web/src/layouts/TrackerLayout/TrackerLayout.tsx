import { Container, Link as MuiLink, Typography } from '@mui/material'

import { routes, Link } from '@redwoodjs/router'

type TrackerLayoutProps = {
  children?: React.ReactNode
}

const TrackerLayout = ({ children }: TrackerLayoutProps) => {
  return (
    <Container maxWidth="lg">
      <Typography>
        <MuiLink component={Link} to={routes.index()}>
          &laquo; Back to Jobs
        </MuiLink>

        {children}
      </Typography>
    </Container>
  )
}

export default TrackerLayout
