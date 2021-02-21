<template>
  <div  id='todo'>
    <div>To Do List</div>
    <input v-model="newAddText" placeholder="新增事件" />
    <button @click='addNewList'>輸入</button>
    <ul>
      <li v-for='(list,index) in lists' :key='index'>
        {{list.item}}
        <button v-on:click='removeList(index)' v-bind:class = "{display:lists[index].status}">删除</button>
        <button v-on:click='changeList(index)' v-bind:class = "{display:lists[index].status}">更改</button>
        <input v-model="newModifyText"  v-bind:class = "{display:!lists[index].status}" placeholder="更改事件"/>
        <button @click='modifyList' v-bind:class = "{display:!lists[index].status}">
          輸入
        </button>
      </li>
    </ul> 
    
  </div> 
</template>

<script>
  import axios from 'axios'
  export default {
    data() {
      return {
        newAddText:'',
        newModifyText:'',
        lists:[],
        temIndex:'',
        temValue:'',
        temId:'123',
      }
    }, 
    mounted () {
      axios
        .get('http://127.0.0.1:8000/api/todo')
        .then(response => (this.lists = response.data.todos))
        
    },
    methods:{
      addNewList: function () {
        axios
          .post('http://127.0.0.1:8000/api/todo',
          {item:this.newAddText});
      
        this.lists.push({item:this.newAddText,status:false})
        this.newAddText='';
        this.$emit('add-new-list')
      },
      removeList:function(index){
        axios
          .delete(`http://127.0.0.1:8000/api/todo/${this.lists[index].id}`)
        this.lists.splice(index,1);
        this.$emit('remove-list');
      },
      changeList:function(index){
        this.temIndex = index;
        this.temValue = this.lists[index].item;
        this.lists[index].item = ''
        this.lists[index].status=true;
        
      },
      modifyList:function(){
        if(this.newModifyText!=''){
          this.lists[this.temIndex].item=this.newModifyText;
          axios
            .patch(`http://127.0.0.1:8000/api/todo/${this.lists[this.temIndex].id}`,
            {item:this.newModifyText});
        }else{

          this.lists[this.temIndex].item=this.temValue;
          
        }
        
        this.lists[this.temIndex].status=false;
        this.newModifyText = ''
        this.$emit('modify-list')
      }
    }
  };
</script>

<style>
  .title {
    font-size:40px;
  }

  #content{
    font-family:DFKai-sb;
  }

  .list{
    font-family:DFKai-sb;
  }

  .display{
    display:none
  }
</style>
