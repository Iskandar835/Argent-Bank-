import Account from "./Account";
import Data from "../Data/data.json";


function AllAccounts () {
    return (
        <>
            {Data.account.map((item) => (
                <Account key={item.id}
                title={item.title}
                cash={item.cash}
                balance={item.balance} />
            ))}
        </>
    )
};

export default AllAccounts;