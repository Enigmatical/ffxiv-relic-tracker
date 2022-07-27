import { render } from '@redwoodjs/testing/web'

import TrackerLayout from './TrackerLayout'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('TrackerLayout', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<TrackerLayout />)
    }).not.toThrow()
  })
})
