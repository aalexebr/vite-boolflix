<script>
import axios from 'axios';
import componentTemplate from './components/componentTemplate.vue';

export default{
    data(){
      return{}
    },
    components: {
      componentTemplate
    },
}
</script>

<template>
  <componentTemplate/>
</template>

<style lang="scss">
@use './assets/scss/main.scss' as *;
</style>
