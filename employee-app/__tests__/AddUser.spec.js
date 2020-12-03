import { createLocalVue, mount } from '@vue/test-utils'
import AddUser from "../src/components/AddUser.vue";
import CarbonComponentsVue from '@carbon/vue'

const localVue = createLocalVue()
localVue.use(CarbonComponentsVue)

describe("Add User modal", () => {
  let wrapper;

  beforeEach(() => {
    // mount() returns a wrapped Vue component we can interact with
    wrapper = mount(AddUser, {
      localVue,
      propsData: {
          closeAriaLabel: "Close the button",
          size: "medium",
          visible: true,
          autoHideOff: false
      }
    })
  })

  test('displays a required field when first name field is empty', async () => {
    const addButton = wrapper.find('button.bx--btn--primary');
    await addButton.trigger('click');

    expect(wrapper.find('div.first-name > div.bx--form-requirement').exists()).toBe(true);
  })


  test('emits an an `add-user` event with user to be added, when add button is clicked', async () => {

    // set the components data
    await wrapper.setData({
      firstName: 'Mark',
      lastName: 'Jones',
      dateOfBirth: "10/08/1978",
      employmentStartDate: "10/01/2010",
      employmentEndDate: "13/07/2019",
      salary: "55000"
    });

    // trigger a click on the add button
    const addButton = wrapper.find('button.bx--btn--primary');
    await addButton.trigger('click');

    // Verify we emitted an 'add-user' event containing the new users details
    expect(wrapper.emitted()).toHaveProperty('add-user');
    expect(wrapper.emitted('add-user')[0]).toEqual([["Mark", "Jones", "10/08/1978", "10/01/2010", "13/07/2019", "55000"]]);
  })

});


