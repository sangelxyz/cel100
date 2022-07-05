// Blockchain RPC ballance request.
import { ethers } from "ethers";
import abiERC20 from '../src/abi.js';

async function contractReq(contractAddress, walletAddress, walletIndex) {

    return new Promise(async(resolve, reject)=> {
        //input can be ens

        // If you don't specify a //url//, Ethers connects to the default 
        // (i.e. ``http:/\/localhost:8545``)
        const provider = new ethers.providers.InfuraProvider('mainnet', {projectId: '146f44f2a2ec4c80b5749c7ccc932914', projectSecret: '305333efdf214d9c8d77bcd5e7db495d'})

        // The provider also allows signing transactions to
        // send ether and pay to change state within the blockchain.
        // For this, we need the account signer...
        //const signer = provider.getSigner()

        // You can also use an ENS name for the contract address


        // The ERC-20 Contract ABI, which is a common contract interface
        // for tokens (this is the Human-Readable ABI format)
        // const daiAbi = [
        // // Some details about the token
        // "function name() view returns (string)",
        // "function symbol() view returns (string)",

        // // Get the account balance
        // "function balanceOf(address) view returns (uint)",

        // // Send some of your tokens to someone else
        // "function transfer(address to, uint amount)",

        // // An event triggered whenever anyone transfers to someone else
        // "event Transfer(address indexed from, address indexed to, uint amount)"
        // ];

        // The Contract object
        const ercContract = new ethers.Contract(contractAddress, abiERC20, provider);

        // Get the ERC-20 token name
        await ercContract.name()
        // 'Dai Stablecoin'

        // Get the ERC-20 token symbol (for tickers and UIs)
        await ercContract.symbol()
        // 'DAI'

        // Get the balance of an address
        const balance = await ercContract.balanceOf(walletAddress)

        resolve({total:Math.round(ethers.utils.formatUnits(balance, 0)/10000), walletId: walletIndex})

    })

}
export default contractReq