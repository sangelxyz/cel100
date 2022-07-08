import crypto from 'crypto';

function ftxConnection() {
    return new Promise(async(resolve, reject)=> {
        const ftxApiKey = 'aQ-xW59PmqqGOCZfCqj7-wvYqZdAoFpSdS3qYNai'
        const ftxApiSecret = 'Haxfszv68GWc-TJPKbNEH1glSxy9XbIao10XZnHR'
        const ftxEndPoint = '/futures/CEL-PERP/stats'
        const ftxAPI = 'https://ftx.com/api'

        // time stamp, from server
        const d = new Date();
        const ts = Number(d.getTime())
        //const ts = 1657244543357

        //const signaturePayload = `${ts}${method}/api${url.pathname}${url.search}${payload}`;
        const signature = `${ts}GET/api${ftxEndPoint}` //${ts}

        // console.log(crypto.encode(ftxApiSecret))
        // console.log(crypto.encode(signature))
        console.log(signature)
        //const ksl = crypto.encode()
        // create a sha-256 hasher
        //const sss = crypto.createHmac()
        const sha256Hasher = crypto.createHmac("sha256", ftxApiSecret);
        const hash = sha256Hasher.update(signature).digest("hex");


        fetch(ftxAPI+ftxEndPoint,
        {
            method: "GET",
            headers: {
            "FTX-KEY": ftxApiKey,
            "FTX-SIGN": hash,
            "FTX-TS": ts.toString(),
            }
        }).then(response=> response.json()).then(data => resolve({ftx:data}))
    })

}

export default ftxConnection