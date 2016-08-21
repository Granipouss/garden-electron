<template lang="html">
  <router-link :to="item.link" class="menu-item" active-class="is-active">
    <span class="icon" v-if="item.icon">
      <i class="fa" :class="'fa-' + item.icon"></i>
    </span>
    <span>{{ item.label }}</span>
  </router-link>
</template>

<script>
export default {
  props: {
    item: { type: Object }
  }
}
</script>
