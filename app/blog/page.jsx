import { StaggerGroup, StaggerItem } from "../../components/Stagger";
import PageHero from "../../components/effects/PageHero";
import ShimmerCard from "../../components/effects/ShimmerCard";

export const metadata = {
  title: "Blog | Active Engineering Group",
  description:
    "News, case studies, and engineering insights from Active Engineering Group's road, survey, and infrastructure projects.",
};

const POSTS = [
  {
    image: "/assets/img/10.jpg",
    alt: "Urban road with traffic",
    title: "VALUE ENGINEERING FOR URBAN ROADS",
    excerpt: "How early audits optimize cost, safety, and constructability across urban corridors.",
  },
  {
    image: "/assets/img/9.jpg",
    alt: "Surveyor using equipment in the field",
    title: "SURVEY ACCURACY AT SCALE",
    excerpt: "Lessons learned from 487 km of WSS surveys and control network design.",
  },
  {
    image: "/assets/img/8.jpg",
    alt: "Modern street lights at dusk",
    title: "STREET LIGHTING FOR SAFER MOBILITY",
    excerpt: "Designing efficient lighting schemes that enhance safety and reduce energy use.",
  },
];

export default function BlogPage() {
  return (
    <main>
      <PageHero media="/assets/img/4.jpg" mediaType="image" effect="clip-reveal">
        <h1 className="display">INSIGHTS & UPDATES</h1>
        <p className="lead">News, case studies, and engineering insights from our projects.</p>
      </PageHero>

      <div className="container section">
        <StaggerGroup className="grid-3 section">
          {POSTS.map((post) => (
            <StaggerItem as="article" className="card" key={post.title} whileHover={{ y: -4 }}>
              <ShimmerCard>
                <img src={post.image} alt={post.alt} />
              </ShimmerCard>
              <h3>{post.title}</h3>
              <p>{post.excerpt}</p>
              <a href="#" className="btn">
                Read more
              </a>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </div>
    </main>
  );
}
