import { mount } from "@vue/test-utils";
import TestComposant from "@/components/TestComposant.vue";

const factory = () => {
  return mount(TestComposant, {
    data() {
      return {
        testData: 1,
        n: 2
      };
    }
  });
};

describe("TestComposant", () => {
  const wrapper = factory();
  test("addition fonctionne", () => {
    expect(wrapper.vm.testAddition).toBe(3);
  });
  test("division fonctionne", () => {
    expect(wrapper.vm.testDivision).toBe(0.5);
  });
  test("multiplication fonctionne", () => {
    expect(wrapper.vm.testMultiplication).toBe(2);
  });
});
