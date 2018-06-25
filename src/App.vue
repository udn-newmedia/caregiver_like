<template>
  <div id="app">
    <Indicator></Indicator>
    <Headbar MenuSlideFrom='right'>
      <a target='_blank' href="./index.html"><b>別下照顧指導棋</b></a>
      <a target='_blank' href="./wung.html">汪建民談長照苦</a>
      <a target='_blank' href="./pong.html">澎恰恰憶失智母</a>      
      <a target='_blank' href="./lee.html">照顧者血淚告白</a>
      <a target='_blank' href="https://ubrand.udn.com/ubrand/cate/11816">更多照顧者故事</a>
    </Headbar>
    <Typing></Typing>
    <Cover :bg='img.CoverBg' :bgweb='img.CoverBg_pc' useArrow="true" arrowColor="#fff" ref='warmCover'>
      <img v-show="warmShow" class="warm" :src="srcRWD(img.warm_1, img.warm_1_pc)" style="z-index: 10;animation-delay: 484ms;">
      <img v-show="warmShow" class="warm" :src="srcRWD(img.warm_2, img.warm_2_pc)" style="z-index: 6;animation-delay: 948ms;">
      <img v-show="warmShow" class="warm" :src="srcRWD(img.warm_3, img.warm_3_pc)" style="z-index: 3">
      <h1 class="TheTitle">親人猛下指導棋<br/>照顧者最崩潰的事</h1>
    </Cover>
    <Content background-color="#fff">
      <a target='_blank' href="https://vision.udn.com/"><img src="../static/hope_logo.png" alt="願景工程" style="width: 200px"></a>
      <p><br></p>
      <Share href="https://udn.com/upf/newmedia/2018_data/family_caregiver/index.html"></Share>
      <p><br></p>
      <p>台灣愈來愈老，「長期照顧」幾乎已成家家都難念的經。照顧失能父母，是體力、財務、情緒的三重煎熬；但最難對付的，是因為：<b>對於「照顧」，人人都有意見。</b></p>
      <p><br></p>
      <p>在傳統孝道、社會觀感的交叉劫持下，太多下「照顧指導棋」的關心者，由四面八方而來的意見，讓真正擔起照顧責任的人，更手足無措；<b>眾人眼光、輕率的評斷，彷彿變成「照顧勒索」，讓照顧責任愈形沉重。</b></p>
      <p><br></p>
      <h3>親友人多嘴雜 照顧者拭淚</h3>
      <p><br></p>
      <p>在眾多照顧者難題中，最難解的，大概就是「照顧責任」在家人中的承擔與分配。</p>
      <p><br></p>
      <p>30多歲的林日雄（化名）最近把中風的寡母，從屏東內埔老家送到高雄一家私立安養院照顧了。一個月2萬元的安養費，在他這樣一個「做工的人」來說，已是拚了命攢出來的，他獨子，單身，沒有人幫他。</p>
      <p><br></p>
      <p>但在全是宗族親戚的村中卻引起批評：「你老母辛苦把你養大，你忍心丟到老人院？」「你免去上班，就辭職返來顧你老母啊。」人多嘴雜，林日雄只能抹淚。</p>
      <p><br></p>
      <h3>回家盡孝 不是人人做得到</h3>
      <p><br></p>
      <p>根據聯合報系願景工程與中華民國家庭照顧者總會進行<a href="https://vision.udn.com/vision/story/12242/3216656" target="_blank">「家庭照顧分工經驗調查」</a>發現，<b>652位照顧者或曾經照顧家人的受訪者中，近半數不同意「照顧是孝順的表現，應由家人負責，不應委託外人」，但同意者也有38%。</b></p>
      <p><br></p>
      <p>「家人自己照顧」仍然是台灣長照現況的主流。如果天時、地利、人和，這當然是長輩的福氣，也是子女的幸運，能夠無憾伴老。但現實是，政府長照制度未能讓人在工作與照顧之間兼顧。高舉「孝道」大旗的道德譴責，讓照顧者壓力更大。</p>
      <p><br></p>
      <p>聯合報系願景工程今年推出「長照沒有英雄」，透過調查、深度訪談、名人現身，走進照顧者家門，<b>發現他人自以為是的關切及介入，是照顧者最大的壓力來源；手足分工是最易引爆的照顧難題，</b>許多照顧者有苦難言，更為了家庭和諧不願面對鏡頭。</p>
      <p><br></p>
      <p><b>照顧沒有典範或英雄，每人每家各依其所能，不求偉大，但求盡力；</b>我們建議透過家庭照顧協議與全民長照教育，鼓勵家庭建立協商與決策長照分工機制，更期許長照2.0不只讓長輩安老，也協助我們建立家人新關係。</p>
    </Content>
    <Typing_3></Typing_3>
    <Content background-color="#fff">
      <p>家人衝突是家庭照顧最複雜難解的課題，根據<a href="https://vision.udn.com/vision/story/12242/3216656" target="_blank">「家庭照顧分工經驗調查」</a>，約有28%的受訪者曾經「因為照顧問題與家人發生爭執」，其中以照顧方式想法不同、照顧費用分擔不均比例最高，許多照顧者因此遭受其他家人質疑、甚至是冷言冷語，讓照顧者內心「很受傷」。</p>
      <p><br></p>
      <p><b>根據中華民國家庭照顧者總會調查，照顧者有7大困擾句，選選看，哪一句話讓你最有感呢？並同步看網友票選結果。</b></p>
      <p><br></p>
      <h3>來投票！哪一句話是照顧者的地雷</h3>
      <p><br></p>
      <Vote></Vote>
    </Content>
    <Typing_2></Typing_2>
    <Content background-color="#fff">
      <ColumnOne :img1="img.coverWung" :imgweb1="img.coverWung_pc">
        <div class="customTitleContain">
          <div class="customTitle">
            <h3>照顧82歲失智母親，最怕妹妹說：「哥，我放棄了」</h3>
            <p><b>——汪建民 演員</b></p>
          </div>
        </div>
      </ColumnOne>
      <p><br></p>
      <p>兩年半前，媽媽在家裡中風被妹妹發現，她這一倒下，開始了我和妹妹這場「照顧馬拉松」。</p>
      <p><br></p>
      <p>媽媽一開始因為中風住院，我們不知道她失智了，是看護阿姨說，媽媽好幾次都不知道自己尿布濕了，甚至滲漏也不自知，一檢查，果然是輕度失智。媽媽二次住院40多天，我要拍戲，照顧的重擔幾乎都落在妹妹身上。出院後怎麼辦？我們討論了兩個小時，認為只有一條路，把媽媽送到安養機構。</p>
      <p><br></p>
      <p><b>這兩年半來，我最感謝的人是我妹妹，如果沒有她幫忙照顧媽媽，「我應該會死。」我最怕妹妹說：「我不幹了」</b>，也怕安養中心說：「你媽媽我們照顧不了。」其實一直到現在，我和妹妹看到對方來電，都會猶豫要不要接，擔心電話裡傳來自己無法承受的訊息。</p>
      <p><br></p>
      <p>發病後短短一年，溫柔賢淑的媽媽變得暴躁、髒話連篇，曾看著我對安養中心的人說：「我弟弟來看我了！」還有一次，媽媽像是中邪一樣盯著我，眼神好可怕，甚至有殺意。我忍不住懷疑，這真是我媽媽？她到底是誰？</p>
      <p><br></p>
      <div class="moreWrapper" @click="handle_readMore('汪建民')">
        <a target="_blank" href="./wung.html" class="readArticle">閱讀全文</a>
      </div>
      <p><br></p>
      <p><br></p>
      <ColumnOne :img1="img.coverPong" :imgweb1="img.coverPong_pc">
        <div class="customTitleContain">
          <div class="customTitle">
            <h3>看著媽媽遺體火化的那一刻，我好後悔，還有很多話來不及跟她說。</h3>
            <p><b>——澎恰恰 主持人</b></p>
          </div>
        </div>      
      </ColumnOne>
      <p><br></p>
      <p>媽媽在86歲那年時失智，記憶從此停留在少女時代，常常吵著要回老家找阿爸，也就是我的外公。媽媽失智後，我警覺和她相處的時間太少了，時常撥空回嘉義老家探望，<b>站在她面前說：「媽，我是阿燦（小名）」，但媽媽卻指著電視說「阮阿燦在電視內底」。</b></p>
      <p><br></p>
      <p><b>媽媽失智後，由兄姊扛下主要照顧責任，我負責開銷，也為媽媽聘請了移工。兄姊有時難免有微詞，「為什麼唯獨你不用來照顧媽媽？」</b>因為我的工作，無暇分擔照顧母親，感激兄姊的體諒。</p>
      <p><br></p>
      <p>我自己沒辦法陪伴阿母，不能擔起照顧責任，家裡也沒有我說話的餘地，能做的就是耐心傾聽，我能夠理解照顧者承受莫大壓力，也花了很多時間聽哥哥訴說照顧的心情，我想這也是一種陪伴。</p>
      <p><br></p>
      <p>後來媽媽因為腦部積水壓迫到腦部神經，從此沒再醒來，在沉睡了兩年多之後過世。<b>很希望有時間好好陪陪媽媽，還有好多話來不及講，等到母親大體火化那一刻，才深深體會到母親真的走了。</b></p>
      <p><br></p>
      <div class="moreWrapper" @click="handle_readMore('澎恰恰')">
        <a target="_blank" href="./pong.html" class="readArticle">閱讀全文</a>
      </div>
      <p><br></p>
      <p><br></p>
      <ColumnOne :img1="img.coverLee" :imgweb1="img.coverLee_pc">
        <div class="customTitleContain">
          <div class="customTitle">
            <h3>那一年，老爸失智、哥哥走了，我不知怎麼熬過來的...</h3>
            <p><b>——李明玉 大學老師</b></p>
          </div>
        </div>      
      </ColumnOne>
      <p><br></p>
      <p>2016年11月26日是我最心痛的日子，我哥突然心肌梗塞發作，「才五秒鐘他就離開我們了。」<b>哥哥走的時候才56歲。我常在想，如果不是因為鄰居和失智的老爸打官司，官司加上照顧壓力，我哥不會這麼年輕就走了。</b></p>
      <p><br></p>
      <p>2015年10月，我爸因高雄老家巷子的停車問題，和30多年的老鄰居起衝突，對方把我爸推倒受傷，年輕時當過獵人的老爸也情緒激動，衝回家拿出柴刀，當時全家人還不知爸爸失智。後來鄰居一狀告上法院，從此全家陷入漫長的官司糾紛。</p>
      <p><br></p>
      <p>隔年1月，我學校放寒假，妹妹將老爸送到台北由我照顧，她一路哭著上來，我去台北車站接老爸時，才發現他連路都走不動了。<b>我決定帶爸爸去看病，但一開始我連掛那一科都不知道，就眼科、耳科、心臟科等全都掛號，直到做了失智症篩檢，才確診罹患失智症。</b></p>
      <p><br></p>
      <p><b>回想2016年，爸爸生病、哥哥過世、官司一大堆，我不知自己怎麼熬過來的。我每天起床就告訴自己，「李明玉，妳沒有悲傷的權利。」</b>現在沒有時間哭泣，一定要挺過去，絕對不能出狀況。</p>
      <p><br></p>
      <div class="moreWrapper" @click="handle_readMore('李明玉')">
        <a target="_blank" href="./lee.html" class="readArticle">閱讀全文</a>
      </div>
    </Content>
    <SectionFixedBg :bg="img.coverSection" :bgweb="img.coverSection_pc" text="給照顧者溫暖 你可以這樣說"></SectionFixedBg>
    <Content background-color="#fff">
      <p>照顧者長期承擔龐大的照顧壓力，家人的關懷是很重要且溫暖的力量。新北市家庭照顧者關懷協會諮商心理師呂依真建議，家人與照顧者相處時，應從「家庭整體觀念」思考，「照顧者對這個家非常重要，要多給予他們支持。」否則若照顧者也倒下，變成第二個病人，那家裡等於是雪上加霜。</p>
      <p><br></p>
      <p>此外，許多照顧者難以表達「需要喘息」，若家人願意主動開口，鼓勵照顧者多出去走走，參加喘息紓壓活動，有助於紓解照顧者的身心壓力。</p>
      <p><br></p>
      <p>呂依真建議，若你身旁有照顧者，不妨多跟他們講以下幾句話，給予支持與鼓勵：</p>
      <p><br></p>
      <TalkSection></TalkSection>
      <p><br></p>
      <p><br></p>
      <Break></Break>
      <p><br></p>
      <a target="_blank" href="https://vision.udn.com/vision/cate/7627" @click="handle_Banner"><ColumnOne :img1="img.Banner_3" :imgweb1="img.Banner_3_pc"></ColumnOne></a>      
      <p><br></p>
      <a target="_blank" href="https://ubrand.udn.com/ubrand/cate/11816" @click="handle_Banner"><ColumnOne :img1="img.Banner_1" :imgweb1="img.Banner_1_pc"></ColumnOne></a>
      <p><br></p>
      <p><br></p>
      <Share href="https://udn.com/upf/newmedia/2018_data/family_caregiver/index.html"></Share>
      <Logo>
        <div class="logo">
          <a href="https://vision.udn.com/" target="_blank"><img src="https://udn.com/upf/newmedia/img/logo_udnhope2.jpg"></a>
        </div>
      </Logo>
      <p><br></p>
      <Editor>
        <div>文字、採訪團隊：梁玉芳、魏忻忻、吳貞瑩、李樹人、劉嘉韻、鄧桂芬、陳雨鑫、羅真、章凱閎、蔡佩蓉</div>
        <div>攝影：黃義書、杜建重、徐兆玄</div>
        <div>影音：王彥鈞</div>
        <div>網頁設計：蘇士堯</div>
        <div>網頁製作：廖克樸</div>
        <div>插畫：許藹雯</div>
        <div><a href="https://tw.123rf.com/?src=googtrackad16&gclid=EAIaIQobChMIzs2_mpfN2wIV1jUrCh1Rrg_8EAAYASAAEgL5b_D_BwE&gclsrc=aw.ds&dclid=CLqTtpuXzdsCFZqalgod0R4KJA" style="color: inherit;text-decoration: none;">圖片來源：123RF</a></div>
        <div>監製：何振忠、洪淑惠、梁玉芳、魏忻忻、吳貞瑩、方仰忠、許君吉、董谷音、潘如瑩、蔡幸怡</div>
        <div>2018.06.24</div>
      </Editor>
      <p><br></p>
      <Question href='https://www.surveycake.com/s/KpQKN' text='填寫閱讀體驗問卷'></Question>
      <p><br></p>
      <Relate
        title="延伸閱讀" color="#363434"
        href1="https://ubrand.udn.com/ubrand/story/11816/3022230" :img1="Relate1" text1="照顧失能家人 不能只靠愛與責任"
        href2="https://ubrand.udn.com/ubrand/story/11816/3022199" :img2="Relate2" text2="長照政策很陌生 照顧者恐變被照顧者"
        href3="https://ubrand.udn.com/ubrand/story/11816/3022197" :img3="Relate3" text3="聰明照顧者 63歲的她長期「一打三」"
        href4="https://udn.com/upf/newmedia/2017_data/caregiver/" :img4="Relate4" text4="致．照顧者／該急救，還是讓他走...照顧者的沉痛告白"
      ></Relate>
      <p><br></p>
      <FbComment href="https://udn.com/upf/newmedia/2018_data/family_caregiver/index.html"></FbComment>
    </Content>
    <Foot background-color="#FFFFFF"></Foot>
  </div>
