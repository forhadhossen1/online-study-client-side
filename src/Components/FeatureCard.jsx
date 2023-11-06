

const FeatureCard = ({ feature }) => {
    const { title, img, description } = feature || {}
    return (
        <div className="card card-compact bg-base-100 shadow-2xl rounded-none">
            <figure><img src={img} alt="img" className="h-[300px] w-[300px]" /></figure>
            <div className="card-body">
                <h2 className="card-title font-bold text-center">{title}</h2>
                <p className= "font-bold">{description}</p>
            </div>
        </div>
    );
};

export default FeatureCard;