// dependencies
import { HeartStraight } from 'phosphor-react';

// assets
import heartVoid from '../assets/heart_void.svg';
import heartFill from '../assets/heart_fill.svg';

const Home = ({ blogs }) => {

  return (
    <section className="cards">
      {
        blogs.map((blog) => (
          <div className="card" key={blog.id}>
            <div className="card__header">
              <p>{blog.date}</p>
              <img src={heartVoid} alt="" />
              {/* <HeartStraight size={22} color='#574AE8' /> */}
            </div>
            <h3>{blog.title}</h3>
            <p>{blog.body}</p>
          </div>
        ))
      }
    </section>
  );
};

export default Home;