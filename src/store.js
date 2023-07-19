import { reactive } from 'vue'
export const store = reactive({
                        searchText :'',
						searchArray :[],
						langArr:[
							{
								lang:'it',
								img: 'src/assets/img/it.png'
							},
							{
								lang:'en',
								img: 'src/assets/img/uk.png'
							},
							{
								lang:'ja',
								img: 'src/assets/img/ja.png'
							},
						]
                     });