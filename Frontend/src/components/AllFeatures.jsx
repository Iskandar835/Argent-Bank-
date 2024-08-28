import FeatureItem from "./Feature";
import Data from "../Data/data.json";


function Features () {
    return (
        <section className="features">
            {Data.feature.map((item) => (
                <FeatureItem key={item.id} 
                 cover={item.cover}
                 title={item.title}
                 content={item.content} />
            ))}
        </section>
    )
};

export default Features;