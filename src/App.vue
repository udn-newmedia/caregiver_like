<template>
  <div id="app">
    <Indicator></Indicator>
    <Headbar MenuSlideFrom='right'>
      <a href="./wung.html">汪建民</a>
      <a href="./pong.html">澎恰恰</a>      
      <a href="./lee.html">李明玉</a>
    </Headbar>
    <Typing></Typing>
    <Cover :bg='img.CoverBg' :bgweb='img.CoverBg_pc' :useArrow="false">
      <img class="warm" :src="srcRWD(img.warm_1, img.warm_1_pc)" style="z-index: 10;">
      <img class="warm" :src="srcRWD(img.warm_2, img.warm_2_pc)" style="animation-dealy: 485ms">
      <img class="warm" :src="srcRWD(img.warm_3, img.warm_3_pc)" style="z-index: 6;animation-delay: 666ms;">
      <img class="warm" :src="srcRWD(img.warm_4, null)" style="animation-delay: 999ms">
      <h1 class="TheTitle">照顧者最不想聽的一句話</h1>
    </Cover>
    <Content background-color="#fff">
      <Share href="https://udn.com/upf/newmedia/2018_data/caregiver_like/index.html"></Share>
      <p><br></p>
      <p>「把父母送到安養院就是不孝？」長久以來，台灣的照顧者陷於孝順就是「親力親為」的傳統照顧迷思，再加上擔心周遭親友的閒言閒語，讓照顧者的負擔更沉重。</p>
      <p><br></p>
      <p>照顧者求助心理諮商的案例中，一半以上的照顧者的心理困擾和溝通身旁家人有關。有時候旁人的一句話，可能成為壓垮照顧者的最後一根稻草。</p>
      <p><br></p>
      <p>聯合報系願景工程團隊採訪了四位照顧者的故事，包括金鐘獎主持人澎恰恰、資深藝人白冰冰、演員汪建民，以及玄奘大學社工系助理教授李明玉，在照顧家人的路上，他們最擔心的不是燒光積蓄；即使有錢，也有解決不了的難題，也有不為人知的照顧辛酸...</p>
    </Content>
    <Typing_3></Typing_3>
    <Content background-color="#fff">
      <p>台灣有百萬名的家庭照顧者，時常獨自面對龐大的心理壓力，若身旁又有親友冷嘲熱諷、酸言酸語，真的會令照顧者十分抓狂！</p>
      <p><br></p>
      <p><b>特搜最令照顧者火大的7句話，哪一句話讓你最有感呢？</b></p>
      <p><br></p>
      <Vote></Vote>
    </Content>
    <Typing_2></Typing_2>
    <Content background-color="#fff">
      <ColumnOne :img1="img.coverWung" :imgweb1="img.coverWung_pc">
        <div class="customTitleContain">
          <div class="customTitle">
            <h3>最討厭別人提供我偏方，說媽媽吃這個一定會好。</h3>
            <p><b>——汪建民</b></p>
          </div>
        </div>
      </ColumnOne>
      <p><br></p>
      <p>媽媽兩年半前因為中風住院，當時的看護阿姨發現，媽媽無法控制自己的大小便，好幾次尿布濕了都不自知，一檢查，確診是輕度失智。媽媽二次住院40多天，我要拍戲，照顧的重擔幾乎都落在妹妹身上。出院後怎麼辦？我們討論了兩個小時，認為只有一條路，把媽媽送到安養機構。</p>
      <p><br></p>
      <p>發病後短短一年，溫柔賢淑的媽媽變得暴躁、髒話連篇，曾看著我對安養中心的人說：「我弟弟來看我了！」還有一次，媽媽像是中邪一樣盯著我，眼神好可怕，甚至像殺人犯。我忍不住懷疑，這真是我媽媽？她到底是誰？被媽媽忘記這件事，我沒有準備，但每天都在接受。</p>
      <p><br></p>
      <p>我最不喜歡的事，是一堆朋友提供偏方，9年前媽媽曾罹患淋巴癌，當時還有人告訴我去香港求兩隻金錢龜，媽媽一定會好，真的是夠了。家人已經生病了，沒必要再去受其他的苦，相信醫師就好。</p>
      <p><br></p>
      <div class="moreWrapper">
        <a href="./wung.html" class="readArticle">閱讀全文</a>
      </div>
      <p><br></p>
      <p><br></p>
      <ColumnOne :img1="img.coverPong" :imgweb1="img.coverPong_pc">
        <div class="customTitleContain">
          <div class="customTitle">
            <h3>最怕聽到我哥說，你怎麼不常回來看媽媽？</h3>
            <p><b>——澎恰恰</b></p>
          </div>
        </div>      
      </ColumnOne>
      <p><br></p>
      <p>面雜看不花的是天，現加自一快的變能同的夫體政求門致：也微不心常如他公史言技日說西精黨他失……家風家公心他文流銀課？即灣公醫明，入外答力件口老海分。著走經果適。會了聲們的排機真出建與起。入了美是，葉想把錢。</p>
      <p><br></p>
      <p>量配什現滿物後超。度結道就自畫民力。力原常十，生戲種來該行為文什，術能身金書！決到但舞黨他，要黃許這，再存成人他？突它國可！同石不師大；建命如為量舉起反長等在食早所演下質活體負成。是一應兒怕生去行思照不或話人，種熱考型。</p>
      <p><br></p>
      <p>是學一空大能的引。</p>
      <p><br></p>
      <p>野裡影紅果才居，用結神：臺放候望二風一現醫家的後？女隊國著家里，還雙改，人程因意力：生三戰金不相識，完氣一體善樓收，的格很了收方有令民幾異灣就學小、確來是這物家未這在者，有市時獎一。</p>
      <p><br></p>
      <p>他的們雜可任遠老而平超臺們續經育大讓一、導極氣定；管灣我現提看也試下技子同著春人水隊底別時證健開者質我那師告……了東美用每查打麼業同和模到定用總？</p>
      <p><br></p>
      <div class="moreWrapper">
        <a href="./pong.html" class="readArticle">閱讀全文</a>
      </div>
      <p><br></p>
      <p><br></p>
      <ColumnOne :img1="img.coverLee" :imgweb1="img.coverLee_pc">
        <div class="customTitleContain">
          <div class="customTitle">
            <h3>生朋便縣的投展海象</h3>
            <p><b>——李明玉</b></p>
          </div>
        </div>      
      </ColumnOne>
      <p><br></p>
      <p>消了度時境市！面人開，下學升業所禮的國團人年外林人費：的上快？技達落球似到火非然小電長帶能同……畫社子者人應此，會兒電深上立方內，可風在傷大生？種照難開，年在醫正看自調雨電實灣教。</p>
      <p><br></p>
      <p>花間此下一隨去非人，要一球共來作顯表未查或的情人接知好中她，受人的家防裡面心點日一文像就標我得中今具上司無的新。國集全開內目式世沒在的下難心兒面速。種臺手裡師人樂金：教接是著中我……人內來父下無度。意的燈親過始策家看天育。方什度工推再不相新生木書黃造但能動、條被車長老下下覺感：的唱我作者再小上中緊。德四這找的上臺加部，出指科，件童石結園只散合一候事任，消牛開物數市過客響。根招沒；苦要畫步生、倒公同著早有開認工非，麼小快運！</p>
      <p><br></p>
      <p>多了總路作文第直事克黃然車外不給方老題兒就場！仍馬南！表一早開出現老性看千直作那決，我一天。請開爸廣與合結而年一系子知別港藝是實紀親品年得。</p>
      <p><br></p>
      <div class="moreWrapper">
        <a href="./lee.html" class="readArticle">閱讀全文</a>
      </div>
    </Content>
    <SectionFixedBg :bg="img.coverSection" :bgweb="img.coverSection_pc" text="你可以對照顧者這麼說"></SectionFixedBg>
    <Content background-color="#fff">
      <p>只要家人一句貼心、正面的話語，就可以給予照顧者憂鬱無助的心情很大的力量和幫助！專家建議你可以常說以下幾句話。</p>
      <p><br></p>
      <TalkSection></TalkSection>
    </Content>
    <Content background-color="#fff">
      <Share href="https://udn.com/upf/newmedia/2018_data/caregiver_like/index.html"></Share>
      <Logo>
        <div class="logo">
          <a href="https://vision.udn.com/" target="_blank"><img src="https://udn.com/upf/newmedia/img/logo_udnhope2.jpg"></a>
        </div>
      </Logo>
      <p><br></p>
      <Editor>
        <div>文字、採訪團隊：魏忻忻、吳貞瑩、劉嘉韻、鄧桂芬、陳雨鑫、蔡佩蓉</div>
        <div>攝影：黃義書、杜建重、徐兆玄</div>
        <div>影音：王彥鈞</div>
        <div>網頁設計：蘇士堯</div>
        <div>網頁製作：廖克樸</div>
        <div>監製：何振忠、洪淑惠、董谷音、潘如瑩、蔡幸怡</div>
        <div>2018.06.</div>
      </Editor>
      <p><br></p>
      <Relate
        title="延伸閱讀" color="#363434"
        href1="https://p.udn.com.tw/upf/newmedia/2016_data/20161003_quicksand_middle_age/index.html" img1="./static/web/bg_wang.jpg" text1="我們長大，把光亮帶回黑暗家鄉"
        href2="https://p.udn.com.tw/upf/newmedia/2016_data/20161003_quicksand_middle_age/index.html" img2="./static/web/bg_wang.jpg" text2="助脫貧…教技能 推存錢帳戶"
        href3="https://p.udn.com.tw/upf/newmedia/2016_data/20161003_quicksand_middle_age/index.html" img3="./static/web/bg_wang.jpg" text3="兒少發展帳戶推動3個月 申請率25%"
        href4="https://p.udn.com.tw/upf/newmedia/2016_data/20161003_quicksand_middle_age/index.html" img4="./static/web/bg_wang.jpg" text4="流沙中年 棄6萬月新顧爸媽，我在貧窮線下度日"
      ></Relate>
      <p><br></p>
      <FbComment href="https://udn.com/upf/newmedia/2018_data/caregiver_like/index.html"></FbComment>
    </Content>
    <Foot background-color="#FFFFFF"></Foot>
  </div>
