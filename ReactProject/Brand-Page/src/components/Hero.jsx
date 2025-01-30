export default function Hero() {
  return (
    <>
      <main className="heroSection">
        <div className="hero-content">
          <h1> YOUR FEET DESERVE THE BEST</h1>
          <p>
            YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
            SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
            SHOES.
          </p>
          <div className="hero-Btn">
          <button className="icon-btn">Shop Now</button>
          <button className="second-btn">Category</button>
          </div>
          <div className="shopping">
          <p>Also Available On</p>
          <div className="brand-icon">
            <img src="/images/flipkart.png" alt="flipkart" />
            <img src="/images/amazon.png" alt="amazon" />
          </div>
          </div>
        </div>
        <div className="hero-image">
            <img src="/images/shoe_image.png" alt="" />
        </div>
      </main>
    </>
  );
}
