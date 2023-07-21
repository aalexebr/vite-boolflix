<script>
// store
import {store} from './store';
// axios
import axios from 'axios';
// API KEY a030de96d73a49e420c677a36c407e57
// import componentTemplate from './components/componentTemplate.vue';
// components
import searchBarComponent from './components/searchBarComp.vue';
import MainApp from './components/MainApp.vue';
import FooterApp from './components/FooterApp.vue';
export default{
	components: {
      searchBarComponent,
      MainApp,
      FooterApp
    },
    data(){
      return{
        store,
      }
    },
	methods:{
		searchMovies(){
			// movie
			axios.get('https://api.themoviedb.org/3/search/movie',{
					params:{
						api_key:'a030de96d73a49e420c677a36c407e57',
						query: this.store.searchText
						}
					})
				.then(response=>{
					this.store.movieArray=response.data.results
					this.store.searchedItem = this.store.searchText
					this.store.searchText=''
					// console.log(response.data.results)
				}
			)
			// series
			axios.get('https://api.themoviedb.org/3/search/tv',{
					params:{
						api_key:'a030de96d73a49e420c677a36c407e57',
						query: this.store.searchText
						}
					})
				.then(response=>{	
					this.store.seriesArray=response.data.results
					console.log(this.store.seriesArray)
					this.store.searchText=''
				})
			},
		getImgPath: function(imgPath){
			return new URL(imgPath, import.meta.url).href;
			},
		getMovieActorList(movie){
			axios.get(`https://api.themoviedb.org/3/movie/${movie}/credits`,{
					params:{
						api_key:'a030de96d73a49e420c677a36c407e57',
					}
				})
				.then(response=>{
					console.log(response.data)
				})
			},
		getGenres(){
			axios.get('https://api.themoviedb.org/3/genre/movie/list',{
						params:{
							api_key:'a030de96d73a49e420c677a36c407e57',
							}
					})
				.then(response=>{
					console.log(response.data)
					this.store.genreListMovie = response.data
				});
			axios.get('https://api.themoviedb.org/3/genre/tv/list',{
						params:{
							api_key:'a030de96d73a49e420c677a36c407e57',
						}
					})
				.then(response=>{
					console.log(response.data)
					this.store.genreListSeries = response.data
					console.log(this.store.genreListSeries)
					console.log(this.store.genreListMovie)
				});
		}
	},
	created(){
		// this.searchMovies()
		this.getGenres();
	},
	mounted(){

	}
    
}
</script>

<template>
	<div class="container">
		<searchBarComponent
			@search="searchMovies"/>
		<MainApp/>
		<FooterApp/>
	</div>
	
</template>

<style lang="scss">
@use './assets/scss/main.scss' as *;
@use './assets/scss/utilities.scss' as *;
body{
	background-color: rgb(0, 0, 0);
}
</style>
