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
        title:{{ element.title }}{{ element.name }}
        originaltitle:{{ element.original_title }}{{ element.original_name }}
        lang:{{ element.original_language}}
        vote:{{ element.vote_average}}
        <template v-for="(language,index) in store.langArr" :key="index">
			<div class="lang"
				v-if="element.original_language == store.langArr[index].lang">
				<img :src="getImgPath(`../assets/img/${store.langArr[index].img}`)" :alt="store.langArr[index].lang">
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