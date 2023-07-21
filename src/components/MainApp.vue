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
        store,
      }
    },
    methods:{
		getImgPath: function(imgPath){
			return new URL(imgPath, import.meta.url).href;
		},
		getMovieActorList(item){
			axios.get(`https://api.themoviedb.org/3/movie/${item.id}/credits`,{
						params:{
							api_key:'a030de96d73a49e420c677a36c407e57',
							}
						})
				.then(response=>{
					this.store.actorList =[]
					// console.log(response.data.cast)
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
					// console.log(this.store.actorList)
				})
				
		},
		getMovieGenre(item){
			this.store.currentItemGenre=[]
			for(let i=0; i<this.store.genreListMovie.genres.length; i++){
				if(item.genre_ids.includes(this.store.genreListMovie.genres[i].id)){
					// console.log(this.store.genreListMovie.genres[i].name)
					this.store.currentItemGenre.push(this.store.genreListMovie.genres[i].name)
					console.log(this.store.currentItemGenre)
				}
			}
		},
		getSeriesGenre(item){
			this.store.currentItemGenre=[]
			for(let i=0; i<this.store.genreListSeries.genres.length; i++){
				if(item.genre_ids.includes(this.store.genreListSeries.genres[i].id)){
					// console.log(this.store.genreListSeries.genres[i].name)
					this.store.currentItemGenre.push(this.store.genreListSeries.genres[i].name)
					console.log(this.store.currentItemGenre)
				}
			}
		},
		getMovieInfo(item){
			// this.getMovieActorList(item)
			// this.getItemGenre(item)
			console.log(item)
			this.getMovieActorList(item)
			this.getMovieGenre(item)
		},
		getSeriesInfo(item){
			// this.getMovieActorList(item)
			// this.getItemGenre(item)
			console.log(item)
			this.getMovieActorList(item)
			this.getSeriesGenre(item)
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
							@moreInfo="getMovieInfo(element)"/>
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
							@moreInfo="getSeriesInfo(element)"/>
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