<template>
  <div class="layout">
    <Header />
    <div>
      <nuxt />
    </div>
    <Footer />
  </div>
</template>
<script>
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'

export default {
  name: 'PageBasic',
  components: {
    Header,
    Footer
  }
}
</script>
<style scoped>
.layout {
  margin: 0 auto;
  width: 1090px;
  background-color: #feda32;
}
</style>