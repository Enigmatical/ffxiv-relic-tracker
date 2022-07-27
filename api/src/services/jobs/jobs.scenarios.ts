import type { Prisma } from '@prisma/client'

export const standard = defineScenario<Prisma.JobCreateArgs>({
  job: {
    one: { data: { name: 'String', abbreviation: 'String' } },
    two: { data: { name: 'String', abbreviation: 'String' } },
  },
})

export type StandardScenario = typeof standard
