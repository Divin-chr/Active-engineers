const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://example.com";

const ROUTES = ["", "/about", "/services", "/projects", "/blog", "/contact"];

export default function sitemap() {
  return ROUTES.map((route) => ({
    url: `${SITE_URL}${route}`,
  }));
}
