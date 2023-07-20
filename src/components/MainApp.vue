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
		<div class="row wrap">
			<div class="col-25"
				v-for="(element,i) in store.movieArray" :key="i">
				<SingleCard :elementData = "element"/>
			</div>
		</div>
	</template>
	<template v-if="store.seriesArray.length != 0">
		<h1>
			series
		</h1>
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
  @include debug-large-two;
  .col-25{
	@include debug-one;
  }
	// .poster{
	// 	display: inline-block;
	// 	width: 100px;
	// 	img{
	// 		width: 100%;
	// 	}
	// }
	// .lang{
	// 	width: 20px;
	// 	display: inline-block;
	// 	img{
	// 		width: 100%;
	// 	}
	// }
  
}
</style>