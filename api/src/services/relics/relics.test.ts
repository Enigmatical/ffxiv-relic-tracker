import { relics, relic, createRelic, updateRelic, deleteRelic } from './relics'
import type { StandardScenario } from './relics.scenarios'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float and DateTime types.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('relics', () => {
  scenario('returns all relics', async (scenario: StandardScenario) => {
    const result = await relics()

    expect(result.length).toEqual(Object.keys(scenario.relic).length)
  })

  scenario('returns a single relic', async (scenario: StandardScenario) => {
    const result = await relic({ id: scenario.relic.one.id })

    expect(result).toEqual(scenario.relic.one)
  })

  scenario('creates a relic', async (scenario: StandardScenario) => {
    const result = await createRelic({
      input: {
        name: 'String',
        jobId: scenario.relic.two.jobId,
        chainId: scenario.relic.two.chainId,
      },
    })

    expect(result.name).toEqual('String')
    expect(result.jobId).toEqual(scenario.relic.two.jobId)
    expect(result.chainId).toEqual(scenario.relic.two.chainId)
  })

  scenario('updates a relic', async (scenario: StandardScenario) => {
    const original = await relic({ id: scenario.relic.one.id })
    const result = await updateRelic({
      id: original.id,
      input: { name: 'String2' },
    })

    expect(result.name).toEqual('String2')
  })

  scenario('deletes a relic', async (scenario: StandardScenario) => {
    const original = await deleteRelic({ id: scenario.relic.one.id })
    const result = await relic({ id: original.id })

    expect(result).toEqual(null)
  })
})
