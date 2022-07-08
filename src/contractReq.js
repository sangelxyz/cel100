// Blockchain RPC ballance request.
import { ethers } from "ethers";
import abiERC20 from '../src/abi.js';

async function contractReq(contractAddress, walletAddress, walletIndex) {

    return new Promise(async(resolve, reject)=> {
        //input can be ens

        // If you don't specify a //url//, Ethers connects to the default 
        // (i.e. ``http:/\/localhost:8545``)
        const provider = new ethers.providers.InfuraProvider('mainnet', {projectId: '146f44f2a2ec4c80b5749c7ccc932914', projectSecret: '305333efdf214d9c8d77bcd5e7db495d'})


        // Contract 
        const ercContract = new ethers.Contract(contractAddress, abiERC20, provider);

        // Get the ERC-20 token name
        await ercContract.name()

        // ERC-20 token symbol
        await ercContract.symbol()


        // Get the balance of an address
        const balance = await ercContract.balanceOf(walletAddress)

        resolve({total:Math.round(ethers.utils.formatUnits(balance, 0)/10000), walletId: walletIndex})

    })

}
export default contractReq