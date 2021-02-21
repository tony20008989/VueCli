

<template>
  <div id = 'todo_counter'>
    <counter @plus='plus' @minus='minus'/>
    <todo @add-new-list='add' @remove-list='remove' @modify-list='modify'/>
    {{message}}
  </div>
</template>
<script>
import counter from './counter.vue'
import todo from './todo.vue'
export default {
  name:'todo_counter',
  components:{counter,todo},
  data() {
    return {
      message:''
    }
  },
  methods:{
    plus() {
      this.message = '數字已增加'
    },
    minus() {
      this.message = '數字已減少'
    },
    add() {
      this.message = '列表新增一欄'
    },
    remove() {
      this.message = '列表刪除一欄'
    },
    modify() {
      this.message = '列表更改一欄'
    },

  },
}

</script>

