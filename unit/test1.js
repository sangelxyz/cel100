const exchange = {
    okex : {balance:100},
    ftx : {balance:120},
    news : {balance:650},
    }
    
    let promised = [] 
    for(i of Object.keys(exchange)) {
        promised.push(new Promise(async (res,rej)=> {

            res('done')
            rej('not done')
        })) 
    }

    function sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }
   
    Promise.all(promised).then((a)=> console.log(a))

