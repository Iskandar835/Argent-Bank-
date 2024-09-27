import HomeBanner from "../components/Banner";
import FeatureItem from "../components/Feature";
import Data from "../Data/data.json";


function Home () {
    return(
        <main>
            <HomeBanner/>
            <section className="features">
                {Data.feature.map((item) => (
                    <FeatureItem key={item.id} 
                    cover={item.cover}
                    title={item.title}
                    content={item.content} />
                ))}
            </section>
        </main>
    )
};

export default Home;