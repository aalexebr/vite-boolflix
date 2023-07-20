<script>
// single card
import SingleCard from './singleCard.vue';
// store
import {store} from '../store'
export default{
	components:{
		SingleCard
	},
    data(){
      return{
        store
      }
    },
    methods:{
		getImgPath: function(imgPath){
			return new URL(imgPath, import.meta.url).href;
		},
		
	}
}
</script>

<template>
<main>
	<template v-if="store.movieArray.length != 0">
		<header class="text-center">
			<h1>
				movies
			</h1>
		</header>
		<div class="row wrap">
			<div class="col-25"
				v-for="(element,i) in store.movieArray" :key="i">
				<SingleCard :elementData = "element"/>
			</div>
		</div>
	</template>
	<template v-if="store.seriesArray.length != 0">
		<header class="text-center">
			<h1>
				series
			</h1>
		</header>
		<div class="row wrap">
			<div class="col-25"
				v-for="(element,i) in store.seriesArray" :key="i">
				<SingleCard :elementData = "element"/>
			</div>
		</div>
	</template>
</main>
</template>

<style lang="scss" scoped>
@use '../assets/scss/debugger.scss' as *;
@use '../assets/scss/utilities.scss' as *;
main{
//   @include debug-large-two;
  background-color: black;
  .col-25{
	// @include debug-one;
	padding: 10px;
  }
  header{
	padding: 10px;
	color: rgb(186, 186, 186);
  }
}
</style>