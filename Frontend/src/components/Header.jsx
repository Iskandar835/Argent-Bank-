import ConnectButton from "./ConnectButton";
import UserInHeader from "./UserInHeader";


function Header () {
    return (
      <header>
        <nav className="main-nav">
            <a className="main-nav-logo" href="/">
                <img
                    className="main-nav-logo-image" 
                    src="../../src/assets/img/argentBankLogo.png" 
                    alt="Argent Bank Logo"
                />
                <h1 className="sr-only">Argent Bank</h1>
            </a>
            <div>
                <UserInHeader />
                <ConnectButton />
            </div>
        </nav>
      </header>
    )
};

export default Header;