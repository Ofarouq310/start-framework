
const projects = [
  { id: 1, title: "Project 1", img: "https://routeegy.github.io/startFramework/assets/images/port3.png", desc: "A fantastic project!" },
  { id: 2, title: "Project 2", img: "https://routeegy.github.io/startFramework/assets/images/port2.png", desc: "Another great project!" },
  { id: 3, title: "Project 3", img: "https://routeegy.github.io/startFramework/assets/images/poert1.png", desc: "Yet another awesome project!" },
  { id: 4, title: "Project 4", img: "https://routeegy.github.io/startFramework/assets/images/port3.png", desc: "A fantastic project!" },
  { id: 5, title: "Project 5", img: "https://routeegy.github.io/startFramework/assets/images/port2.png", desc: "Another great project!" },
  { id: 6, title: "Project 6", img: "https://routeegy.github.io/startFramework/assets/images/poert1.png", desc: "Yet another awesome project!" },
  { id: 7, title: "Project 7", img: "https://routeegy.github.io/startFramework/assets/images/port3.png", desc: "A fantastic project!" },
  { id: 8, title: "Project 8", img: "https://routeegy.github.io/startFramework/assets/images/port2.png", desc: "Another great project!" },
  { id: 9, title: "Project 9", img: "https://routeegy.github.io/startFramework/assets/images/poert1.png", desc: "Yet another awesome project!" },
];

function Portfolio() {
  return (
    <section id="portfolio" className="portfolio">
      <h2>PORTFOLIO COMPONENT</h2>
      <div className="portfolio-grid">
        {projects.map((project) => (
          <div key={project.id} className="portfolio-card">
            <img src={project.img} alt={project.title} />
            <h3>{project.title}</h3>
            <p>{project.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Portfolio;
