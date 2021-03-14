import { shallowMount } from '@vue/test-utils'
import Header from '@/components/App/Header.vue'
import Dropdown from '@/components/App/Dropdown.vue'

describe('Header component', () => {
  it('open dropdown', async () => {
    const wrapper = shallowMount(Header)

    const button = wrapper.find('button')
    await button.trigger('click')

    const mountedDropdown = wrapper.findComponent(Dropdown)

    expect(mountedDropdown).not.toBeUndefined()
  })
})
