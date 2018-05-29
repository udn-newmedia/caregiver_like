<template>
  <div class="vote">
    <div class='words_section' v-for="(voted, index) in voteData" :key="voted.words">
      <div class="head_section" v-show="showData" :style="{animationDelay: index*111 + 'ms'}">
        <div class="percent"><p>{{Math.round(countTemp[index], -2)}}</p><span class="perIcon">%</span></div>
        <div class="share_words" @click="handle_share(voted.words)">
          <i class="fa fa-share fa-1x" aria-hidden="true" style="display: inline-block;margin-right: 5px;"></i><span>分享</span>
        </div>
      </div>
      <div class="content_section">
        <div class="choose" @click="handle_vote(index)">{{voteBtn}}</div>
        <p>{{voted.words}}</p>
      </div>
    </div>
  </div>
</template>

<script>
  import axios from 'axios'
  import URLSearchParams from 'url-search-params'
  import _once from 'lodash.once'

  export default {
    name: 'Vote',
    data() {
      return {
        voteData: null,
        showData: false,
        total: 0,
        countTemp: [0, 0, 0, 0, 0, 0, 0],
        SID: [null, null, null, null, null, null, null],
        voteBtn: '選這句'
      }
    },
    computed: {

    },
    methods: {
      getData () {
        // const url = 'http://localhost/vote_api/vote.php'
        const url = 'https://nmdap.udn.com.tw/caregiver_like/php/vote.php'
        axios.get(url)
          .then((res)=>{
            this.voteData = res.data
            window.localStorage.setItem('Data', JSON.stringify(res.data));
          })
      },
      handle_share (word) {
        FB.ui({
          method: 'share',
          href: 'https://udn.com/upf/newmedia/2018_data/_test/index.html',
          hashtag: '#' + word,
        })
      },
      handle_vote: _once(function(i) {
        this.voteBtn = '選過了'
        this.handle_click(i);
      }),
      handle_click (i) {
        // const url = 'http://localhost/vote_api/vote.php'
        if(this.showData === true) {
          return
        }
        console.log('vote count')
        const url = 'https://nmdap.udn.com.tw/caregiver_like/php/vote.php'
        const params = new URLSearchParams();
        params.append('value', i+1);
        axios.post(url,params)
        .then((res) => {
          this.showData = true
          this.getData()
          this.getTotal()
          for(let i = 0; i < this.voteData.length; i++) {
            this.countPercent(i)
          }
        })
        .catch((err) => {
          console.log(err)
        })
      },
      getTotal () {
        let tempNum = 0;
        for (let i = 0; i < this.voteData.length; i++) {
          tempNum += this.voteData[i].tick
        }
        this.total = tempNum;
      },
      countPercent (index) {
        this.SID[index] = setInterval(() => {
          const maxCount = Math.floor(this.voteData[index].tick / this.total * 100)
          if(this.countTemp[index] < maxCount){
            this.countTemp[index] += maxCount / 20
            this.$forceUpdate()
          } else {
            const vm = this
            clearInterval(vm.SID[index])
          }
        }, 111)
      }
    },
    created () {
      console.log('created')
      if(localStorage.getItem('Data')) {
        this.voteBtn = '選過了'
        this.showData = true
        this.voteData = JSON.parse(localStorage.getItem('Data'))
        this.getTotal()
        for(let i = 0; i < this.voteData.length; i++) {
          this.countPercent(i)
        }
      } else {
        this.getData()
      }
    },
    beforeMount () {

    },
    mounted () {

    },
    updated () {

    }
  }
</script>

<style lang="scss" scoped>
.vote{
  position: relative;
  width: 100%;
}
.words_section{
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-bottom: 15px;
}
.head_section{
  height: 50px;
  color: #ec6941;
  display: flex;
  align-items: flex-end;
  margin-bottom: 10px;
  animation: fadeIn 666ms ease-out both;
}
.percent{
  display: flex;
  align-items: flex-end;
  font-size: 60px;
  p{
    line-height: .8;
    font-size: inherit;
    margin: 0;
  }
}
.perIcon{
  display: block;
  font-size: 50%;
  color: inherit;
  margin-right: 20px;
  line-height: 1;
}
.share_words{
  display: inline-flex;
  height: 30px;
  width: 180px;
  justify-content: center;
  align-items: center;
  border: 1px solid #ec6941;
  border-radius: 18px;
  cursor: pointer;
}
.content_section{
  display: flex;
  align-items: center;
  background-color: #eee6d9;
  padding: 15px;
  p{
    margin: 0;
    padding: 0 8px;
    @media screen and (min-width: 1024px) {
      padding: 0 20px;
    }
  }
}
.choose{
  flex-shrink: 0;
  width: 5em;
  height: 3em;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #a6937c;
  border-radius: 10px;
  color: #fff;
  cursor: pointer;
}
@keyframes fadeIn {
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
}
</style>
