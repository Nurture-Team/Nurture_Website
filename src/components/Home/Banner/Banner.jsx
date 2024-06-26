import "./Banner.scss";
const Banner = () => {
    const hyperlink = () => {
        window.location.href = "https://aws-nurture.s3.amazonaws.com/index.html";
    };
    const hyperlinktwo = () => {
        window.location.href = "./realtimegraphs";
    };
    return (<div className="hero-banner"><div className="content">
        <div className="text-content">
        <h1>NURTURE</h1>
        <p>EVOLVING NATURE...
        </p>
        <div className="ctas">
            <button className="banner-cta" onClick={hyperlink}>Predict your Crop</button>
            <button className="banner-cta v2" onClick={hyperlinktwo}>View Ecopod</button>
        </div>
        </div>
        </div>
        </div>);
};
export default Banner;
