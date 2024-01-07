// stores/counter.js

import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counter', () => {
  // 상태 
  let id = 0
  const todos = ref([
    {id : id++, text : 'todo 1', isDone: false},
    {id : id++, text : 'todo 2', isDone: false}
  ])

  const addTodo = function(todoText){
    todos.value.push({
      id : id++,
      text : todoText,
      isDone : false
    })
  }

  const deleteTodo = function(todoID){
    // todos 배열에서 몇번째 인덱스가 삭제되었는지 검색
    const index = todos.value.findIndex((todo) => todo.id ===todoID)
    todos.value.splice(index, 1)
    // 찾은 인덱스 값을 통해 배열에서 요소를 제거 후 원본 배열 업데이트

  }

  const updateTodo = function(todoID){
    todos.value = todos.value.map((todo) => {
      if (todo.id===todoID) {
        todo.isDone = !todo.isDone
      }
      return todo
    })
  }

  const doneTodosCount = computed(() => {
    return todos.value.filter((todo) => todo.isDone).length
  })

  return { todos, addTodo, deleteTodo, updateTodo, doneTodosCount }
})
// , {persist:true}
// ) 
