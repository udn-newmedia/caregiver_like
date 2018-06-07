<template>
  <div id="app">
    <Indicator></Indicator>
    <Headbar MenuSlideFrom='right'>
      <a href="./wung.html">汪建民</a>
      <a href="./pong.html"><b>澎恰恰</b></a>
      <a href="./lee.html">李明玉</a>
    </Headbar>
    <Cover :bg="CoverImg" :bgweb="CoverImgPc" fontColor="#444" style="background-position: center top;"
            position='bottom' title="澎恰恰談照顧母親辛酸" subtitle="「最大的遺憾是來不及陪伴」" useArrow="true" arrowColor="#444"></Cover>
    <Content>
      <p>「看著媽媽火化的那一刻，我才發覺還有很多話來不及跟她說。」回憶目送母親進火葬場的場景，主持人澎恰恰眼底流露哀傷。澎恰恰的母親86歲那年失智，後來因腦積水手術後遺症，從此再沒醒來，沉睡了兩年多之後過世，讓澎恰恰連再見都來不及說。</p>
      <p><br></p>
      <p>出道30年，澎恰恰常在螢光幕前扮演丑角型的甘草人物，把歡笑帶給觀眾。但台下的他，提到母親，總是有說不盡的遺憾。他說，照顧者最大的辛酸是來不及盡孝，「等我有時間陪伴媽媽，她卻不記得我了。」眼前這位縱橫電視圈數十年的綜藝大哥，此刻也只不過是一個來不及孝順母親的平凡兒子。</p>
      <p><br></p>
      <Share href="https://udn.com/upf/newmedia/2018_data/caregiver_like/pong.html"></Share>
      <p><br></p>
      <Youtube src="https://www.youtube.com/embed/uauzw00I0wY"></Youtube>
      <p><br></p>
      <p>以下為採訪內容摘要：</p>
      <p><br></p>
      <p>我最大的心願是要在老家蓋一棟很大的房子，讓媽媽、兄姐全家人都住在一起，但心願還沒達成，媽媽就走了，這是我心頭最大的遺憾。</p>
      <p><br></p>
      <p>我29歲出道，至今30年。兄姐都捧鐵飯碗，唯獨我執意到台北闖演藝圈，媽媽曾經非常反對，但我知道她後來看到電視螢幕裡的我，即使嬉笑怒罵、裝瘋扮醜，我還是她心中最大的驕傲。</p>
      <p><br></p>
      <p>自從在演藝圈打拚，身為藝人，時間無法留給家人，每年只休一天假，也只有除夕會回家和家人一起圍爐，隔天又匆匆趕去錄影。</p>
      <p><br></p>
      <p>但我每天晚上7點準時打電話給媽媽，一定要和她講到話，後來媽媽年紀大了，配合她的作息，把打電話時間提前到傍晚5點，這個習慣維持了25年，直到媽媽失智。</p>
      <p><br></p>
      <h3>母親記憶 停留在少女時代</h3>
      <p><br></p>
      <p>媽媽在86歲那年時失智，記憶從此停留在少女時代，常常吵著要回老家找阿爸，也就是我的外公。</p>
      <p><br></p>
      <p>媽媽失智後，我警覺和她相處的時間太少了，時常撥空回嘉義老家探望，</p>
      <p><br></p>
      <Quote text="“我站在媽媽面前說：「媽，我是阿燦（小名）」，但她卻指著電視說「阮阿燦在電視內底」。”" :color="QuoteColor"></Quote>
      <p><br></p>
      <p>我其實難過又不捨，但也有一些慶幸，媽媽的記憶停留在少女時代的美好時光，而不是一人拉拔四個孩子的辛苦日子。</p>
      <p><br></p>
      <p>後來媽媽因為腦部積水壓迫到腦部神經，從此沒再醒來，在沈睡了兩年多之後過世。我一直有個心願，希望退休後能回家陪母親一直到老，但我一直沒退休，這個承諾我也沒有辦到。</p>
      <p><br></p>
      <ColumnOne :img1="ColumnImg" :imgweb1="ColumnImgPc" imgsay="澎恰恰年輕時就離開嘉義老家，到台北打拚，與母親（左）聚少離多。圖為2003年報系資料照。"></ColumnOne>
      <p><br></p>
      <h3>照顧分擔 兄姊出力我出錢</h3>
      <p><br></p>
      <p>我非常感激兄姐的付出，媽媽和大哥住在一起，兩位姊姊也住在附近，<b>媽媽失智後，主要由兄姐扛下照顧責任，我負責主要開銷，也為媽媽聘請了外籍看護，家人都不知道政府有任何長照服務。</b>因為我的工作，實在無暇分擔照顧母親，但感激兄姐的體諒。</p>
      <p><br></p>
      <p>尤其是跟媽媽同住的大哥，有時受不了媽媽一而再、再而三的要求，「像是一直叫別人載她去找阿爸、回老家看看」，有時候大哥實在被盧到受不了、不耐煩，偶爾也會打電話給我發發牢騷。</p>
      <p><br></p>
      <p><b>我自己沒辦法陪伴阿母，不能擔起照顧責任，「家裡也沒有我說話的餘地」，能做的就是耐心傾聽</b>，我能夠理解照顧者承受莫大壓力，也花了很多時間聽哥哥訴說照顧的心情，我想這也是一種陪伴。</p>
      <p><br></p>
      <ColumnOne :img1="ColumnImg_2" :imgweb1="ColumnImgPc_2" imgsay="澎恰恰最近編導的微電影，講述失智長輩的故事，劇情其實就是他的自我投射。"></ColumnOne>
      <p><br></p>
      <h3>留下遺憾 找不到與母合照</h3>
      <p><br></p>
      <p>30多年來在演藝圈打拚，直到媽媽走了，才發現家裡找不到自己單獨跟媽媽的合照，「所有的照片都是全家福，還有我穿高中制服時拍的全家福照片」，小時候家境不好，也沒有相機可以拍照，最後終於找到唯一一張和母親的合照，那是三個月大的我，被母親抱在手上的照片。</p>
      <p><br></p>
      <p>很後悔沒有時間好好陪陪媽媽，等到母親大體火化那一刻，才深深體會到母親真的走了。</p>
      <p><br></p>
      <Quote text="“那一刻我好後悔，還有很多話沒跟媽媽說。就連「您辛苦了，我們會好好的」，這麼簡單的話都來不及講。”" :color="QuoteColor"></Quote>
      <p><br></p>
      <p>最近我編導的微電影「沒你哪有我」，就是講述一個外出打拚的孩子與失智母親的故事。這部微電影就是以母親和我為雛型，我想透露給觀眾的意念就是「陪伴」。不要等到長輩不在了，才後悔沒有時間陪他們，這句話，說給自己聽，可能也是給自己。</p>
      <p><br></p>
      <h3>#我也是照顧者</h3>
      <CareProfile>
        <p><b>澎恰恰</b></p>
        <p>主持人、導演（59歲）</p>
        <p>被照顧者：媽媽（93歲）</p>
        <hr>
        <p><b>被照顧者病史：</b></p>
        <p>2010年 失智</p>
        <p>2016年 因腦積水而沈睡</p>
        <hr>
        <p><b>照顧方式：</b>安養機構</p>
        <p>2010-2016年 請外傭在家照顧</p>
        <p>2016-2017年 安養機構</p>
        <hr>
        <p><b>使用長照2.0資源：</b>未使用</p>
        <p><b>主要照顧者：</b>兄姊、外傭</p>
        <p><b>最害怕聽到一句話：</b>「醫院打電話來說老母血壓下降。」</p>
        <p><b>給照顧者的一句話：</b>「行孝要及時，趁來得及的時候多陪伴長輩。」</p>
      </CareProfile>
    </Content>
    <Content background-color="#fff">
      <Share href="https://udn.com/upf/newmedia/2018_data/caregiver_like/pong.html"></Share>
      <Logo>
        <div class="logo">
          <a href="https://vision.udn.com/" target="_blank"><img src="https://udn.com/upf/newmedia/img/logo_udnhope2.jpg"></a>
        </div>
      </Logo>
      <p><br></p>
      <Editor>
        <div>文字：劉嘉韻</div>
        <div>影音：王彥鈞、蔡佩蓉、蘇士堯</div>
        <div>攝影：徐兆玄</div>
        <div>視覺設計：蘇士堯</div>
        <div>網頁製作：廖克樸</div>
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
      <FbComment href="https://udn.com/upf/newmedia/2018_data/caregiver_like/pong.html"></FbComment>
    </Content>
    <Foot background-color="#FFFFFF"></Foot>
  </div>
