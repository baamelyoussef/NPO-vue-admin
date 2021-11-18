<template>
  <v-btn
    class="primary float"
    @click="down"
    icon
    large
    dark
    fixed
    bottom
    right
  >
    <v-icon>mdi-chevron-down</v-icon>
  </v-btn>
</template>

<script>
export default {
  methods: {
    down() {
      window.scrollBy(0, 400);
    },
  },
};
</script>

<style lang="scss" scoped>
.float {
  z-index: 1000;
}
</style>
