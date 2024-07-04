import { Post } from '@components';
import './Home.scss';

const Home = () => {
  return (
    <div className="home-container">
      <div className="category">
        <span className="category-title">전체 글</span>
      </div>
      <div className="list">
        <Post />
        <Post />
        <Post />
        <Post />
      </div>
    </div>
  );
};

export default Home;
