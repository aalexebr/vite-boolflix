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
<footer>
    FOUND: {{ store.movieArray.length }}
</footer>
</template>

<style lang="scss" scoped>
@use '../assets/scss/debugger.scss' as *;
footer{
  @include debug-large;
}
</style>