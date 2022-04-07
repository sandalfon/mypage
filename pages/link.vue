
<template>
  <div center-content min-vh-100   >

 <nuxt-content class='gvieira-text' :document='content' />
<iframe width="560" height="315" src="https://www.youtube.com/embed/zzrJyUeMPwI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>


</div>
</template>

<script>
export default {
  async asyncData({ $content }) {
    return { content: await $content('link').fetch() }
  }
}
</script>
