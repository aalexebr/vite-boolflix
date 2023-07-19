<script>
// store
import {store} from './store'
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
			axios.get('https://api.themoviedb.org/3/search/movie',{
					params:{
						api_key:'a030de96d73a49e420c677a36c407e57',
						query: this.store.searchText
						}
					})
				.then(response=>{
					console.log(response.data.results)
					this.store.searchArray=response.data.results
					console.log(this.store.searchArray)
					this.store.searchText=''
				})
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
	<searchBarComponent
	@search="searchMovies"/>
	<MainApp/>
  	<FooterApp/>
</template>

<style lang="scss">
@use './assets/scss/main.scss' as *;
</style>
