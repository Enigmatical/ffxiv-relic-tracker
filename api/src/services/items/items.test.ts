import { items, item, createItem, updateItem, deleteItem } from './items'
import type { StandardScenario } from './items.scenarios'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float and DateTime types.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('items', () => {
  scenario('returns all items', async (scenario: StandardScenario) => {
    const result = await items()

    expect(result.length).toEqual(Object.keys(scenario.item).length)
  })

  scenario('returns a single item', async (scenario: StandardScenario) => {
    const result = await item({ id: scenario.item.one.id })

    expect(result).toEqual(scenario.item.one)
  })

  scenario('creates a item', async (scenario: StandardScenario) => {
    const result = await createItem({
      input: {
        name: 'String',
        order: 7892892,
        amount: 9376156,
        stepId: scenario.item.two.stepId,
      },
    })

    expect(result.name).toEqual('String')
    expect(result.order).toEqual(7892892)
    expect(result.amount).toEqual(9376156)
    expect(result.stepId).toEqual(scenario.item.two.stepId)
  })

  scenario('updates a item', async (scenario: StandardScenario) => {
    const original = await item({ id: scenario.item.one.id })
    const result = await updateItem({
      id: original.id,
      input: { name: 'String2' },
    })

    expect(result.name).toEqual('String2')
  })

  scenario('deletes a item', async (scenario: StandardScenario) => {
    const original = await deleteItem({ id: scenario.item.one.id })
    const result = await item({ id: original.id })

    expect(result).toEqual(null)
  })
})
