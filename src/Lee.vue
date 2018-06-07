<template>
  <div id="app">
    <Indicator></Indicator>
    <Headbar MenuSlideFrom='right'>
      <a href="./wung.html">汪建民</a>
      <a href="./pong.html">澎恰恰</a>
      <a href="./lee.html"><b>李明玉</b></a>
    </Headbar>
    <Cover :bg="CoverImg" :bgweb="CoverImgPc" fontColor="#444" style="background-position: center top;"
           class="cusTitlePos" title="照顧者血淚告白：" subtitle="失智老爸沒死，我哥卻累垮先走了" useArrow="true" arrowColor="#444"
           position='bottom'></Cover>
    <Content>
      <p>一人失智，拖垮全家，這是大學老師李明玉的真實人生故事。兩年多前，失智父親與鄰居發生衝突，鄰居一狀告上法院，讓全家從此陷入漫長的官司糾紛中，也讓一家人的生活陷入混亂。</p>
      <p><br></p>
      <p>最讓李明玉痛心的是，官司加上長期照顧壓力竟讓哥哥賠上人生，56歲壯年就離開人世......</p>
      <p><br></p>
      <Share href="https://udn.com/upf/newmedia/2018_data/caregiver_like/lee.html"></Share>
      <p><br></p>
      <Youtube src="https://www.youtube.com/embed/uauzw00I0wY"></Youtube>
      <p><br></p>
      <p>以下為採訪內容摘要：</p>
      <p><br></p>
      <p>2016年10月26日是我最心痛的日子。那天我哥和姪子在外頭吃完晚飯後，哥哥說要去挪車，他出去不久心肌梗塞，送到醫院急救無效， 「才五秒鐘他就離開我們了。」</p>
      <p><br></p>
      <p>哥哥走的時候才56歲。我常在想，<b>如果不是因為鄰居和失智的老爸打官司，官司加上照顧壓力，我哥不會這麼年輕就走了。</b></p>
      <p><br></p>
      <h3>失智徵兆 父親與鄰居爆衝突</h3>
      <p><br></p>
      <p>4年前，住高雄老家的爸爸開始尿尿對不準、吃飯掉飯粒，我媽以為他故意搗蛋，兩人經常起衝突。我長時間在台北，回高雄最多只待二、三天，沒有發現爸爸有什麼不同，認為他只是老了，叫媽媽不要計較。</p>
      <p><br></p>
      <p><b>2015年10月，老爸因為老家巷子的停車問題，和30多年的老鄰居起衝突，對方把老爸推倒受傷，年輕時當過獵人的老爸也情緒激動，衝回家拿出柴刀。</b>警察來了，要求鄰居給老爸5千元，要我們簽下和解書。怎知後來鄰居拿著和解書一狀告上法院，指控老爸恐嚇取財。</p>
      <p><br></p>
      <p>那時我們還不知爸爸失智了，但他的症狀逐漸明顯。檢方開偵查庭時，老爸極力澄清他沒傷人、是被推打，情緒突然大爆炸，拿起身旁拐杖當庭想打鄰居！對方當然沒被打到，因為過去還能騎腳踏車出門晃晃、和鄰居下象棋的老爸，此時早已走不動了。</p>
      <p><br></p>
      <h3>確診失智 官司糾紛全忘光</h3>
      <p><br></p>
      <p>老爸只出庭那一次，之後就再也沒法子出庭，甚至不記得為什麼和鄰居起衝突，<b>本來還氣憤地和談論官司，後來連官司這回事都忘了。</b>但老爸在法庭暴走的模樣被檢察官認為是暴力，持續對他提起訴訟，我們只好一邊照顧老爸一邊繼續打官司。</p>
      <p><br></p>
      <p>老爸的狀況持續不好，我們也不知為什麼。2016年1月，我學校放寒假，妹妹將老爸送到台北由我照顧，她一路哭著上來，我去台北車站接老爸時，才發現他連路都走不動了。<b>我決定帶爸爸去看病，但一開始我連掛那一科都不知道，就眼科、耳科、心臟科等全都掛號，直到做了失智症篩檢，才確診罹患失智症。</b></p>
      <p><br></p>
      <p>老爸上台北三個月，此時我也開學了，無法兼顧照顧爸爸和教書，便帶爸爸回高雄。一開始，媽媽說要自己照顧，叫我們別花錢。但我已經被磨了三個月，知道老媽不可能獨立照顧老爸，堅決反對。</p>
      <p><br></p>
      <Quote text="“我跟媽媽說：爸爸沒死，我們會先死。”" :color="QuoteColor"></Quote>
      <p><br></p>
      <ColumnOne class="cusColumn" :img1="ColumnImg" :imgweb1="ColumnImgPc" imgsay="李明玉翻出父親的官司訴訟紀錄和哥哥的訃聞，說起傷心往事，忍不住悲從中來。"></ColumnOne>
      <p><br></p>
      <h3>聞子死訊 失智父淚流不止</h3>
      <p><br></p>
      <p>家裡四兄妹，大姊、哥哥、小妹和我，討論後決定送爸爸進安養機構。大姐和妹妹都沒有工作、哥哥的經濟狀況也普通，而我平常都在台北，所以<b>我一肩扛起照顧費用，每月至少3萬元，住院花費更多。住在台中的大姊60歲了，小妹家有高齡公婆需要照顧，爸爸和媽媽的主要照顧者就是我哥。</b></p>
      <p><br></p>
      <p>爸爸雖確診失智，官司仍持續，由我在台北寫狀紙，住高雄的哥哥出庭。那時哥哥和大嫂已分居了，他那年丟了工作，但悶在心裡沒說，我不知道他承擔的壓力這樣大。</p>
      <p><br></p>
      <p>接到哥哥突然走了的消息，我不敢置信，馬上南下回高雄處理後事。沒想到，久未見面的大嫂在哥哥過世後現身，因老家登記於哥哥名下，哥哥另有債務未還，大嫂希望賣房還債。但這是媽媽住了一輩子的老家，我和姊妹希望能讓媽媽住到百年，又和大嫂打起官司。</p>
      <p><br></p>
      <p>爸爸則因病得太重，2017年1月法官決定終結審判。我們一直不知怎麼告訴老爸有關哥哥的死訊，後來鼓起勇氣和老爸說實話，<b>許多事情已經記不住的老爸一聽到哥哥先走了，像個無助的孩子一直哭一直哭，怎麼也停不住。</b></p>
      <p><br></p>
      <h3>失智長輩 讓專業的人來照顧</h3>
      <p><br></p>
      <p><b>回想2016年，爸爸生病、哥哥過世、官司一大堆，我不知自己怎麼熬過來的。我每天起床就告訴自己，「李明玉，妳沒有悲傷的權利。」</b>現在沒有時間哭泣，一定要挺過去，絕對不能出狀況。</p>
      <p><br></p>
      <p>有人說把長輩送到安養機構是不孝，我根本不理會這些人。政府長照資源沒一個適合老爸，我們也希望他在家安老，但高雄老家是透天厝，老房子的樓梯陡的不得了，我爸爸日漸無力，因為是自己的家，他就算用爬的也要爬上自己的床。但我們不能讓他這樣，<b>住進機構讓專業的來照顧，是我們認為最好的安排。</b></p>
      <p><br></p>
      <h3>#我也是照顧者</h3>
      <CareProfile>
        <p><b>李明玉</b></p>
        <p>大學老師（56歲）</p>
        <p>被照顧者：爸爸（87歲）</p>
        <hr>
        <p><b>被照顧者病史：</b></p>
        <p>2014年 開始出現失智症狀</p>
        <p>2016年3月 正式被診斷為失智症</p>
        <hr>
        <p><b>照顧方式：</b></p>
        <p>2016年3-9月 住高雄凱旋醫院</p>
        <p>2016年9月至今 住在高雄市安養機構</p>
        <hr>
        <p><b>使用長照2.0資源：</b>未使用</p>
        <p><b>主要照顧者：</b>兄照顧至2016年11月去世止，接下來由妹妹接替照顧工作，包括協助就醫、拿藥、送醫、每周少去2次安養機構探望老爸。</p>
        <p><b>最害怕聽到一句話：</b>「家人有人突然去世！」</p>
        <p><b>給照顧者的一句話：</b>「好好活著才能照顧老人，一起加油！」</p>
      </CareProfile>
    </Content>
    <Content background-color="#fff">
      <Share href="https://udn.com/upf/newmedia/2018_data/caregiver_like/lee.html"></Share>
      <Logo>
        <div class="logo">
          <a href="https://vision.udn.com/" target="_blank"><img src="https://udn.com/upf/newmedia/img/logo_udnhope2.jpg"></a>
        </div>
      </Logo>
      <p><br></p>
      <Editor>
        <div>文字：鄧桂芬</div>
        <div>影音：王彥鈞、蔡佩蓉、蘇士堯</div>
        <div>攝影：黃義書</div>
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
      <FbComment href="https://udn.com/upf/newmedia/2018_data/caregiver_like/lee.html"></FbComment>
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

import CoverImg from './assets/page_lee/bglee_m.jpg'
import CoverImgPc from './assets/page_lee/pc/p4bg.jpg'

import ColumnImg from './assets/page_lee/p401_m.jpg'
import ColumnImgPc from './assets/page_lee/pc/p401.jpeg'

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
.cusTitlePos{
  @media screen and (min-width: 1024px) {
    padding-bottom: 3% !important;
  }
}
</style>
