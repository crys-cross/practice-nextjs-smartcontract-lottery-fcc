// have function to enter Lottery
import { useWeb3Contract } from "react-moralis"

const LotteryEntrance = () => {

    const {runContractFunction: enterRaffle} = useWeb3Contract({
        abi: //,
        contractAddress: //,
        functionName:
        params: {},
        msgValue
    })

    return <div>Hi from Lottery Entrance</div>

}
export default LotteryEntrance