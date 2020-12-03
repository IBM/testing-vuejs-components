import { createLocalVue, mount } from '@vue/test-utils'
import EmployeeList from "../src/components/EmployeeList.vue";
import AddUser from "../src/components/AddUser.vue";
import CarbonComponentsVue from '@carbon/vue'

const localVue = createLocalVue()
localVue.use(CarbonComponentsVue)

const columns = [
  "First Name",
  "Last Name",
  "Date of Birth",
  "Employment Start Date",
  "Employment End Date",
  "Salary"
];

const employeeData = [
  [ "Fred", "Smith", "10-Apr-1956", "21-Jan-2015", "", "50,000" ],
  [ "Tom", "Jones", "20-Feb-1976", "27-Mar-2010", "27-Mar-2019", "80,000" ],
  [ "Sam", "Smith", "20-June-1976", "13-Mar-2010", "27-Dec-2019", "43,000" ],
  [ "Judy", "Byrne", "05-May-1980", "27-Oct-2010", "13-Mar-2015", "55,000" ],
  [ "Billy", "McGuirk", "11-July-1971", "15-Nov-2010", "04-Aug-2019", "72,000" ]
];

describe("Employee List", () => {
  let wrapper;

  beforeEach(() => {
    // mount() returns a wrapped Vue component we can interact with
    wrapper = mount(EmployeeList, {
      localVue,
      propsData: {
        columns: columns,
        employeeData: employeeData,
      }
    })
  })

  test('renders employee data', () => {
    // Check Column headers are rendered correctly
    expect(checkColumnsDisplayed(wrapper)).toBeTruthy();
    // Check rows are rendered correctly
    expect(checkRowsDisplayed(wrapper)).toBeTruthy();
  })

  function checkColumnsDisplayed(wrapper) {
    return columns.every((colValue, i) => {
      let colPosition = ++i;
      return wrapper.find(`table > thead > tr > th:nth-child(${colPosition}) > span`).text() === colValue;
    });
  }

  function checkRowsDisplayed(wrapper) {
    return employeeData.every((employee, empIndex) => {
      let rowPosition = ++empIndex;
      return employee.every((fieldVal, fieldInx) => {
        let fieldPosition = ++fieldInx;
        return wrapper.find(`table > tbody > tr:nth-child(${rowPosition}) > td:nth-child(${fieldPosition})`).text() === fieldVal;
      })
    });
  }

  test('filters the employee list correctly based on search input', () => {

    wrapper.setData({
      searchCriteria: "Fred"
    });

    // Verify we only find one user and its Fred Smith
    expect(wrapper.vm.filteredUsers.length).toEqual(1);
    expect(wrapper.vm.filteredUsers[0]).toContain("Fred");
    expect(wrapper.vm.filteredUsers[0]).toContain("Smith");

    wrapper.setData({
      searchCriteria: "27"
    });

    // Verify we find the three users with '27' as part of dates
    expect(wrapper.vm.filteredUsers.length).toEqual(3);
    expect(wrapper.vm.filteredUsers[0]).toContain("Tom");
    expect(wrapper.vm.filteredUsers[0]).toContain("Jones");
    expect(wrapper.vm.filteredUsers[1]).toContain("Sam");
    expect(wrapper.vm.filteredUsers[1]).toContain("Smith");
    expect(wrapper.vm.filteredUsers[2]).toContain("Judy");
    expect(wrapper.vm.filteredUsers[2]).toContain("Byrne");
  })

  test('the add user modal appears/disappears as expected', async () => {

    let addUser = wrapper.findComponent(AddUser);
    expect(addUser.exists()).toBe(false)

    await wrapper.find('.add-user').trigger('click');
    addUser = wrapper.findComponent(AddUser);
    expect(addUser.exists()).toBe(true);

    await wrapper.vm.cancelUser();
    addUser = wrapper.findComponent(AddUser);
    expect(addUser.exists()).toBe(false);
  })

});


