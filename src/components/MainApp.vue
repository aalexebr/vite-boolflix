<script>
// store
import {store} from '../store'
export default{
    data(){
      return{
        store
      }
    },
    components: {

    }
}
</script>

<template>
<main>
    <ul>
      <li v-for="(element,i) in store.searchArray" :key="i">
        {{ element.title }}
        {{ element.original_title }}
        {{ element.original_language}}
        {{ element.vote_average}}
      </li>
    </ul>
</main>
</template>

<style lang="scss" scoped>
@use '../assets/scss/debugger.scss' as *;
main{
  @include debug-large-two;
}
</style>