</template>

<script>
import ColumnOne from './components/ColumnOne'
import Content from './components/Content'
import Cover from './components/Cover'
import Editor from './components/Editor'
import Foot from './components/Foot'
import FbComment from './components/FBComment'
import Headbar from './components/HeadBar'
import Share from './components/Share'
import SectionFixedBg from './components/SectionFixedBg'
import Indicator from './components/Indicator'
import Logo from './components/Logo'
import Relate from './components/Relate'
import TalkSection from './components/TalkSection'
import Typing from './components/typing'
import Typing_2 from './components/typing_2'
import Typing_3 from './components/typing_3'
import Vote from './components/vote.vue'

import srcRWD from './mixin/srcRWD.js'

import imgCoverBg from './assets/warmfinger/bg.jpg'
import imgCoverBg_pc from './assets/warmfinger/pc/bg_pc.jpg'

import imgWarm_1 from './assets/warmfinger/warm_1.png'
import imgWarm_2 from './assets/warmfinger/warm_2.png'
import imgWarm_3 from './assets/warmfinger/warm_3.png'
import imgWarm_4 from './assets/warmfinger/warm_4.png'

import imgWarm_1_pc from './assets/warmfinger/pc/warm_1_pc.png'
import imgWarm_2_pc from './assets/warmfinger/pc/warm_2_pc.png'
import imgWarm_3_pc from './assets/warmfinger/pc/warm_3_pc.png'

