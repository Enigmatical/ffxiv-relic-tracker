import type { Prisma } from '@prisma/client'

export const standard = defineScenario<Prisma.ChainCreateArgs>({
  chain: {
    one: { data: { name: 'String', order: 1240344 } },
    two: { data: { name: 'String', order: 8036175 } },
  },
})

export type StandardScenario = typeof standard
