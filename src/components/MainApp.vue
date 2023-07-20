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
		}
	}
}
</script>

<template>
<main>
    <ul>
      <li v-for="(element,i) in store.searchArray" :key="i">
		{{ i }}
		<div class="poster">
			<img v-if="element.poster_path != null"
			:src="`https://image.tmdb.org/t/p/w342/${element.poster_path}`" alt="">
			<img v-else
			src="../assets/img/posternotfound.png" alt="">
		</div>
        title:{{ element.title }}{{ element.name }}
        originaltitle:{{ element.original_title }}{{ element.original_name }}
        lang:{{ element.original_language}}
        vote: 
		<span v-if="Math.round(element.vote_average / 2) == 0"> 1</span>
		<span v-else>{{ Math.round(element.vote_average / 2)}}</span>
        <template v-for="(language,langIndex) in store.langArr" :key="langIndex">
			<div class="lang"
				v-if="element.original_language == store.langArr[langIndex].lang">
				<img :src="getImgPath(`../assets/img/${store.langArr[langIndex].img}`)" :alt="store.langArr[langIndex].lang">
			</div>
		</template>
      </li>
    </ul>
</main>
</template>

<style lang="scss" scoped>
@use '../assets/scss/debugger.scss' as *;
main{
  @include debug-large-two;
  ul{
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