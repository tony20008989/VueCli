<template>
  <div id = 'counter'>
    <button v-on:click="minus()" class='btn-m'>-</button>
    <textarea cols=4 rows=1 v-bind:class = "{disabled: isActive}" v-model="number"></textarea>
    <button v-on:click="plus()" class='btn-p'>+</button>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data () {
    return {
      
      isActive:false,
      number:''
    }
  },
  mounted () {
    axios
      .get('http://127.0.0.1:8000/api/getCounter/6')
      .then(response => (this.number = response.data.number))
  },
  methods:{
    minus: function(){
      if(this.number>1){
        this.number = this.number - 1;
        this.isActive = false
      }
      else if(this.number==1){
        this.number = this.number - 1;
      }
      else{
        this.isActive = true
      }
      axios
        .patch('http://127.0.0.1:8000/api/updateCounter/6',
        {number:this.number});
      this.$emit('minus')
    },
    plus: function(){
      if(this.number<9){
        this.number = this.number + 1;
        this.isActive = false       
      }
      else if(this.number==9){
        this.number = this.number + 1; 
      }
      else{ 
        this.isActive = true
      }
      axios
        .patch('http://127.0.0.1:8000/api/updateCounter/6',
        {number:this.number});
      this.$emit('plus')
    }
  }
}
</script>
<style>
  .btn {
    background-color: #4CAF50;
    align-items : center;
    justify-content : center;
  }

  
  .disabled{
    background-color:red;
  }
</style>
