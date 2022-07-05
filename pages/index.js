import Chart from 'chart.js/auto';

import Blog from './blog.js'
import Image from 'next/image';

var xValues = [50,60,70,80,90,100,110,120,130,140,150];
var yValues = [7,8,8,9,9,9,10,11,14,14,15];

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


export default function Home() {
//   return (
//     <>
//       <Head>
//         <title>My page title</title>
//         <meta name="viewport" content="initial-scale=1.0, width=device-width" />
//         <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.0/css/bootstrap.min.css" 
// integrity="sha384-9gVQ4dYFwwWSjIDZnLEWnxCjeSWFphJiwGPXr1jddIhOegiu1FwO5qRGvFXOdJZ4" 
// crossOrigin="anonymous"></link>

// <link rel="preconnect" href="https://fonts.googleapis.com" />
//     <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
//     <link href="https://fonts.googleapis.com/css2?family=Oswald:wght@200;400&display=swap" rel="stylesheet" />
//       </Head>
//         <main><canvas id="chart1"></canvas>
//       </main>
//     </>
//   )




return (<>
<main>
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
          <li>FTX: 3,785,522.61</li>
          <li>Huobi: 547,437.94</li>
          <li>OKEx: 522,397.60</li>
          <li>BitStamp: 443,203.90</li>
          <li>Bittrex: 229,320.10</li>
          <li>Uniswap V3: 128,086.28</li>
          <li>Uniswap V2: 76,752.39</li>
          <li>Polygon (Matic): 3,429,544.96</li>
          <li className='li-End'>Total: 9324296 CEL</li>
        </ul>
        <p></p>
    </div>
    </div>
    <div id="container-Center">
    
  <Blog />

    <div className="my-3 p-3 bg-body rounded shadow-sm">
    <h6 className="border-bottom pb-2 mb-0">Recent updates</h6>
    <div className="d-flex text-muted pt-3">
      <svg className="bd-placeholder-img flex-shrink-0 me-2 rounded" width="32" height="32" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 32x32" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#007bff"/><text x="50%" y="50%" fill="#007bff" dy=".3em">32x32</text></svg>

      <p className="pb-3 mb-0 small lh-sm border-bottom">
        <strong className="d-block text-gray-dark">@username</strong>
        Some representative placeholder content, with some information about this user. Imagine this being some sort of status update, perhaps?
      </p>
    </div>
    <div className="d-flex text-muted pt-3">
      <svg className="bd-placeholder-img flex-shrink-0 me-2 rounded" width="32" height="32" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 32x32" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#e83e8c"/><text x="50%" y="50%" fill="#e83e8c" dy=".3em">32x32</text></svg>

      <p className="pb-3 mb-0 small lh-sm border-bottom">
        <strong className="d-block text-gray-dark">@username</strong>
        Some more representative placeholder content, related to this other user. Another status update, perhaps.
      </p>
    </div>
    <div className="d-flex text-muted pt-3">
      <svg className="bd-placeholder-img flex-shrink-0 me-2 rounded" width="32" height="32" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 32x32" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#6f42c1"/><text x="50%" y="50%" fill="#6f42c1" dy=".3em">32x32</text></svg>

      <p className="pb-3 mb-0 small lh-sm border-bottom">
        <strong className="d-block text-gray-dark">@username</strong>
        This user also gets some representative placeholder content. Maybe they did something interesting, and you really want to highlight this in the recent updates.
      </p>
    </div>
    <small className="d-block text-end mt-3">
      <a href="#">All updates</a>
    </small>
  </div>

  <div className="my-3 p-3 bg-body rounded shadow-sm">
    <h6 className="border-bottom pb-2 mb-0">Suggestions</h6>
    <div className="d-flex text-muted pt-3">
      <svg className="bd-placeholder-img flex-shrink-0 me-2 rounded" width="32" height="32" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 32x32" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#007bff"/><text x="50%" y="50%" fill="#007bff" dy=".3em">32x32</text></svg>

      <div className="pb-3 mb-0 small lh-sm border-bottom w-100">
        <div className="d-flex justify-content-between">
          <strong className="text-gray-dark">Full Name</strong>
          <a href="#">Follow</a>
        </div>
        <span className="d-block">@username</span>
      </div>
    </div>
    <div className="d-flex text-muted pt-3">
      <svg className="bd-placeholder-img flex-shrink-0 me-2 rounded" width="32" height="32" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 32x32" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#007bff"/><text x="50%" y="50%" fill="#007bff" dy=".3em">32x32</text></svg>

      <div className="pb-3 mb-0 small lh-sm border-bottom w-100">
        <div className="d-flex justify-content-between">
          <strong className="text-gray-dark">Full Name</strong>
          <a href="#">Follow</a>
        </div>
        <span className="d-block">@username</span>
      </div>
    </div>
    <div className="d-flex text-muted pt-3">
      <svg className="bd-placeholder-img flex-shrink-0 me-2 rounded" width="32" height="32" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 32x32" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#007bff"/><text x="50%" y="50%" fill="#007bff" dy=".3em">32x32</text></svg>

      <div className="pb-3 mb-0 small lh-sm border-bottom w-100">
        <div className="d-flex justify-content-between">
          <strong className="text-gray-dark">Full Name</strong>
          <a href="#">Follow</a>
        </div>
        <span className="d-block">@username</span>
      </div>
    </div>
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

export async function getServerSideProps() {
  // Fetch data from external API
  const res = await fetch('https://www.celsqueeze.com/wp-json/')
  const data = await res.json()

  // Pass data to the page via props
  return { props: { data } }
}