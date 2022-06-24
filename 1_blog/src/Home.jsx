import {HeartStraight} from 'phosphor-react';
import blogs from './blogs.json';

const Home = () => {
  return (
    <section className="cards">
      {blogs.map(blog => (
        <div className="card" key={blog.id}>
          <div className="card__header">
            <p>{blog.date}</p>
            <HeartStraight size={22} color="#574AE8" />
          </div>
          <h3>{blog.title}</h3>
          <p>{blog.body}</p>
        </div>
      ))}
    </section>
  );
};

export default Home;
