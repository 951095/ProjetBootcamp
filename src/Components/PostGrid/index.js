import PostCard from "../PostCard";
import "./style.css";

const Index = ({products}) => {
  return (
    <div className="posts__grid">
      {
        products.map(
          (posts) => (
            <PostCard posts={posts} />
          )
        )
      }
    </div>
  );
}

export default Index;
