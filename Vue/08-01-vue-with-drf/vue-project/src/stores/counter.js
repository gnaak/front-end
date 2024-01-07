import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import axios from 'axios'

export const useCounterStore = defineStore('counter', () => {
  const articles = ref([])
  const API_URL = 'http://127.0.0.1:8000'
  
  const getArticles = function() {
    axios({
      method : 'get',
      url : `${API_URL}/api/v1/articles/`
    })
    .then(res => {
      articles.value = res.data
    })
    .catch(err => console.log(err))
    
  }
  
  // const articles = ref([
  //   {id:1, title:'Article 1', content:'Content of article 1'},
  //   {id:1, title:'Article 2', content:'Content of article 2'},
  // ])
  return { articles, getArticles, API_URL }
}, { persist: true })
