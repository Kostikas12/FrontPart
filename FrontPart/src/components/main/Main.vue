<template>
  <div>
    <div class="container pt-5 pb-5">
      <div class="col-12 text-center">
        <h6>{{ lang }}</h6>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  data () {
    return {
      test: '',
      // === Translates ===
      content: {
        ru: {
          mainInfo: 'Главная информация',
        },
        en: {
          mainInfo: 'Main info',
        },
      },
    }
  },
  computed: {
    lang() {
      return this.$store.state.language;
    },
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
