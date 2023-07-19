<script>
// store
import {store} from './store'
// axios
import axios from 'axios';
// API KEY a030de96d73a49e420c677a36c407e57
import componentTemplate from './components/componentTemplate.vue';
// components
import searchBarComponent from './components/searchBarComp.vue';
import MainApp from './components/MainApp.vue';
import FooterApp from './components/FooterApp.vue';
export default{
    data(){
      return{
        store,
      }
    },
    components: {
      componentTemplate,
      searchBarComponent,
      MainApp,
      FooterApp
    },
}
</script>

<template>
  <searchBarComponent/>
  <MainApp/>
  <FooterApp/>
</template>

<style lang="scss">
@use './assets/scss/main.scss' as *;
</style>
