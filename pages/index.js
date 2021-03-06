import Chart from 'chart.js/auto';

import Blog from '../src/blog.js'

import contractReq from '../src/contractReq.js'
import celWallets from '../src/celWallets.js'

import Blogger from '../src/blogger.js'
import ftxConnection from '../src/ftxApi.js';
import twitterConnection from '../src/twitter.js';

import Twitterfeed from '../src/twitterFeed.js';

var xValues = [50,60,70,80,90,100,110,120,130,140,150]
var yValues = [7,8,8,9,9,9,10,11,14,14,15]

new Chart("chart1", {
  type: "line",
  data: {
    labels: xValues,
    datasets: [{
      label: 'FTX',
      fill: false,
      lineTension: 0,
      backgroundColor: "rgba(0,0,255,1.0)",
      borderColor: "rgba(0,0,255,0.1)",
      data: yValues
    },
    {
      label: 'Okex',
      fill: false,
      lineTension: 0,
      backgroundColor: "rgba(0,0,255,1.0)",
      borderColor: "rgba(0,0,255,0.1)",
      data: yValues
    }
  ]
  },
  options: {
    legend: {display: false},
    scales: {
      yAxes: [{ticks: {min: 6, max:16}}],
    }
  }
});


// fetch('https://www.celsqueeze.com/wp-json/')
//   .then(msg=> console.log(msg))
//   .then(msg=> console.log(msg))
//   .catch(err=> console.log(err))


export default function Home(props) {

const exchanges = Object.keys(props.celWallets)

return (<>
<main id="mainContainer">
<div className='p-3 mb-3 border-bottom'>
  <div className="container">
    <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
      <a href="" className="d-flex align-items-center mb-2 mb-lg-0 text-dark text-decoration-none">
        <img id="logo" alt="Celcians" src="./imgs/logo.png"  width="40" height="32" />
      </a>

      <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
        <li><a href="#" className="nav-link px-2 link-secondary">Blog</a></li>
        <li><a href="#" className="nav-link px-2 link-dark">Twitter</a></li>
        <li><a href="#" className="nav-link px-2 link-dark">Source Code</a></li>
      </ul>

      <form className="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3" role="search">
        <input type="search" className="form-control" placeholder="Search..." aria-label="Search" />
      </form>

      <div id="header--end">
Community Driven, Community Owned
      </div>
    </div>
  </div>
</div>

<div>
<div id="header2">#CelShortSqueeze</div>
<div id="main-Container">
    <div id="container-Left">
    <p>Total Cel Supply</p> 
    <canvas id="chart1"></canvas>
    
    <p>Supply On Exchanges:</p>
    <div id="container-Supply">
        <ul>
          {exchanges.map(key=> <li key={key}>{key}: {props.celWallets[key].balance.toLocaleString('en-US')}</li>)}
          <li className='li-End'>Total: {exchanges.map(key => props.celWallets[key].balance).reduce((total, num)=> total+num ).toLocaleString('en-US')} CEL</li>
        </ul>
       
    </div>
    <div>
    <p>Lending Rates</p> 
        <ul>
          {Object.keys(props.ftxData.result).map(key=> <li key={key}>{key}: {props.ftxData.result[key]}</li>)}
        </ul>
    </div>


    </div>
    <div id="container-Center">
    
    <div className="my-3 p-3 bg-body rounded shadow-sm">
    <h6 className="border-bottom pb-2 mb-0">Recent updates</h6>


    <Blog data={props}/>
    

    
    <small className="d-block text-end mt-3">
      <a href="#">All updates</a>
    </small>
  </div>

  <div className="my-3 p-3 bg-body rounded shadow-sm">
    <h6 className="border-bottom pb-2 mb-0">Twitter #CelShortSqueeze</h6>

  <Twitterfeed data={props.twitterData}/>

   
    <small className="d-block text-end mt-3">
      <a href="#">All suggestions</a>
    </small>
  </div>


    </div>
    <div id="container-Right">
      <div className='cards'>
        <p className='about-Header'>About</p>
        <p className='about-Content'>On this website, you can find accurate information about the #CELShortSqueeze, relevant feeds and information about how to get involved.

      The information on this website is updated by volunteers who are not paid in currency, but are passionate about the campaign and what it stands for.

      It will be updated regularly.</p>      
      </div>


      <div className='cards'>
        <p className='about-Header'>How To Participate</p>
        <p className='about-Content'>1. Buy* spot $CEL on FTX or any other exchange.
2. Move tokens to a private wallet (Metamask/Trust Wallet). Hardware wallet preferred.
3. Connect to 1inch and set limit orders to sell $CEL for more than $100.

*Only buy what you can afford to lose. This is not financial advice. This is a community led effort. By participating you understand that this is a high risk endeavor. There are no guarantees and you are solely responsible for your actions.</p>      
      </div>

    
    </div>




</div>
</div>    

</main>
</>
)

}

