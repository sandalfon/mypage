
<template>
  <div class='center-content min-vh-100  '>

    <b-img src='@/assets/images/gvieira.jpeg' class='gvieira-logo' fluid
             right rounded></b-img>
    <nuxt-content class='gvieira-text' :document='content' left/>
    
  </div>
</template>

<script>
export default {
  async asyncData({ $content }) {
    return { 
      content: await $content('index').fetch(), 
      content1: await $content('index1').fetch(), 
    content2: await $content('index2').fetch(), 
    content3: await $content('index3').fetch(), 
    content4: await $content('index4').fetch() }
  }
}
</script>