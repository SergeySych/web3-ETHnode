import Web3Service from './web3Service'
import {ERC20Tokens} from '../ERC20Tokens'
import fs from 'fs'
import { WALLET } from '../../cfg'

const wallet = WALLET

export const writeValuesWithInterval = (): void => {

    const promises: [Promise<string>] = [Web3Service.getEtherBalance(wallet)]
    ERC20Tokens.forEach(token => promises.push(Web3Service.checkTokenBalance(wallet, token)))

    Promise.all(promises)
        .then(data => {
            const date = new Date
            data.unshift(`${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`)
            data.push('_________________________')

            let result: string = ''
            data.forEach((str: string) => result = result + `${str.toString()}\r\n`)

            fs.appendFile('result.txt', result, err => {
                if (err) console.log(err)
            })
        })
}