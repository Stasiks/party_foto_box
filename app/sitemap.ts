import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://deinedomain.de'; // Обязательно замени на свой домен

  // Статические страницы
  const staticRoutes = [
    '',
    '/kontakt',
    '/preise',
    '/galerie',
    '/faq',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1 : 0.8,
  }));

  // В будущем сюда добавится map() по массиву продуктов и эвентов

  return [...staticRoutes];
}