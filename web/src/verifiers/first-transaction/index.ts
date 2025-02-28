import moment from 'moment'
import { Task } from 'types'
import { getEtherscanBaseApiUri } from 'utils/web3'

export async function verify(task: Task, address: string): Promise<boolean | number>
{
    try { 
        const etherscanBaseUri = getEtherscanBaseApiUri(task.chainId)
        const history = await fetch(`${etherscanBaseUri}?module=account&action=txlist&address=${address}&page=1&offset=1&sort=asc&apiKey=RQW7FJGXRBIHPM5EYQSVPY96Q2EV2Q9RR2`)
        const data = await history.json()
        if (data.message !== 'OK' || data.result?.length < 1) return false

        const tx = data.result[0]
        const diff = moment(new Date()).diff(moment(tx.timeStamp * 1000), 'months', false)
        return diff * task.points
    }
    catch(e) {
        return false
    }
}