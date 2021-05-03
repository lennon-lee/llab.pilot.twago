<template>
  <div class="slide-group-wrap">
    <div class="slide-group">
      <template v-for="(obj, index) in data">
        <Slide :key="index" :src="obj.url" :width="obj.width" :height="obj.height" />
      </template>
    </div>
    <div class="slide-arrow">
      <div class="slide-arrow-left" @click="onClick($event, move)">
        <fa :icon="['fas', 'chevron-left']" />
      </div>
      <div class="slide-arrow-right" @click="onClick($event, -move)">
        <fa :icon="['fas', 'chevron-right']" />
      </div>
    </div>
  </div>
</template>

<script>
import Slide from '@/components/ui/Slide.vue';
export default {
  name: 'SlideGroup',
  components: {
    Slide
  },
  props: {
    data: {
      type: Array,
      required: false,
      default: () => []
    },
    move: {
      type: Number,
      required: false,
      default: 200
    }
  },
  mounted () {
    this.init();
  },
  methods: {
    init() {
      const target = document.getElementsByClassName('slide-group')[0];
      const style = window.getComputedStyle(target);
      const width = this.data.length * (this.data[0].width + 15);
      target.style.width = width + 'px';

      // add opacity animation
      document.addEventListener('scroll', function() {
        if (style.opacity == 0 && window.scrollY > 700) {
          setTimeout(function() {
            target.style.opacity = 1;
          }, 100);
        }
      });
    },
    onClick (event, distance) {
      const target = event.target.closest('.slide-group-wrap').getElementsByClassName('slide-group')[0];
      const style = window.getComputedStyle(target);
      const matrix = new WebKitCSSMatrix(style.transform);
      const move = matrix.m41 + distance;
      const limit = -style.width.split('px')[0] - ((distance + 40) * 2);
      if (move > 0 || move < limit) {
        return;
      }
      target.style.transform = 'translateX(' + move + 'px)';
    }
  }
}
</script>
<style scoped src="@/assets/styles/ui/SlideGroup.css">
</style>
