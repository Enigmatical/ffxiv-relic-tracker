import type {
  QueryResolvers,
  MutationResolvers,
  RelicResolvers,
} from 'types/graphql'

import { db } from 'src/lib/db'

export const relics: QueryResolvers['relics'] = () => {
  return db.relic.findMany()
}

export const relic: QueryResolvers['relic'] = ({ id }) => {
  return db.relic.findUnique({
    where: { id },
  })
}

export const relicsForJob: QueryResolvers['relicsForJob'] = ({ jobId }) => {
  return db.relic.findMany({
    where: { jobId },
    orderBy: {
      chain: {
        order: 'asc',
      },
    },
  })
}

export const createRelic: MutationResolvers['createRelic'] = ({ input }) => {
  return db.relic.create({
    data: input,
  })
}

export const updateRelic: MutationResolvers['updateRelic'] = ({
  id,
  input,
}) => {
  return db.relic.update({
    data: input,
    where: { id },
  })
}

export const deleteRelic: MutationResolvers['deleteRelic'] = ({ id }) => {
  return db.relic.delete({
    where: { id },
  })
}

export const Relic: RelicResolvers = {
  job: (_obj, { root }) =>
    db.relic.findUnique({ where: { id: root.id } }).job(),
  chain: (_obj, { root }) =>
    db.relic.findUnique({ where: { id: root.id } }).chain(),
}
