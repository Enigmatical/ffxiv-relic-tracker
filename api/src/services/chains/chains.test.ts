import { chains, chain, createChain, updateChain, deleteChain } from './chains'
import type { StandardScenario } from './chains.scenarios'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float and DateTime types.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('chains', () => {
  scenario('returns all chains', async (scenario: StandardScenario) => {
    const result = await chains()

    expect(result.length).toEqual(Object.keys(scenario.chain).length)
  })

  scenario('returns a single chain', async (scenario: StandardScenario) => {
    const result = await chain({ id: scenario.chain.one.id })

    expect(result).toEqual(scenario.chain.one)
  })

  scenario('creates a chain', async () => {
    const result = await createChain({
      input: { name: 'String', order: 6051467 },
    })

    expect(result.name).toEqual('String')
    expect(result.order).toEqual(6051467)
  })

  scenario('updates a chain', async (scenario: StandardScenario) => {
    const original = await chain({ id: scenario.chain.one.id })
    const result = await updateChain({
      id: original.id,
      input: { name: 'String2' },
    })

    expect(result.name).toEqual('String2')
  })

  scenario('deletes a chain', async (scenario: StandardScenario) => {
    const original = await deleteChain({ id: scenario.chain.one.id })
    const result = await chain({ id: original.id })

    expect(result).toEqual(null)
  })
})
