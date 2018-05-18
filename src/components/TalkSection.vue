<template>
  <div class="talkSection">
    <div class="talkBox" v-for="(word, index) in talk" :key="word" :class="{'letTransparent': canTrans(index)}">
      <h3>{{word}}</h3>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'TalkSection',
    components:{

    },
    data() {
      return {
        talk: [
          '照顧是大家共同的責任，不需要把所有責任都攬在自己身上。',
          '有任何需要我們幫忙的地方請儘管提出來，照顧的問題不是你一個人的事情！',
          '盡力就好，不要責怪自己、要求自己太多。',
          '不要因為放心不下病人而不敢出去，多出去走走參加喘息紓壓活動，或上一些專業照顧課程，可以紓解壓力。',
          '謝謝你願意在家照顧生病的家人，因為有你的付出，大家得以繼續工作賺錢維持家計，你很重要，你要肯定自己的價值！',
          '鼓勵照顧者的話鼓勵照顧者的話鼓勵照顧者的話鼓勵照顧者的話鼓勵照顧者的話鼓勵照顧者的話',
        ]
      }
    },
    methods: {
      canTrans (i) {
        if (window.innerWidth >= 1024) {
          switch(i) {
            case 1:
              return true
            break;
            case 2:
              return true
            break;
            case 5:
              return true
            break;
            default:
              return false
            break;
          }
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
.talkSection{
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
}
.talkBox{
  width: 100%;
  background: #fff url('../assets/bgtexture50_50.jpg') repeat;
  margin-bottom: 15px;
  padding: 25px 20px;
  h3{
    text-align: left;
    margin: 0;
    width: 100%;
  }
  @media screen and (min-width: 1024px) {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 50%;
    height: 300px;
    padding: 30px;
    margin-bottom: 0;
  }
}
.letTransparent{
  background: transparent !important;
}
</style>
