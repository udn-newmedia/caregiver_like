<template>
  <div id="app">
    <Indicator></Indicator>
    <Headbar MenuSlideFrom='right'>
      <a href="./wung.html"><b>汪建民</b></a>
      <a href="./pong.html">澎恰恰</a>
      <a href="./lee.html">李明玉</a>
    </Headbar>
    <Cover :bg="CoverImg" :bgweb="CoverImgPc" fontColor="#444" style="background-position: center top;"
           position='bottom' title="汪建民照顧失智母親 " subtitle="最害怕妹妹說「我放棄了...」" useArrow="true" arrowColor="#444"></Cover>
    <Content>
      <p>「照顧是家事，很難對外人說。」50歲藝人汪建民近兩年鮮少現身在螢光幕前，很少人知道，他家中有一位高齡82歲、二度中風又失智的母親要照顧，近日他接受《聯合報系願景工程》專訪，首度對外談這兩年半來照顧母親的心路歷程。</p>
      <p><br></p>
      <p>「我最害怕的事，是妹妹跟我說：『哥，我放棄了…』」由於演員工作關係，汪建民經常到外地拍戲，一去就是兩三個月，他慶幸有妹妹幫忙分擔照顧責任。兄妹倆平時會用LINE聯繫，輪流去安養中心看媽媽、帶媽媽回診，因為有妹妹的貼心陪伴，才讓汪建民撐過這一段艱辛的照顧歲月。</p>
      <p><br></p>
      <Share href="https://udn.com/upf/newmedia/2018_data/caregiver_like/wung.html"></Share>
      <p><br></p>
      <Youtube src="https://www.youtube.com/embed/uauzw00I0wY"></Youtube>
      <p><br></p>
      <p>以下為採訪內容摘要：</p>
      <p><br></p>
      <p>兩年半前，媽媽在家裡中風被妹妹發現，她這一倒下，開始了我和妹妹這場照顧馬拉松。</p>
      <p><br></p>
      <h3>罹癌、中風、失智 接踵而來</h3>
      <p><br></p>
      <p>媽媽9年前得了淋巴癌，當時醫師告訴我：「趁剩下不多的日子多陪陪媽媽吧！」腫瘤很大，加上媽媽年紀大了，不建議手術，但 媽媽堅持開刀，歷經6個多小時手術，挺過兩年化療，明明走過最煎熬的抗癌日子，沒想到2015年底中風，接下來她就失智了。</p>
      <p><br></p>
      <p>媽媽一開始因為中風住院，我們不知道她失智了，是看護阿姨說，媽媽好幾次都不知道自己尿布濕了，甚至滲漏也不自知，一檢查，果然是輕度失智。媽媽二次住院40多天，我要拍戲，照顧的重擔幾乎都落在妹妹身上。出院後怎麼辦？我們討論了兩個小時，認為只有一條路，把媽媽送到安養機構。</p>
      <p><br></p>
      <p>找到現在的安養機構，花了不少功夫，很多地方我去看過，</p>
      <p><br></p>
      <Quote text="“有些安養中心在公寓二樓，陰陰暗暗，我都沒有辦法想像，誰會把自己的父母送到這裡來？”" :color="QuoteColor"></Quote>
      <p><br></p>
      <p>政府有提供長照資源？我完全不知道。出院之後怎麼辦？是看護阿姨給了很多建議，我對看護阿姨非常感激，直到現在都還會聯絡。住進機構後，才知道可以申請殘障手冊、輪椅、床都可以補助，但我們在媽媽需要，第一時間就全買齊了。</p>
      <p><br></p>
      <h3>感謝妹妹 「沒有她我會死」</h3>
      <p><br></p>
      <p>為了一周能去探視媽媽3、4天，我離開繁華的東區，暫時搬到靠近安養機構的新店。<b>但其實這兩年半來，我最感謝的人是我妹妹，因為如果沒有她，「我應該會死。」</b></p>
      <p><br></p>
      <p>妹妹也有工作，但時間比較彈性，她每天定時探視媽媽，看看媽媽有沒有需要什麼，幫媽媽買食物、水果、衣服，還幫忙換尿布。媽媽只要一有狀況，安養機構都會先通知妹妹。</p>
      <p><br></p>
      <p>我從來沒有當面對妹妹表達過感謝，現在對著你們的鏡頭，我要跟妹妹說，「謝謝！」雖然她可能會罵「你有病喔！」因為有妹妹，我才能去工作拍戲。</p>
      <p><br></p>
      <p>媽媽極度重男輕女，妹妹照顧媽媽常被嫌，她時常受不了抱怨「你媽又怎樣了…」，但至始至終她都願意照顧媽媽，讓我很感激。<b>我最怕妹妹說：「我不幹了」，也怕安養中心說：「你媽媽我們照顧不了。」</b></p>
      <p><br></p>
      <Quote text="“有一陣子，我和妹妹看到對方來電，都會看著手機發呆，猶豫要不要接。”" :color="QuoteColor"></Quote>
      <p><br></p>
      <ColumnOne class="cusColumn" :img1="ColumnImg" :imgweb1="ColumnImgPc" imgsay="汪建民經常在中南部拍戲，由妹妹（後排左）扛起照顧失智母親（前）的重擔。"></ColumnOne>
      <p><br></p>
      <h3>媽媽變了 「眼神像殺人犯」</h3>
      <p><br></p>
      <p><b>發病後短短一年，溫柔賢淑的媽媽變得暴躁、髒話連篇，曾看著我對安養中心的人說：「我弟弟來看我了！」</b>還有一次，媽媽像是中邪，雙眼上吊，死盯著我，眼神好可怕，甚至像殺人犯。我忍不住懷疑，這真是我媽媽？她到底是誰？</p>
      <p><br></p>
      <Quote text="“被媽媽忘記這件事，我沒有準備，但每天都在接受。”" :color="QuoteColor"></Quote>
      <p><br></p>
      <p>家裡的事情很難對外人說，即使知道從從（唐從聖）要照顧失智雙親，我也只能拍拍他的肩，默默打氣。其實圈內有不少人因為照顧家人很辛苦，但外表上大家看起來都很好，不太會講自己狀況。你們約我採訪時，我正在開車，答應了你們之後，我對著空氣罵了一聲「×」，我幹嘛要答應，家事有什麼好對外說的。</p>
      <p><br></p>
      <h3>不信偏方 「聽醫生的就好」</h3>
      <p><br></p>
      <p><b>我最不喜歡的事，是9年前媽媽治療癌症，一堆朋友提供偏方，還有人告訴我去香港求兩隻金錢龜，媽媽一定會好，真的是夠了。</b>家人已經生病了，沒必要再去受其他的苦，相信醫師就好。</p>
      <p><br></p>
      <p>媽媽住進安養機構兩年多，我和妹妹兩人常常就在會客室看著外頭「發呆」，每個家庭都不同，照顧模式無法全面複製，但應該要找到屬於自己的方式，找尋出口，怎麼照顧？「做就對了」，不用一直想，反而會成為照顧路上的負擔。</p>
      <p><br></p>
      <h3>#我也是照顧者</h3>
      <CareProfile>
        <p><b>汪建民</b></p>
        <p>藝人（50歲）</p>
        <p>被照顧者：媽媽（82歲）</p>
        <hr>
        <p><b>被照顧者病史：</b></p>
        <p>2009年 淋巴癌</p>
        <p>2015年 第一次中風</p>
        <p>2017年 第二次中風、失智</p>
        <hr>
        <p><b>照顧方式：</b>安養機構</p>
        <p><b>使用長照2.0資源：</b>未使用</p>
        <p><b>主要照顧者：</b>妹妹</p>
        <p><b>最害怕聽到一句話：</b>「哥，我走不下去了。」</p>
        <p><b>給照顧者的一句話：</b>「每個家庭不同，照顧模式無法複製，應該要找到屬於自己的方式。」</p>
      </CareProfile>
      <p><br></p>
      <p><br></p>
      <Share href="https://udn.com/upf/newmedia/2018_data/caregiver_like/wung.html"></Share>
      <Logo>
        <div class="logo">
          <a href="https://vision.udn.com/" target="_blank"><img src="https://udn.com/upf/newmedia/img/logo_udnhope2.jpg"></a>
        </div>
      </Logo>
      <p><br></p>
      <Editor>
        <div>文字：陳雨鑫、吳貞瑩</div>
        <div>影音：王彥鈞、蔡佩蓉、蘇士堯</div>
        <div>攝影：杜建重</div>
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
      <FbComment href="https://udn.com/upf/newmedia/2018_data/caregiver_like/wung.html"></FbComment>
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

import CoverImg from './assets/page_wung/bgwang_m.jpg'
import CoverImgPc from './assets/page_wung/pc/coverWung.jpg'

import ColumnImg from './assets/page_wung/page_wang02.jpg'
import ColumnImgPc from './assets/page_wung/pc/page_wung.jpg'

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
