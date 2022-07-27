import type { Prisma } from '@prisma/client'

export const standard = defineScenario<Prisma.RelicCreateArgs>({
  relic: {
    one: {
      data: {
        name: 'String',
        job: { create: { name: 'String', abbreviation: 'String' } },
        chain: { create: { name: 'String', order: 8536369 } },
      },
    },
    two: {
      data: {
        name: 'String',
        job: { create: { name: 'String', abbreviation: 'String' } },
        chain: { create: { name: 'String', order: 2117810 } },
      },
    },
  },
})

export type StandardScenario = typeof standard
