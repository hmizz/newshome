import web3 from "../../assets/images/image-web-3-desktop.jpg";
import retroPics from "../../assets/images/image-retro-pcs.jpg";
import topLaptops from "../../assets/images/image-top-laptops.jpg";
import gamingGroth from "../../assets/images/image-gaming-growth.jpg";
import ArticleCard from "../ArticleCard/ArticleCard";
const Main = () => {
  const articles = [
    {
      id: "01",
      title: "Reviving Retro PCs",
      subtitle: "What happens when old PCs are given modern upgrades?",
      image: retroPics,
    },
    {
      id: "02",
      title: "Top 10 Laptops of 2022",
      subtitle: "Our best picks for various needs and budgets.",
      image: topLaptops,
    },
    {
      id: "03",
      title: "The Growth of Gaming",
      subtitle: "How the pandemic has sparked fresh opportunities.",
      image: gamingGroth,
    },
  ];
  return (
    <main>
      <div className="main-article">
        <img src={web3} alt="web3" />
        <h1> The Bright Future of Web 3.0?</h1>
        <div>
          <p>
            {" "}
            We dive into the next evolution of the web that claims to put the
            power of the platforms back into the hands of the people. But is it
            really fulfilling its promise?
          </p>
          <button>Read more</button>
        </div>
      </div>

      <div className="news-container">
        <h2>New</h2>

        <div className="news-items">
          <h3>Hydrogen VS Electric Cars</h3>
          <p> Will hydrogen-fueled cars ever catch up to EVs?</p>
        </div>
        <hr />
        <div className="news-items">
          <h3> The Downsides of AI Artistry</h3>
          <p>
            What are the possible adverse effects of on-demand AI image
            generation?
          </p>
        </div>
        <hr />
        <div className="news-items">
          <h3> Is VC Funding Drying Up?</h3>
          <p>
            Private funding by VC firms is down 50% YOY. We take a look at what
            that means.
          </p>
        </div>
      </div>
      {articles.map((v, i) => (
        <ArticleCard data={v} />
      ))}
    </main>
  );
};

export default Main;
