<template>
  <div class="container">
    <div>
      <div class="main-section-wrap">
        <div class="main-section-type">Coffer maroon killick bilge list driver</div>
        <div class="main-section-title">
          Man-of-war Nelsons folly quarter <br />
          bowsprit rutters pressgang haul wind <br />
          quarterdeck walk the plank knave. <br />
        </div>
      </div>
      <div class="article-section-wrap">
        <div class="article-section">
          <div class="article-secton-icon">
            <fa :icon="['fas', 'child']" />
          </div>
          <div class="article-section-info">
            <div class="article-section-info-title">Resist</div>
            <div class="article-section-info-desc">
              Movements collaborate but systems
              thinking commitment boots on the
              ground. A inclusive justice
              segmentation ideate impact investing.
              Scale and impact agile, social
              enterprise or youth B-corp.
            </div>
          </div>
        </div>
        <div class="article-section">
          <div class="article-secton-icon">
            <fa :icon="['fas', 'hockey-puck']" />
          </div>
          <div class="article-section-info">
            <div class="article-section-info-title">Big data</div>
            <div class="article-section-info-desc">
              Strengthening infrastructure;
              collaborative cities efficient,
              enterpreneur natural resources
              expose the truth collaborative
              consumption. Humanitarian capacity
              building and, justice low-hanging fruit
              society bandwidth changemaker
              challenges and opportunities.
            </div>
          </div>
        </div>
        <div class="article-section">
          <div class="article-secton-icon">
            <fa :icon="['fas', 'ghost']" />
          </div>
          <div class="article-section-info">
            <div class="article-section-info-title">Game-changer</div>
            <div class="article-section-info-desc">
              Empower communities parse thought
              leadership, citizen-centered; mass
              incarceration impact black lives matter
              deep dive the resistance. mass
              incarceration citizen-centered game-
              changer emerging; collaborate global.
              But, strategy game-changer move.
            </div>
          </div>          
        </div>
        <div class="article-section">
          <div class="article-secton-icon">
            <fa :icon="['fas', 'portrait']" />
          </div>
          <div class="article-section-info">
            <div class="article-section-info-title">Empower</div>
            <div class="article-section-info-desc">
              Social intrapreneurship parse natural
              resources social entrepreneur social
              capital social innovation agile. Thought
              provoking because; mobilize, design
              thinking catalyze.
            </div>
          </div>          
        </div>
        <div style="clear: left;"></div>
      </div>
      <div class="comment-section-wrap">
        <div class="comment-section">
          <div>communities green space</div>
          <div>strengthening infrastructure</div>
          <div>dynamic families thought leader.</div>    
        </div>    
        <div class="comment-section-cc">150 CC</div>
      </div>
      
      <!-- Slide Component -->
      <div>
        <SlideGroup :data="slideData" :move="600" />
      </div>
    </div>
  </div>
</template>

<script>
import SlideGroup from '@/components/ui/SlideGroup.vue';
export default {
  layout: 'pageBasic',
  name: 'index',
  components: {
    SlideGroup
  },
  data () {
    return {
      title: 'Twago Home Page',
      slideData: [
        {
          url: '/images/pexels-ben-cheung-424130.jpg',
          width: 620,
          height: 286
        }, {
          url: '/images/pexels-ben-cheung-1555757.jpg',
          width: 620,
          height: 286
        }, {
          url: '/images/pexels-ben-cheung-424131.jpg',
          width: 620,
          height: 286
        }, {
          url: '/images/pexels-ben-cheung-424132.jpg',
          width: 620,
          height: 286
        }, {
          url: '/images/pexels-ben-cheung-423912.jpg',
          width: 620,
          height: 286
        }, {
          url: '/images/pexels-ben-cheung-424734.jpg',
          width: 620,
          height: 286
        }
      ]
    }
  },
  // FOR SEO
  head() {
    return {
      title: this.title,
      meta: [
        {
          hid: 'description',
          naem: 'description',
          content: this.title + ' description'
        }
      ]
    }
  }
}
</script>

<style scoped src="@/assets/styles/index.css">
</style>