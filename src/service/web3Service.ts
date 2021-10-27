import {abi} from './abi'
import Web3 from 'web3'
import {Token} from '../ts'
import {PROVIDER} from '../../cfg'

class Web3Service {
    web3: any

    constructor() {
        this.web3 = new Web3(PROVIDER)

    }

    getEtherBalance = (wallet: string): Promise<string> => {
        return new this.web3.eth.getBalance(wallet)
            .then((data: string) => 'Ether: ' + this.web3.utils.fromWei(data, 'ether'))
            .catch((err: any) => `Запрос не удался причина: ${err.message}, возможно не удалось подключиться к ноде`)
    }

    checkTokenBalance = (wallet: string, token: Token): Promise<string> => {
        return new this.web3.eth.Contract([abi], token.address)
            .methods.balanceOf(wallet).call()
            .then((data: string) => `${token.symbol}: ${data}`)
            .catch((err: any) => `Запрос не удался причина: ${err.message}, возможно не удалось подключиться к ноде`)
    }
}

export default new Web3Service()