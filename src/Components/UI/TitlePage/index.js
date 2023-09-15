import "./style.css";
const TitlePage = ({
  subtitle,
  title
}) => {
  return (
    <div className="title__page">
      <h1>{title}</h1>
      <p>{subtitle}</p>
    </div>
  );
}

export default TitlePage;