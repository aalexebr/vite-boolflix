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
					console.log(response.data.results)
					this.store.movieArray=response.data.results
					console.log(this.store.movieArray)
					this.store.searchText=''
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
					// console.log('get',response.data.results)
					this.store.seriesArray=response.data.results
					// let newArr =[]
					// newArr = response.data.results
					// for(let i=0; i<newArr.length; i++){
					// 	this.store.movieArray.push(newArr[i])
					// }
					// console.log('storeArr',this.store.movieArray)
					this.store.searchText=''
				}
			)

		},
		getImgPath: function(imgPath){
			return new URL(imgPath, import.meta.url).href;
		}
	},
	created(){
		// this.searchMovies()
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
