<script>
// store
import {store} from '../store'
export default{
    data(){
      return{
		store
	  }
    },
    props:{
      elementData:{
        type: Object,
        default: null
      }
    },
	methods:{
		getImgPath: function(imgPath){
			return new URL(imgPath, import.meta.url).href;
		},
		
		
	},
	computed:{
		voteFunctionForAlessio(){
			return Math.round(this.elementData.vote_average / 2)
		}
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
		<div class="overlay pos-absolute d-none">
			<ol>	
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
				<template v-if="voteFunctionForAlessio == 0">
					<i class="fa-solid fa-star"></i>
					<i v-for="(e,j) in 4" :key="j" class="fa-regular fa-star"></i>
				</template>

				<template v-else>
					<i v-for="(e,j) in voteFunctionForAlessio" :key="j"
						class="fa-solid fa-star"></i>
					<i v-for="(e,j) in (5 - voteFunctionForAlessio)" :key="j"
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
			</ol>
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