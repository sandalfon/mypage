<template>
  <div>
    <VueSlickCarousel :arrows="true" :dots="true" :content="content">
      <div> <nuxt-content class='gvieira-text' :document=content.content1 left/></div>
      <div> content2</div>
      <div> content3</div>
      <div> content4</div>
    </VueSlickCarousel>
  </div>
</template>
 
<script>
  import VueSlickCarousel from 'vue-slick-carousel'
  import 'vue-slick-carousel/dist/vue-slick-carousel.css'
  // optional style for arrows & dots
  import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'
 
  export default {
    name: 'MyComponent',
    components: { VueSlickCarousel },
    data(){
        return{
        content:{
            content1: 'aa'
        }
    }
    }
  }
</script> 