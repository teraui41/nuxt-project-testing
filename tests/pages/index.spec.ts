import { mount } from "@vue/test-utils";
import {mockPermissions} from "../../dummies/mockPermissions";
import Index from "../../src/pages/index.vue";
import { findLabel } from "../../src/utils/findLabel";

const testList = [
  {
    value: "code A",
    expectedValue: "label A",
  },
  {
    value: "code B",
    expectedValue: "label B",
  },
  {
    value: "code C",
    expectedValue: "label C",
  },
  {
    value: "code B-1",
    expectedValue: "label B-1",
  },
  {
    value: "code B-1-1",
    expectedValue: "label B-1-1",
  },
  {
    value: "code B-2",
    expectedValue: "label B-2",
  },
  {
    value: "code C-1",
    expectedValue: "label C-1",
  },
  {
    value: "code E",
    expectedValue: "",
  },
];

describe("index spec", () => {

  it("should render proper", () => {
    const wrapper = mount(Index);
    expect(wrapper.element).toMatchSnapshot();
  });

  testList.forEach( (testItem) => {
    it(`validate code ${testItem.value}`, () => {
      const result = findLabel(testItem.value, mockPermissions);
      expect(result).toBe(testItem.expectedValue);
    });
  });

});
