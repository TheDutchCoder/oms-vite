import { mount } from '@vue/test-utils'
import HelloWorld from '../HelloWorld.vue'

describe('HelloWorld', () => {
  it('mounts', () => {
    const wrapper = mount(HelloWorld, {
      props: {
        msg: 'hu',
      },
    })

    expect(wrapper.exists()).toBe(true)
  })
})
