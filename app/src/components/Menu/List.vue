<template lang="html">
  <div>
    <slot name="label" class="menu-label"></slot>
    <ul class="menu-list">
      <li><a href="#">Dashboard</a></li>
      <li><a href="#">Customers</a></li>
    </ul>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
    }
  },
  computed: {},
  ready: function () {},
  attached: function () {},
  methods: {},
  components: {}
}
</script>

<style lang="css">
</style>
