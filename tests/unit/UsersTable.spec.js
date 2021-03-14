import { shallowMount } from '@vue/test-utils'
import UsersTable from '@/components/shared/Users/UsersTable.vue'

describe('Users table component', () => {
  it('load bad image url', () => {
    const users = [
      {
        department: 'Baby',
        email: 'Yasmin_Murazik@yahoo.com',
        first_name: 'Sidney',
        id: '1',
        lastSession: 1609293527111,
        last_name: 'Halvorson',
        profile_img: 'bad image url',
        sessions: ['2020-12-30T01:58:47.111Z', '2020-04-10T16:24:38.281Z'],
        status: true,
      },
    ]

    const wrapper = shallowMount(UsersTable, {
      propsData: { users },
    })

    const img = wrapper.find('img')

    expect(img.src).not.toBe(users[0].profile_img)
  })
})
