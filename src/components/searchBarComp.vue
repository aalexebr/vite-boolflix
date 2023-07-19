<script>
// store
import {store} from '../store'
export default{
    data(){
      return{
        store
      }
    },
}
</script>

<template>
<header>
    <form action="" @submit.prevent="$emit('search')">
      <input type="text" v-model="store.searchText">
      <button type="submit">
        search
      </button>
    </form>
</header>
</template>

<style lang="scss" scoped>
@use '../assets/scss/debugger.scss' as *;
header{
  @include debug-large;
}
</style>
