<script>
// single card
import SingleCard from './singleCard.vue';
// store
import {store} from '../store'
// axios
import axios from 'axios';
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
		getMovieActorList(item){
			axios.get(`https://api.themoviedb.org/3/movie/${item}/credits`,{
						params:{
							api_key:'a030de96d73a49e420c677a36c407e57',
							}
						})
				.then(response=>{
					this.store.actorList =[]
					console.log(response.data.cast)
					if(response.data.cast.length >=5){
						for(let i=0; i<5 ; i++){
						this.store.actorList.push(response.data.cast[i].name)
						}
					}
					else{
						for(let i=0; i<response.data.cast.length ; i++){
						this.store.actorList.push(response.data.cast[i].name)
						}
					}
					console.log(this.store.actorList)
				})
		}
		
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
				<SingleCard :elementData = "element"
							@click="getMovieActorList(element.id)"/>
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
				<SingleCard :elementData = "element"
							@click="getMovieActorList(element.id)"/>
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