</template>

<script>
import Utils from 'udn-newmedia-utils'
import Break from './components/break' 
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
import Question from './components/Question.vue'

import srcRWD from './mixin/srcRWD.js'

import imgCoverBg from './assets/warmfinger/bg.jpg'
import imgCoverBg_pc from './assets/warmfinger/pc/bg_pc.jpg'

import imgWarm_1 from './assets/warmfinger/warm_1.png'
import imgWarm_2 from './assets/warmfinger/warm_2.png'
import imgWarm_3 from './assets/warmfinger/warm_3.png'

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

import Banner_1 from './assets/banner1_m.jpg'
import Banner_1_pc from './assets/banner1.jpg'
import Banner_3 from './assets/banner3_m.jpg'
import Banner_3_pc from './assets/banner3.jpg'

import Relate1 from './assets/relate/relate1.jpg'
import Relate2 from './assets/relate/relate2.jpg'
import Relate3 from './assets/relate/relate3.jpg'
import Relate4 from './assets/relate/relate4.jpg'

export default {
  name: 'App',
  mixins: [srcRWD],
  components: {
    Break,
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
    Vote,
    Question
  },
  data() {
    return {
      tempWidth: null,
      Relate1: Relate1,
      Relate2: Relate2,
      Relate3: Relate3,
      Relate4: Relate4,      
      img: {
        Banner_1: Banner_1,
        Banner_1_pc: Banner_1_pc,   
        Banner_3: Banner_3,
        Banner_3_pc: Banner_3_pc,            
        CoverBg: imgCoverBg,
        CoverBg_pc: imgCoverBg_pc,
        warm_1: imgWarm_1,
        warm_2: imgWarm_2,
        warm_3: imgWarm_3,
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
      warmShow: false,
      mobBgColor: '#e5e5e5',
      pcBgColor: '#fff',
      mobFontColor: '#000',
      pcFontColor: '#000'
    }
  },
  methods: {
    handle_scroll () {
      let ch = window.pageYOffset;
      if (ch > (this.$refs.warmCover.$el.offsetTop - window.innerHeight * 0.2)) {
        this.warmShow = true;
        window.removeEventListener('scroll', this.handle_scroll);
      }
    },
    handle_Banner () {
      ga("send", {
          "hitType": "event",
          "eventCategory": "Banner",
          "eventAction": "click",
          "eventLabel": "[" + Utils.detectPlatform() + "] [" + document.querySelector('title').innerHTML + "] [ 點Banner ]"
      });        
    },
    handle_readMore (target) {
      ga("send", {
          "hitType": "event",
          "eventCategory": "ReadMore",
          "eventAction": "click",
          "eventLabel": "[" + Utils.detectPlatform() + "] [" + document.querySelector('title').innerHTML + "] ["+ target +"] [ ReadMore ]"
      });
      console.log("[" + Utils.detectPlatform() + "] [" + document.querySelector('title').innerHTML + "] ["+ target +"] [ ReadMore ]")
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
      window.addEventListener('scroll', this.handle_scroll);
      window.scrollTo(0, 1);
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
  text-shadow: 0 0px 15px rgba(48,48,48,1);
  @media screen and (min-width: 1024px) {
    text-align: center;
  }
}
.warm{
  position: absolute;
  top: -15vh;
  left: 0;
  z-index: auto;
  width: 100%;
  height: auto;
  animation: fadeIn 888ms ease-in-out both;
  opacity: 0;
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
@keyframes fadeIn {
  from{
    opacity: 0;
  }
  to{
    opacity: 1;
  }
}
</style>
