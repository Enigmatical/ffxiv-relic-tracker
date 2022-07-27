import { List, ListItem, ListItemText, Typography } from '@mui/material'
import type { Relic } from 'types/graphql'

import { Link } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

import RelicsCell from 'src/components/RelicsCell'

const RelicsPage = ({ jobId }) => {
  return (
    <>
      <MetaTags title="Relics" description="Relics page" />

      <Typography variant="h1">Relics</Typography>
      <RelicsCell jobId={jobId}>
        {(relics: Relic[]) => {
          return (
            <List>
              {relics.map((relic) => {
                return (
                  <ListItem key={relic.name} component={Link} to={'#'}>
                    <ListItemText
                      primary={relic.name}
                      secondary={relic.chain.name}
                    />
                  </ListItem>
                )
              })}
            </List>
          )
        }}
      </RelicsCell>
    </>
  )
}

export default RelicsPage
