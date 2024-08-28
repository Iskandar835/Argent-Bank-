import PropTypes from 'prop-types';
import Button from "./Button";


function Account ({ title, cash, balance}) {
    return (
        <section className="account">
            <div className="account-content-wrapper">
                <h3 className="account-title">{title}</h3>
                <p className="account-amount">${cash}</p>
                <p className="account-amount-description">{balance}</p>
            </div>
            <div className="account-content-wrapper cta">
                <Button className={"transaction-button"} title={"View transactions"}/>
            </div>
        </section>
    )
};

Account.propTypes = {
    title: PropTypes.string,
    cash: PropTypes.number,
    balance: PropTypes.string
};

export default Account;