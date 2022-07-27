import {
  currencies,
  currency,
  createCurrency,
  updateCurrency,
  deleteCurrency,
} from './currencies'
import type { StandardScenario } from './currencies.scenarios'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float and DateTime types.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('currencies', () => {
  scenario('returns all currencies', async (scenario: StandardScenario) => {
    const result = await currencies()

    expect(result.length).toEqual(Object.keys(scenario.currency).length)
  })

  scenario('returns a single currency', async (scenario: StandardScenario) => {
    const result = await currency({ id: scenario.currency.one.id })

    expect(result).toEqual(scenario.currency.one)
  })

  scenario('creates a currency', async (scenario: StandardScenario) => {
    const result = await createCurrency({
      input: {
        name: 'String',
        amount: 6506306,
        itemId: scenario.currency.two.itemId,
      },
    })

    expect(result.name).toEqual('String')
    expect(result.amount).toEqual(6506306)
    expect(result.itemId).toEqual(scenario.currency.two.itemId)
  })

  scenario('updates a currency', async (scenario: StandardScenario) => {
    const original = await currency({ id: scenario.currency.one.id })
    const result = await updateCurrency({
      id: original.id,
      input: { name: 'String2' },
    })

    expect(result.name).toEqual('String2')
  })

  scenario('deletes a currency', async (scenario: StandardScenario) => {
    const original = await deleteCurrency({ id: scenario.currency.one.id })
    const result = await currency({ id: original.id })

    expect(result).toEqual(null)
  })
})
