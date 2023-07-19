import { reactive } from 'vue'
export const store = reactive({
                        searchText :'',
						searchArray :[],
						langArr:[
							{
								lang:'it',
								img: 'it.png'
							},
							{
								lang:'en',
								img: 'uk.png'
							},
							{
								lang:'ja',
								img: 'ja.png'
							},
						]
                     });