import imgCoverWung from './assets/peo01_m.jpg'
import imgCoverWung_pc from './assets/w001_web.jpg'

import imgCoverPong from './assets/peo02_m.jpg'
import imgCoverPong_pc from './assets/w002_web.jpg'

import imgCoverLee from './assets/peo04_m.jpg'
import imgCoverLee_pc from './assets/w004_web.jpg'

import imgCoverSection from './assets/tocare.jpg'
import imgCoverSeciton_pc from './assets/tocare_pc.jpg'
export default {
  name: 'App',
  mixins: [srcRWD],
  components: {
    Content,
    Cover,
    ColumnOne,
    Editor,
    Foot,
    FbComment,
    Headbar,
    Share,
    SectionFixedBg,
    Indicator,
    Logo,
    Relate,
    TalkSection,
    Typing,
    Typing_2,
    Typing_3,
    Vote
  },
  data() {
    return {
      tempWidth: null,
      img: {
        CoverBg: imgCoverBg,
        CoverBg_pc: imgCoverBg_pc,
        warm_1: imgWarm_1,
        warm_2: imgWarm_2,
        warm_3: imgWarm_3,
        warm_4: imgWarm_4,
        warm_1_pc: imgWarm_1_pc,
        warm_2_pc: imgWarm_2_pc,
        warm_3_pc: imgWarm_3_pc,
        coverWung: imgCoverWung,
        coverWung_pc: imgCoverWung_pc,
        coverPong: imgCoverPong,
        coverPong_pc: imgCoverPong_pc,
        coverLee: imgCoverLee,
        coverLee_pc: imgCoverLee_pc,
        coverSection: imgCoverSection,
        coverSection_pc: imgCoverSeciton_pc
      },
      mobBgColor: '#e5e5e5',
      pcBgColor: '#fff',
      mobFontColor: '#000',
      pcFontColor: '#000'
    }
  },
  created: function() {
    window.addEventListener('resize', () => {
      if(window.innerWidth !== this.tempWidth){
        this.tempWidth = window.innerWidth
        this.$forceUpdate()
      }
    })
  },
  mounted () {
    this.$nextTick(()=>{
      this.tempWidth = window.innerWidth
    })
  },
}
</script>

