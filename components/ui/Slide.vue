<template>
  <div class="slide">
    <img :src="src" :width="width" :height="height" />
  </div>
</template>
<script>
export default {
  name: 'Slide',
  props: {
    src: {
      type: String,
      required: false,
      default: ''
    },
    width: {
      type: Number,
      required: false,
      default: 620
    },
    height: {
      type: Number,
      required: false,
      default: 286
    }    
  }
}
</script>
<style scoped src="@/assets/styles/ui/Slide.css">
</style>
