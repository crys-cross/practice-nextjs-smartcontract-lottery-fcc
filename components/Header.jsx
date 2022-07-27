import { ConnectButton } from "web3uikit"

const Header = () => {
    return (
        <div className="p-5 border-b-2 flex flex-row">
            <h1>Decentralized Raffle</h1>
            <ConnectButton moralisAuth={false} />
        </div>
    )
}
export default Header

//hardway and easier way
