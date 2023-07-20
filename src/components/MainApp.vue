<script>
// store
import {store} from '../store'
export default{
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
    <ul>
      <li v-for="(element,i) in store.movieArray" :key="i">
		<!-- {{ i }} -->
		<ol>
			<li>
				<div class="poster">
					<img v-if="element.poster_path != null"
					:src="`https://image.tmdb.org/t/p/w342/${element.poster_path}`" alt="">
					<img v-else
					src="../assets/img/posternotfound.png" alt="">
					<!-- <img :src="`https://image.tmdb.org/t/p/w342/${element.poster_path}` ?? '../assets/img/posternotfound.png'" alt=""> -->
				</div>
			</li>
			<li>
				title:{{ element.title ?? element.name}}
			</li>
			<li>
				originaltitle:{{ element.original_title ?? element.original_name}}
			</li>
			<li>
				lang:{{ element.original_language}}
			</li>
			<li>
				 vote: 
					<template v-if="Math.round(element.vote_average / 2) == 0">
						<i class="fa-solid fa-star"></i>
						<i v-for="(e,j) in 4" :key="j" class="fa-regular fa-star"></i>
					</template>

					<template v-else>
						<i v-for="(e,j) in Math.round(element.vote_average / 2)" :key="j"
							class="fa-solid fa-star"></i>
						<i v-for="(e,j) in (5 - Math.round(element.vote_average / 2))" :key="j"
							class="fa-regular fa-star"></i>
					</template>
			</li>
			<li>
				<!-- <template v-if="store.availableFlags.includes(element.original_language)">
					<template v-for="(language,langIndex) in store.langArr" :key="langIndex">
						<div class="lang"
							v-if="element.original_language == store.langArr[langIndex].lang">
							<img :src="getImgPath(`../assets/img/${store.langArr[langIndex].img}`)" :alt="element.original_language">
						</div>
					</template>
				</template>
				<span v-else>
					lang:{{ element.original_language}}
				</span> -->
				<div class="lang">
					<img :src="getImgPath(`../assets/img/${store.langAr[element.original_language]}`)" :alt="element.original_language">
				</div>
			</li>
		</ol>
      </li>
    </ul>
	<template v-if="store.seriesArray.length != 0">
		<h1>
			series
		</h1>
		<!-- single card -->
	</template>
</main>
</template>

<style lang="scss" scoped>
@use '../assets/scss/debugger.scss' as *;
main{
  @include debug-large-two;
  ul,ol{
    margin-left: 25px;
	.poster{
		display: inline-block;
		width: 100px;
		img{
			width: 100%;
		}
	}
	.lang{
		width: 20px;
		display: inline-block;
		img{
			width: 100%;
		}
	}
  }
}
</style>