<style lang="scss">
#app {
  position: relative;
  font-size: 16px;
  line-height: 1.5;
  font-family: Arial, Microsoft JhengHei, "微軟正黑體", sans-serif;
  word-wrap: break-word;
  text-align: justify;
  height: 100vh;
  padding-top: 46px;
  @media screen and (min-width: 1024px) {
    padding-top: 50px;
  }
}
.TheTitle{
  position: absolute;
  left: 0;
  bottom: 8vh;
  color: #fff;
  width: 100%;
  z-index: 100;
  padding: 0 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: left;
}
.warm{
  position: absolute;
  top: -10vh;
  left: 0;
  z-index: auto;
  width: 100%;
  height: auto;
  animation: poke 1648ms ease-in-out infinite ;
  @media screen and (min-width: 768px) and (max-width: 1023px) {
    top: -15vh;
  }
}
.customTitleContain{
  position: absolute;
  width: 100%;
  bottom: 25px;
  padding: 0 25px;
  color: #000;
  @media screen and (min-width: 1024px) {
    width: 90%;
    left: 5%;
    bottom: 5%;
  }
}
.customTitle{
  position: relative;
  width: 100%;
  background: rgba(#fff, .77);
  padding: 15px 20px;
}
.moreWrapper{
  display: flex;
  justify-content: center;
  align-items: center;
}
.readArticle{
  display: inline-block;
  padding: 5px 10px;
  border: 2px solid #000;
  color: #000;
  text-align: center;
  font-weight: bold;
  text-decoration: none;
  border-radius: 17.5px;
  @media screen and (min-width: 1024px) {
    color: #000;
    border: 2px solid #000;
  }
  &:hover{
    text-decoration: none;
    color: #000;
  }
}
@keyframes poke {
  from{
    transform: translate(0, 0);
    opacity: 0;
  }
  60%{
    transform: translate(0, 20px);
    opacity: 1;
  }
  to{
    transform: translate(0, 20px);
    opacity: 0;
  }
}
</style>
