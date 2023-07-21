<script>
// store
import {store} from '../store'
export default{
    data(){
      return{
        store
      }
    },
}
</script>

<template>
<header>
	<div class="row space-between align-center">
		<h1 class="logo">
			boolflix
		</h1>
		<span>
			searching:   
			{{store.searchedItem }}
		</span>
		<div>
			<input type="text" placeholder="search title"
				v-model="store.searchText"
				v-on:keyup.enter="$emit('search')">
			<button @click="$emit('search')">
				search
			</button>
		</div>
	</div>
</header>
</template>

<style lang="scss" scoped>
@use '../assets/scss/debugger.scss' as *;
header{
	padding: 20px;
	background-color: rgb(40, 40, 40);
//   @include debug-large;
  h1{
	color: rgb(198, 2, 2);
  }
  input, button{
	padding: 5px;
  }
  button{
	border: none;
	background-color: inherit;
	color: white;
	cursor: pointer;
  }
  span{
	color: rgb(215, 215, 215);
  }
}
</style>
