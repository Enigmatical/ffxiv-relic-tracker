import { steps, step, createStep, updateStep, deleteStep } from './steps'
import type { StandardScenario } from './steps.scenarios'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float and DateTime types.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('steps', () => {
  scenario('returns all steps', async (scenario: StandardScenario) => {
    const result = await steps()

    expect(result.length).toEqual(Object.keys(scenario.step).length)
  })

  scenario('returns a single step', async (scenario: StandardScenario) => {
    const result = await step({ id: scenario.step.one.id })

    expect(result).toEqual(scenario.step.one)
  })

  scenario('creates a step', async (scenario: StandardScenario) => {
    const result = await createStep({
      input: {
        name: 'String',
        order: 6216205,
        questId: scenario.step.two.questId,
      },
    })

    expect(result.name).toEqual('String')
    expect(result.order).toEqual(6216205)
    expect(result.questId).toEqual(scenario.step.two.questId)
  })

  scenario('updates a step', async (scenario: StandardScenario) => {
    const original = await step({ id: scenario.step.one.id })
    const result = await updateStep({
      id: original.id,
      input: { name: 'String2' },
    })

    expect(result.name).toEqual('String2')
  })

  scenario('deletes a step', async (scenario: StandardScenario) => {
    const original = await deleteStep({ id: scenario.step.one.id })
    const result = await step({ id: original.id })

    expect(result).toEqual(null)
  })
})
