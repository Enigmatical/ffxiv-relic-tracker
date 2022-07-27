import type { Prisma } from '@prisma/client'

export const standard = defineScenario<Prisma.QuestCreateArgs>({
  quest: {
    one: {
      data: {
        name: 'String',
        order: 1043071,
        chain: { create: { name: 'String', order: 7750634 } },
      },
    },
    two: {
      data: {
        name: 'String',
        order: 4879175,
        chain: { create: { name: 'String', order: 1939726 } },
      },
    },
  },
})

export type StandardScenario = typeof standard
