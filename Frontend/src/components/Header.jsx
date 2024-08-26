






function Header () {
    return (
        <nav className="main-nav">
            <a className="main-nav-logo" href="">
                <img
                    className="main-nav-logo-image" 
                    src="../../designs/img/argentBankLogo.png" 
                    alt="Argent Bank Logo"
                />
            </a>
            <div>
                <a className="main-nav-item" href="">
                    <i className="fa fa-user-circle"></i>
                    Sign In
                </a>
            </div>
        </nav>
    )
}

export default Header