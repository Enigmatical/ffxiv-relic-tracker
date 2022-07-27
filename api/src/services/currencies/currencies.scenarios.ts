import type { Prisma } from '@prisma/client'

export const standard = defineScenario<Prisma.CurrencyCreateArgs>({
  currency: {
    one: {
      data: {
        name: 'String',
        amount: 4826906,
        item: {
          create: {
            name: 'String',
            order: 990816,
            amount: 9808181,
            step: {
              create: {
                name: 'String',
                order: 5788240,
                quest: {
                  create: {
                    name: 'String',
                    order: 3693920,
                    chain: { create: { name: 'String', order: 2620549 } },
                  },
                },
              },
            },
          },
        },
      },
    },
    two: {
      data: {
        name: 'String',
        amount: 6335503,
        item: {
          create: {
            name: 'String',
            order: 5107210,
            amount: 2987360,
            step: {
              create: {
                name: 'String',
                order: 9461188,
                quest: {
                  create: {
                    name: 'String',
                    order: 54935,
                    chain: { create: { name: 'String', order: 1240179 } },
                  },
                },
              },
            },
          },
        },
      },
    },
  },
})

export type StandardScenario = typeof standard
