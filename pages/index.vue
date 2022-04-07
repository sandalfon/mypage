<template>
  <div center class="center-content">
    <VueSlickCarousel :arrows="true" :dots="true"  class="center-content">
      <div><b-img src='@/assets/images/gvieira.jpeg' class='gvieira-logo' fluid
             right rounded="circle" width=200%></b-img>
    <nuxt-content class='gvieira-text' :document='content1' center/></div>
      <div> <nuxt-content class='gvieira-text' :document='content2' center/></div>
      <div> <nuxt-content class='gvieira-text' :document='content3' center/></div>
      <div> <nuxt-content class='gvieira-text' :document='content4' center/></div>
    </VueSlickCarousel>
  </div>
</template>

<script>


  import VueSlickCarousel from 'vue-slick-carousel'
  import 'vue-slick-carousel/dist/vue-slick-carousel.css'
  import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'
  export default {
    name: 'MyComponent',
    components: { VueSlickCarousel },
  async asyncData({ $content }) {
    return { 
    content1: await $content('index1').fetch(), 
    content2: await $content('index2').fetch(), 
    content3: await $content('index3').fetch(), 
    content4: await $content('index4').fetch() }
    
  }
  }
</script>
