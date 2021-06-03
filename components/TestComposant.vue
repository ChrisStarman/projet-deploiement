<template>
  <div>
    <div>{{ testAddition }}</div>
    <div>{{ testDivision }}</div>
    <div>{{ testMultiplication }}</div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      testData: 1,
      n: 3
    };
  },
  computed: {
    testAddition() {
      return this.testData + this.n;
    },
    testMultiplication() {
      return this.testData * this.n;
    },
    testDivision() {
      return this.testData / this.n;
    }
  }
};
</script>
