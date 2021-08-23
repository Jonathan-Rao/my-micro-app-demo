/**
* @Description: subApp
* @author 饶道坤
* @date   2021/8/19 19:33
*/
<template>
  <div class="subApp-content-div">
    <!-- url为html地址 (基座应用和子应用本质是在同一个页面，这里的url只是html地址，子应用的路由还是基于浏览器地址的) -->
    <micro-app
      name="subApp"
      url="http://localhost:9562/"
      baseurl="/sub-app"
    ></micro-app>
  </div>
</template>

<script>
export default {
  name: "subApp",
  data() {
    return {};
  },
  components: {},
  computed: {},
  created() {},
  mounted() {},
  methods: {},
  watch: {},
};
</script>

<style lang="scss" scoped>
.subApp-content-div {
}
</style>
