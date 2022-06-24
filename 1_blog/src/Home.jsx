import { HeartStraight } from 'phosphor-react';

const Home = () => {
  const blogs = [
    { id: 1, date: '02 de jul, 2021', title: 'Agora é oficial: o Windows 11 está vindo', body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vestibulum auctor est. Nam vitae finibus ante. Duis lobortis tellus vel diam fringilla, eu ullamcorper ex iaculis.' },
    { id: 2, date: '02 de jul, 2021', title: 'Tim Berners-Lee vai leiloar código-fonte da web', body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras hendrerit lectus libero, id efficitur arcu viverra ac. Etiam sed sagittis velit, vitae convallis turpis. Praesent in purus non tellus tincidunt fermentum eu at sem. Curabitur lacus libero.' },
    { id: 3, date: '02 de jul, 2021', title: 'Tem Firefox novo no pedaço e você vai querer migrar', body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vestibulum auctor est.' },
    { id: 4, date: '02 de jul, 2021', title: 'John MCAfee, criador do antivírus McAfee, morre', body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras hendrerit lectus libero, id efficitur arcu viverra ac. Etiam sed sagittis velit, vitae convallis turpis. Praesent in purus non tellus tincidunt fermentum eu at sem. Curabitur lacus libero.' }
  ];

  return (
    <section className="cards">
      {
        blogs.map((blog) => (
          <div className="card" key={blog.id}>
            <div className="card__header">
              <p>{blog.date}</p>
              <HeartStraight size={22} color='#574AE8' />
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