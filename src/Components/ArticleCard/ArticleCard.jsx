const ArticleCard = ({ data }) => {
  const { id, image, title, subtitle } = data;
  return (
    <div className="single-card">
      <img src={image} alt={title} />
      <div>
        <h3>{id}</h3>
        <h4>{title}</h4>
        <p>{subtitle}</p>
      </div>
    </div>
  );
};

export default ArticleCard;
