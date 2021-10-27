import {writeValuesWithInterval} from './src/service/writeToFile'

const run = () => {
    writeValuesWithInterval()
    setTimeout(run, 1000 * 60)
}
run()
