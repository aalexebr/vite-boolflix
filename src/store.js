import { reactive } from 'vue'
export const store = reactive({
                        searchText :'',
						movieArray :[],
						seriesArray :[],
						langArr:[
							{
								lang:'it',
								img: 'it.png'
							},
							{
								lang:'en',
								img: 'en.png'
							},
							{
								lang:'ja',
								img: 'ja.png'
							},
						],
						langAr:{
							'it': 'it.png',
							'en': 'en.png',
							'ja': 'ja.png'
						},
						availableFlags:['en', 'it', 'ja']
                     });