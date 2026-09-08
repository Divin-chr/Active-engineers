import Link from "next/link";
import { notFound } from "next/navigation";
import PageHero from "../../../components/effects/PageHero";
import Reveal from "../../../components/Reveal";
import { StaggerGroup, StaggerItem } from "../../../components/Stagger";
import SpotlightCard from "../../../components/effects/SpotlightCard";
import { Calendar, Clock, ArrowLeft } from "lucide-react";
import { BLOG_POSTS, getPostBySlug } from "../posts";

export function generateStaticParams() {
  return BLOG_POSTS.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};
  return {
    title: `${post.title} | Active Engineering Group`,
    description: post.excerpt,
  };
}

export default async function BlogPostPage({ params }) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const related = BLOG_POSTS.filter((p) => p.slug !== post.slug && p.category === post.category).slice(0, 2);
  const avatar = `https://ui-avatars.com/api/?name=${encodeURIComponent(
    post.author.replace(/^(Eng\.|QS\.)\s*/, "")
  )}&background=0f3b4c&color=fff&size=80`;

  return (
    <main>
      <PageHero media={post.image} mediaType="image" effect="parallax-bg">
        <span className="kicker" style={{ color: "var(--muted-invert)" }}>
          {post.category}
        </span>
        <h1 className="display">{post.title}</h1>
        <div className="post-meta post-meta--invert">
          <span>
            <Calendar aria-hidden="true" /> {post.date}
          </span>
          <span>
            <Clock aria-hidden="true" /> {post.readTime}
          </span>
        </div>
      </PageHero>

      <div className="container section" style={{ maxWidth: 760 }}>
        <Link href="/blog" className="btn" style={{ marginBottom: 32 }}>
          <ArrowLeft aria-hidden="true" style={{ marginRight: 6 }} /> Back to Insights
        </Link>

        <Reveal>
          <div className="author-row">
            <img src={avatar} alt={`Avatar for ${post.author}`} className="author-avatar" />
            <div>
              <div className="author-name">{post.author}</div>
              <div className="section-subtitle" style={{ margin: 0 }}>
                Active Engineering Group
              </div>
            </div>
          </div>
        </Reveal>

        <div className="article-body">
          <p className="article-lede">{post.body[0]}</p>
          {post.body.slice(1).map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>

        {related.length > 0 && (
          <section className="section">
            <h2 className="section-title">Related Insights</h2>
            <StaggerGroup className="grid-2">
              {related.map((relatedPost) => (
                <StaggerItem className="card" key={relatedPost.slug} whileHover={{ y: -4 }}>
                  <SpotlightCard>
                    <Link
                      href={`/blog/${relatedPost.slug}`}
                      style={{ textDecoration: "none", color: "inherit", display: "block" }}
                    >
                      <h3>{relatedPost.title}</h3>
                      <p>{relatedPost.excerpt}</p>
                    </Link>
                  </SpotlightCard>
                </StaggerItem>
              ))}
            </StaggerGroup>
          </section>
        )}
      </div>
    </main>
  );
}
