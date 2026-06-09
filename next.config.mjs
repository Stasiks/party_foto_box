/** @type {import('next').NextConfig} */
const nextConfig = {
  // Отключаем заголовок X-Powered-By для безопасности
  poweredByHeader: false,
  
  async headers() {
    return [
      {
        // Применяем ко всем маршрутам
        source: '/(.*)',
        headers: [
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'X-Frame-Options', value: 'DENY' },
          { key: 'X-XSS-Protection', value: '1; mode=block' },
          { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
          { key: 'Strict-Transport-Security', value: 'max-age=31536000; includeSubDomains; preload' },
          // В будущем здесь стоит добавить Content-Security-Policy (CSP)
        ],
      },
    ];
  },
};

export default nextConfig;