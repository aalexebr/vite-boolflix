<script>
// store
import {store} from '../store';
// axios
import axios from 'axios';
export default{
    data(){
      return{
		store,
		flag: false,
		buttonText:['hide','show'],
		n:1,
		actorList:[]
	  }
    },
    props:{
      elementData:{
        type: Object,
        default: null
      },
	  buttonFlag: {
        type: Boolean,
        default: false
      },
    },
	methods:{
		getImgPath: function(imgPath){
			return new URL(imgPath, import.meta.url).href;
		},
		hideInfo(){
			this.flag = !this.flag
			if(this.n==1){
				this.n=0
			}
			else{
				this.n=1
			}
		},
		// getMovieActorList(item){
		// 	axios.get(`https://api.themoviedb.org/3/movie/${item}/credits`,{
		// 				params:{
		// 					api_key:'a030de96d73a49e420c677a36c407e57',
		// 					}
		// 				})
		// 		.then(response=>{
		// 			this.actorList =[]
		// 			if(response.data.cast.length >=5){
		// 				for(let i=0; i<5 ; i++){
		// 				this.actorList.push(response.data.cast[i].name)
		// 				}
		// 			}
		// 			else{
		// 				for(let i=0; i<response.data.cast.length ; i++){
		// 				this.actorList.push(response.data.cast[i].name)
		// 				}
		// 			}
		// 		})
		// },
		getItemGenre(item){
			this.store.currentItemGenre=[]
			for(let i=0; i<this.store.genreListMovie.genres.length; i++){
				if(item.genre_ids.includes(this.store.genreListMovie.genres[i].id)){
					// console.log(this.store.genreListMovie.genres[i].name)
					this.store.currentItemGenre.push(this.store.genreListMovie.genres[i].name)
					console.log(this.store.currentItemGenre)
				}
			}
		},
		
	},
	computed:{
		vote(){
			return Math.round(this.elementData.vote_average / 2)
		},
		
	}
}
</script>

<template>
	
	<div class="poster pos-relative">
		<img v-if="elementData.poster_path != null"
		:src="`https://image.tmdb.org/t/p/w342/${elementData.poster_path}`" alt="">
		<img v-else
		src="../assets/img/posternotfound.png" alt="">
		<!-- <img :src="`https://image.tmdb.org/t/p/w342/${elementData.poster_path}` ?? '../assets/img/posternotfound.png'" alt=""> -->
		<div class="overlay pos-absolute d-none" @mouseleave="flag=false">
			<ul :class="{'d-none':flag}">	
				<li>
					<!-- title: -->
					<h3>
						{{ elementData.title ?? elementData.name}}
					</h3>
				</li>
				<li>
					<!-- originaltitle: -->
					<h5>
						{{ elementData.original_title ?? elementData.original_name}}
					</h5>
				</li>
				<!-- <li>
					lang:{{ elementData.original_language}}
				</li> -->
				<li>
					<template v-if="vote == 0">
						<i class="fa-solid fa-star"></i>
						<i v-for="(e,j) in 4" :key="j" class="fa-regular fa-star"></i>
					</template>

					<template v-else>
						<i v-for="(e,j) in vote" :key="j"
							class="fa-solid fa-star"></i>
						<i v-for="(e,j) in (5 - vote)" :key="j"
							class="fa-regular fa-star"></i>
					</template>
				</li>
				<li>
					<!-- <template v-if="store.availableFlags.includes(elementData.original_language)">
						<template v-for="(language,langIndex) in store.langArr" :key="langIndex">
							<div class="lang"
								v-if="elementData.original_language == store.langArr[langIndex].lang">
								<img :src="getImgPath(`../assets/img/${store.langArr[langIndex].img}`)" :alt="elementData.original_language">
							</div>
						</template>
					</template>
					<span v-else>
						lang:{{ elementData.original_language}}
					</span> -->
					<div class="lang">
						<img :src="getImgPath(`../assets/img/${store.langAr[elementData.original_language]}`)" :alt="elementData.original_language">
					</div>
				</li>
				{{ buttonFlag }}
			</ul>
			<ul class="d-none" :class="{'display': flag}">
				<h5>
					actors:
				</h5>
				<li v-for="(actor,i) in store.actorList">
					{{ store.actorList[i] }}
				</li>
				<h5>
					genres:
				</h5>
				<li v-for="(genre,i) in store.currentItemGenre">
					{{genre}}
				</li>
			</ul>
			<button @click="$emit('moreInfo');hideInfo()">
				{{buttonText[n]}} more info
			</button>
			
		</div>
	</div>
	
	

</template>

<style lang="scss" scoped>
.poster{
		display: inline-block;
		width: 100%;
		height: 100%;
		img{
			width: 100%;
			height: 100%;
			object-fit: cover;
		}

		&:hover .overlay{
			display: block;
			z-index: 1;
			width: 100%;
			height: 100%;
			color: rgb(255, 255, 255);
			top: 0;
			background-color: rgba(0, 0, 0, 0.336);
			padding: 20px;
			i{
				color: yellow;
			}
			h3{
				text-transform: uppercase;
			}
		}
	}
.lang{
	width: 20px;
	display: inline-block;
	img{
		width: 100%;
	}
}
</style>