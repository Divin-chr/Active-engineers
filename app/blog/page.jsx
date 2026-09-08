import Link from "next/link";
import { StaggerGroup, StaggerItem } from "../../components/Stagger";
import PageHero from "../../components/effects/PageHero";
import ShimmerCard from "../../components/effects/ShimmerCard";
import Reveal from "../../components/Reveal";
import NewsletterForm from "../../components/NewsletterForm";
import { Tag as TagIcon, ArrowRight } from "lucide-react";
import { BLOG_POSTS } from "./posts";

export const metadata = {
  title: "Blog | Active Engineering Group",
  description:
    "News, case studies, and engineering insights from Active Engineering Group's road, survey, and infrastructure projects.",
};

const FEATURED = BLOG_POSTS.find((post) => post.featured);
const POSTS = BLOG_POSTS.filter((post) => !post.featured);

const TAGS = [
  "Engineering",
  "Surveying",
  "Road Design",
  "Infrastructure",
  "Rwanda",
  "Sustainability",
  "Bridge Design",
  "Water Supply",
];

function avatarFor(author) {
  return `https://ui-avatars.com/api/?name=${encodeURIComponent(
    author.replace(/^(Eng\.|QS\.)\s*/, "")
  )}&background=0f3b4c&color=fff&size=64`;
}

export default function BlogPage() {
  return (
    <main>
      <PageHero media="/assets/img/4.jpg" mediaType="image" effect="clip-reveal">
        <h1 className="display">INSIGHTS & UPDATES</h1>
        <p className="lead">News, case studies, and engineering insights from our projects.</p>
      </PageHero>

      <div className="container section">
        <Reveal>
          <div className="blog-card featured-article">
            <div className="card-img">
              <ShimmerCard>
                <img src={FEATURED.image} alt={FEATURED.alt} />
              </ShimmerCard>
              <span className="blog-card-category">{FEATURED.category}</span>
            </div>
            <div>
              <div className="blog-card-byline">
                <img src={avatarFor(FEATURED.author)} alt="" aria-hidden="true" />
                <span>{FEATURED.author}</span>
                <span aria-hidden="true">·</span>
                <span>{FEATURED.date}</span>
                <span aria-hidden="true">·</span>
                <span>{FEATURED.readTime}</span>
              </div>
              <h2>{FEATURED.title}</h2>
              <p>{FEATURED.excerpt}</p>
              <Link href={`/blog/${FEATURED.slug}`} className="blog-card-link">
                Read Full Article <ArrowRight aria-hidden="true" />
              </Link>
            </div>
          </div>
        </Reveal>

        <StaggerGroup className="grid-3 section">
          {POSTS.map((post) => (
            <StaggerItem as="article" className="blog-card" key={post.slug} whileHover={{ y: -4 }}>
              <div className="card-img">
                <ShimmerCard>
                  <img src={post.image} alt={post.alt} />
                </ShimmerCard>
                <span className="blog-card-category">{post.category}</span>
              </div>
              <div className="blog-card-byline">
                <img src={avatarFor(post.author)} alt="" aria-hidden="true" />
                <span>{post.author}</span>
                <span aria-hidden="true">·</span>
                <span>{post.date}</span>
              </div>
              <h3>{post.title}</h3>
              <p>{post.excerpt}</p>
              <Link href={`/blog/${post.slug}`} className="blog-card-link">
                Read more <ArrowRight aria-hidden="true" />
              </Link>
            </StaggerItem>
          ))}
        </StaggerGroup>

        <h2 className="section-title">Popular Tags</h2>
        <StaggerGroup className="values">
          {TAGS.map((tag) => (
            <StaggerItem as="span" className="value" key={tag} whileHover={{ y: -4 }}>
              <TagIcon aria-hidden="true" /> {tag}
            </StaggerItem>
          ))}
        </StaggerGroup>

        <Reveal>
          <div className="section">
            <NewsletterForm />
          </div>
        </Reveal>
      </div>
    </main>
  );
}
