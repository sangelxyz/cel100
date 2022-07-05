
function Blogger(url) {

    return new Promise(async (resolve, reject) => {
        const res = await fetch(url)
        resolve({json: await res.json()})
    })

}

export default Blogger