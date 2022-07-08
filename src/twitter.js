function twitterConnection() {
    // Get celshotsqueeze feed
    return new Promise(async(resolve, reject)=> {
        const twitterToken = 'AAAAAAAAAAAAAAAAAAAAABtdegEAAAAAKSOfIB%2F8FPCiK%2FDzmftoQ978hVU%3Dul2ewYvCulZGaGMbhRa2JTq6hOBRgjMAckO2REIPqA9Mip3akP'

        fetch('https://api.twitter.com/1.1/search/tweets.json?include_entities=true&with_twitter_user_id=true&max_results=1&q='+encodeURIComponent('#celshortsqueeze'),{
        method: 'GET', headers: {
                        'Authorization': "Bearer "+twitterToken
                        }})
        .then(res => res.json())
        .then(data => resolve({twitter: data}))
        .catch(err=>console.log(err))
    })
}
export default twitterConnection

