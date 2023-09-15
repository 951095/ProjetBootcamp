import "./style.css";

const Index = ({ posts }) => {

  console.log(posts);
  
  return (
    <div className="post__card">
      <div className="product__thumbnail">
        <img src={posts.pictures} />
      </div>
      <div className="product__content">
        <h2>{posts.title}</h2>
        <p>{posts.content}</p>
      </div>
    </div>
  );
}

export default Index;
