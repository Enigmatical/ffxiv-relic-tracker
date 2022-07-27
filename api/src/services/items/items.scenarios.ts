import type { Prisma } from '@prisma/client'

export const standard = defineScenario<Prisma.ItemCreateArgs>({
  item: {
    one: {
      data: {
        name: 'String',
        order: 2057017,
        amount: 6191728,
        step: {
          create: {
            name: 'String',
            order: 6778082,
            quest: {
              create: {
                name: 'String',
                order: 5683279,
                chain: { create: { name: 'String', order: 2795904 } },
              },
            },
          },
        },
      },
    },
    two: {
      data: {
        name: 'String',
        order: 6444034,
        amount: 5415717,
        step: {
          create: {
            name: 'String',
            order: 2038324,
            quest: {
              create: {
                name: 'String',
                order: 4279557,
                chain: { create: { name: 'String', order: 3311249 } },
              },
            },
          },
        },
      },
    },
  },
})

export type StandardScenario = typeof standard
