import { render } from '@redwoodjs/testing/web'

import RelicsPage from './RelicsPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('RelicsPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<RelicsPage />)
    }).not.toThrow()
  })
})
