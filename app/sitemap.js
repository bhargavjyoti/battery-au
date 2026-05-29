export default function sitemap() {
  const baseUrl = "https://batteryaustralia.com.au";

  const staticRoutes = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 1.0,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/contact-us`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/service-area`,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 0.9,
    },
  ];

  const serviceCategories = [
    "car",
    "truck",
    "marine",
    "motorcycle",
    "golf-cart",
    "nbn",
  ];

  const categoryRoutes = serviceCategories.map((category) => ({
    url: `${baseUrl}/battery-replacement/${category}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: 0.9,
  }));

  return [...staticRoutes, ...categoryRoutes];
}
