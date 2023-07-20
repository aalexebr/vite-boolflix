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
  <div class="row space-around">
    <div>
      movies found: {{ store.movieArray.length }}
    </div>
    <div>
      series found: {{ store.seriesArray.length }}
    </div>
  </div>
    
</footer>
</template>

<style lang="scss" scoped>
@use '../assets/scss/debugger.scss' as *;
footer{
  background-color: black;
  color: grey;
  padding: 10px;
}
</style>