declare global {
    namespace NodeJS {
        export interface ProcessEnv {
            WALLET: string
            LOCAL_HOST: string
        }
    }
}

export interface Puts {
    name: string
    type: string
}

export interface AbiItem {
    constant: boolean,
    inputs: Puts[],
    name: string,
    outputs: Puts[],
    type: string,
}

export interface Token {
    address: string
    symbol: string
}