</template>

<script>
import Content from './components/Content'
import Cover from './components/Cover'
import ColumnOne from './components/ColumnOne'
import CareProfile from './components/CareProfile'
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
import Youtube from './components/Youtube'
import Quote from './components/Quote'
import Vote from './components/vote.vue'

import srcRWD from './mixin/srcRWD.js'

import CoverImg from './assets/page_pong/bgp_m.jpg'
import CoverImgPc from './assets/page_pong/pc/p2bg.jpg'

import ColumnImg from './assets/page_pong/p201_m.jpg'
import ColumnImgPc from './assets/page_pong/pc/p201.jpg'

import ColumnImg_2 from './assets/page_pong/pc/p202.jpg'
import ColumnImgPc_2 from './assets/page_pong/pc/p202.jpg'

export default {
  name: 'Wung',
  mixins: [srcRWD],
  components: {
    Content,
    Cover,
    ColumnOne,
    CareProfile,
    Editor,
    Foot,
    FbComment,
    Headbar,
    Share,
    SectionFixedBg,
    Indicator,
    Logo,
    Quote,
    Youtube,
    Relate,
  },
  data() {
    return {
      CoverImg: CoverImg,
      CoverImgPc: CoverImgPc,
      ColumnImg: ColumnImg,
      ColumnImgPc: ColumnImgPc,
      ColumnImg_2: ColumnImg_2,
      ColumnImgPc_2: ColumnImgPc_2,
      QuoteColor: '#a84200'
    }
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
.cusColumn{
  @media screen and (min-width: 1024px) {
    padding: 0 15%;
  }
}
</style>
