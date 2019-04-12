import {mount} from "@vue/test-utils";
import Index from "../../src/pages/index.vue";

describe("index spec", () => {
  it("should render proper", () => {
    const wrapper = mount(Index);
    expect(wrapper.element).toMatchSnapshot();
  });
});
