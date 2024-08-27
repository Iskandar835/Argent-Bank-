import BannerText from "./BannerText";


function HomeBanner () {
    return (
        <div className="hero">
            <section className="hero-content"> 
                <BannerText 
                 Hidetitle={"Promoted Content"}
                 Subtitle1={"No fees."}
                 Subtitle2={"No minimum deposit."}
                 Subtitle3={"High interest rates."}
                 Text={"Open a savings account with Argent Bank today!"}
                 />
            </section>
        </div>
    )
};

export default HomeBanner;