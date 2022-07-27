import type {
  QueryResolvers,
  MutationResolvers,
  QuestResolvers,
} from 'types/graphql'

import { db } from 'src/lib/db'

export const quests: QueryResolvers['quests'] = () => {
  return db.quest.findMany()
}

export const quest: QueryResolvers['quest'] = ({ id }) => {
  return db.quest.findUnique({
    where: { id },
  })
}

export const createQuest: MutationResolvers['createQuest'] = ({ input }) => {
  return db.quest.create({
    data: input,
  })
}

export const updateQuest: MutationResolvers['updateQuest'] = ({
  id,
  input,
}) => {
  return db.quest.update({
    data: input,
    where: { id },
  })
}

export const deleteQuest: MutationResolvers['deleteQuest'] = ({ id }) => {
  return db.quest.delete({
    where: { id },
  })
}

export const Quest: QuestResolvers = {
  chain: (_obj, { root }) =>
    db.quest.findUnique({ where: { id: root.id } }).chain(),
  steps: (_obj, { root }) =>
    db.quest.findUnique({ where: { id: root.id } }).steps(),
}
