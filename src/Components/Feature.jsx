import { useEffect } from "react";
import { useState } from "react";
import FeatureCard from "./FeatureCard";

const Feature = () => {

    const [features, setFeature] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/features')
            .then(res => res.json())
            .then(data => setFeature(data))
    }, [])
    return (
        <div>
            <div>
                <h3 className="text-5xl text-center font-bold text-blue-700 py-12">Features</h3>
                <p className="text-center">Online learning has been on the rise in recent years, largely due <br /> to the convenience, cost, and accessibility the system offers compared to traditional learning.  </p>
            </div>
            <div className="grid gap-6 py-6 grid-cols-1 md:grid-cols-2">
                {
                    features.map(feature => <FeatureCard key={feature._id} feature={feature} ></FeatureCard>)
                }
            </div>
        </div>
    );
};

export default Feature;