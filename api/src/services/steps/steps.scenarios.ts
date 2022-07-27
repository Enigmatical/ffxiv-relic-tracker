import type { Prisma } from '@prisma/client'

export const standard = defineScenario<Prisma.StepCreateArgs>({
  step: {
    one: {
      data: {
        name: 'String',
        order: 800254,
        quest: {
          create: {
            name: 'String',
            order: 5321264,
            chain: { create: { name: 'String', order: 8677541 } },
          },
        },
      },
    },
    two: {
      data: {
        name: 'String',
        order: 133774,
        quest: {
          create: {
            name: 'String',
            order: 4774887,
            chain: { create: { name: 'String', order: 7323888 } },
          },
        },
      },
    },
  },
})

export type StandardScenario = typeof standard
