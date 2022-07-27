import { List, ListItem, ListItemText } from '@mui/material'
import type { Job } from 'types/graphql'

import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

import JobsCell from 'src/components/JobsCell'

const JobsPage = () => {
  return (
    <>
      <MetaTags title="Jobs" description="Jobs page" />

      <h1>Jobs</h1>
      <JobsCell>
        {(jobs: Job[]) => {
          return (
            <List>
              {jobs.map((job) => {
                return (
                  <ListItem
                    key={job.abbreviation}
                    component={Link}
                    to={routes.relics({ jobId: job.id })}
                  >
                    <ListItemText
                      primary={job.name}
                      secondary={job.abbreviation}
                    />
                  </ListItem>
                )
              })}
            </List>
          )
        }}
      </JobsCell>
    </>
  )
}

export default JobsPage
