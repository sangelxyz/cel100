//const crypto = require("crypto");

//var fetch = require('node-fetch');

        
// function generateHash() {
//   var plainText = document.getElementById('plainText').value;

//   var secretKey = document.getElementById('secretKey').value;

//   var hmac = forge.hmac.create();  
//   hmac.start('sha256', secretKey);
//   hmac.update(plainText);  
//   var hashText = hmac.digest().toHex();  
//   document.getElementById("hashText").innerHTML = hashText;
// }        




// const ftxApiKey = 'OLFLOOqRwlYiSJb0WZ2vDbTrpQhb2gsACNHUf8JO'
// const ftxApiSecret = 'cMOoWKxBFYdLWWozl2a1UfTV1vgIYeYGkrZI4rcc'

// const ftxEndPoint = 'https://ftx.com/api/wallet/all_balances'

// const d = new Date();
// //let years = Math.round(d.getTime() / year);
// const timeStamp = Number(d.getTime()*1000)



/* signature_payload = f'{ts}{prepared.method}{prepared.path_url}'.encode()
signature = hmac.new('YOUR_API_SECRET'.encode(), signature_payload, 'sha256').hexdigest() */


//const signature = this.hmac (this.encode (auth), this.encode (this.secret), 'sha256');
// var plainText = document.getElementById('plainText').value;

// var secretKey = document.getElementById('secretKey').value;



// const hmac = forge.hmac.create();  
// hmac.start('sha256',''); //, secretKey


// const signFTX = timeStamp+"GET/wallet/all_balances"
// hmac.update(signFTX);  
// const hashText = hmac.digest().toHex();  
// console.log(hashText)

// fetch(ftxEndPoint,
//     {
//         credentials: "include",
//         method: "GET",
//         headers: {
//           Accept: "application/json",
//           "Content-Type": "application/json",
//           "User-Agent": "sangelxyz",
//           "FTX-KEY": ftxApiKey,
//           "FTX-SIGN": hashText,
//           "FTX-TS": timeStamp,
//         }
//     }).then(response=> response.json()).then(data => console.log(data))
    
    
    
const crypto = require("../node_modules/crypto");

// string to be hashed
const str = "I need to be hashed 😃!";

// secret or salt to be hashed with
const secret = "This is a company secret 🤫";

// create a sha-256 hasher
const sha256Hasher = crypto.createHmac("sha256", secret);

// hash the string
const hash = sha256Hasher.update(str);

console.log(hash);