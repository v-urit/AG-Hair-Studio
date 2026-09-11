import type { MetadataRoute } from "next"

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://aghair.ie"

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "",
    "/booking",
    "/login",
    "/dashboard",
  ]

  const now = new Date().toISOString()

  return routes.map((route) => ({
    url: `${SITE_URL}${route}`,
    lastModified: now,
    changeFrequency: route === "" ? "daily" : "weekly",
    priority: route === "" ? 1.0 : route === "/booking" ? 0.9 : 0.7,
  }))
}
