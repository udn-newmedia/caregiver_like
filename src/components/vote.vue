<template>
  <div class="vote-contain">
    <span class="toVote" @click="toVote">投票測試</span>
    <p>{{key}}</p>
  </div>
</template>

<script>
  import axios from 'axios';

  export default {
    name: 'Vote',
    data() {
      return {
        key: 'test'
      }
    },
    methods: {
      toVote() {
        // const url = 'http://localhost/vote_api/vote_test.php'
        const vm = this
        const url = 'https://nmdap.udn.com.tw/test/testphp/vote_test.php'
        axios.get(url)
        .then((response)=>{
          console.log(response)
          vm.getVote();
        })
        .catch((error)=>{
          console.log(error)
        })
      },
      getVote () {
        const vm = this
        const url = 'https://nmdap.udn.com.tw/test/testphp/get_tick.php'
        axios.get(url)
        .then((response)=>{
          vm.key = response.data
        })
        .catch((error)=>{
          console.log(error)
        })
      }
    },
    created () {
      this.getVote()
    },
    mounted () {

    }
  }
</script>

<style lang="scss" scoped>
  .vote-contain{
    padding-top: 50px;
    padding-left: 50px;
  }
  .toVote{
    padding: 15px;
    cursor: pointer;
    transition: 666ms ease-out;
    &:hover{
      background-color: pink;
    }
  }
</style>
