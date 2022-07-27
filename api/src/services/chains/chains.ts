import type {
  QueryResolvers,
  MutationResolvers,
  ChainResolvers,
} from 'types/graphql'

import { db } from 'src/lib/db'

export const chains: QueryResolvers['chains'] = () => {
  return db.chain.findMany()
}

export const chain: QueryResolvers['chain'] = ({ id }) => {
  return db.chain.findUnique({
    where: { id },
  })
}

export const createChain: MutationResolvers['createChain'] = ({ input }) => {
  return db.chain.create({
    data: input,
  })
}

export const updateChain: MutationResolvers['updateChain'] = ({
  id,
  input,
}) => {
  return db.chain.update({
    data: input,
    where: { id },
  })
}

export const deleteChain: MutationResolvers['deleteChain'] = ({ id }) => {
  return db.chain.delete({
    where: { id },
  })
}

export const Chain: ChainResolvers = {
  relic: (_obj, { root }) =>
    db.chain.findUnique({ where: { id: root.id } }).relic(),
  quests: (_obj, { root }) =>
    db.chain.findUnique({ where: { id: root.id } }).quests(),
}