export async function getStaticProps() {

// import ftx api.  
  

const celContractAddress = '0xaaaebe6fe48e54f431b0c390cfaf0b017d09d42d'


// Mil8lD2Y4imjBfHD5P9GTEEDU
// sec: zSVdMN4Gd7kNJUlqOuISlRB3TUdqxyg6jMZ88QHsgCeZj4JZvf
// 

// const twitterToken = 'AAAAAAAAAAAAAAAAAAAAABtdegEAAAAAKSOfIB%2F8FPCiK%2FDzmftoQ978hVU%3Dul2ewYvCulZGaGMbhRa2JTq6hOBRgjMAckO2REIPqA9Mip3akP'

//   fetch('https://api.twitter.com/2/tweets/search/recent?query='+encodeURIComponent('#celshortsqueeze'),{
//     method: 'GET', headers: {
//                     'Authorization': "Bearer "+twitterToken
//                     }})
//   .then(res=> res.json())
//   .then(data=> console.log(data))
//   .catch(err=>console.log(err))




  // Fetch data from external API
  //AIzaSyB-f9BX75MFT_x65c1-nrK0uWocH-JtCT0
  // end point.
  //https://www.googleapis.com/blogger/v3/blogs/4828320755593939336?key=AIzaSyB-f9BX75MFT_x65c1-nrK0uWocH-JtCT0
  //https://www.googleapis.com/blogger/v3/blogs/4828320755593939336/posts?key=AIzaSyB-f9BX75MFT_x65c1-nrK0uWocH-JtCT0
  
  // ftx, huobi, okex, BitStamp2, Bittrex, Bitfinex 3, uniswap v3, uniswap v2, uniswapv3 2, MEXC, gateio
  
  // const objWallets = {
  //               'Ftx' : {address: '0x2faf487a4414fe77e2327f0bf4ae2a264a776ad2',balance:0},
  //               'Huobi' : {address: '0xe93381fb4c4f14bda253907b18fad305d799241a',balance:0},
  //               'Okex' : {address: '0x6cc5f688a315f3dc28a7781717a9a798a59fda7b',balance:0},
  //               'Bitstamp 2' : {address: '0x1522900b6dafac587d499a862861c0869be6e428',balance:0},
  //               'Bittrex' : {address: '0xfbb1b73c4f0bda4f67dca266ce6ef42f520fbb98',balance:0},
  //               'Bitfinex 3' : {address: '0x876eabf441b2ee5b5b0554fd502a8e0600950cfa',balance:0},
  //               'Uniswap v3' : {address: '0xde2af72e916dc56f9a65f3c9766262c00c030c98',balance:0},
  //               'Uniswap v2' : {address: '0xa5e79baee540f000ef6f23d067cd3ac22c7d9fe6',balance:0},
  //               'Uniswap v3 2' : {address: '0x06729eb2424da47898f935267bd4a62940de5105',balance:0},
  //               'Mexc' : {address: '0x75e89d5979e4f6fba9f97c104c2f0afb3f1dcb88',balance:0},
  //               'Gateio' : {address: '0x0d0707963952f2fba59dd06f2b425ace40b492fe',balance:0}
  // }


  let promised = [] 

  
  let ftxData = {}
  let twitterData = {}
  // ftx
  let data = {}
  promised.push(ftxConnection())
  
  // blogger
  promised.push(Blogger('https://www.googleapis.com/blogger/v3/blogs/4828320755593939336/posts?key=AIzaSyB-f9BX75MFT_x65c1-nrK0uWocH-JtCT0'))
  
  //twitter
  promised.push(twitterConnection())


  for(const exchangeWallet of Object.keys(celWallets)) {     
    promised.push(contractReq(celContractAddress, celWallets[exchangeWallet].address, exchangeWallet))
  }
  await Promise.all(promised).then(msg=> {
    //msg array
    for(const i of msg) {
      
      if(i.json){
        // blog
        data=i.json
        continue
      }
      else if (i.ftx){
        ftxData=i.ftx
        continue
      }
      else if (i.twitter){
        twitterData=i.twitter
        continue
      }
      celWallets[i.walletId].balance=Number(i.total)
    }
  })

  return { props: { data,  celWallets, ftxData, twitterData}, revalidate: 60 }
  // Pass data to the page via props

    


}