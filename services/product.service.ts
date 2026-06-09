import { Product, productsRegistry } from "@/data/products";

// Имитируем задержку сети для тестирования лоадеров (Suspense). Уберем в проде.
const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export const ProductService = {
  /**
   * Получить все продукты. 
   * В будущем здесь будет: return await prisma.product.findMany() или fetch из CMS
   */
  async getAllProducts(): Promise<Product[]> {
    await delay(100); 
    return Object.values(productsRegistry);
  },

  /**
   * Получить продукт по ID (slug)
   */
  async getProductById(id: string): Promise<Product | null> {
    await delay(100);
    const product = productsRegistry[id];
    if (!product) return null;
    return product;
  }
};