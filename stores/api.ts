import { defineStore } from "pinia";

interface Response {
  limit: number;
  products: Product[];
  skip: number;
  total: number;
}

interface Product {
  id: number;
  title: string;
  description: string;
  category: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  tags: string[];
  brand: string;
  sku: string;
  weight: number;
  dimensions: {
    width: number;
    height: number;
    depth: number;
  };
  warrantyInformation: string;
  shippingInformation: string;
  availabilityStatus: string;
  reviews: Review[];
  returnPolicy: string;
  minimumOrderQuantity: number;
  meta: {
    createdAt: string; // ISO 8601 date string
    updatedAt: string; // ISO 8601 date string
    barcode: string;
    qrCode: string;
  };
  images: string[];
  thumbnail: string;
}

interface Review {
  rating: number;
  comment: string;
  date: string; // ISO 8601 date string
  reviewerName: string;
  reviewerEmail: string;
}

export const useMyApiStore = defineStore("product", () => {
  const products = ref<Response>();
  const productId = ref<Product>();

  async function getProducts() {
    try {
      const response = await $fetch<Response>("https://dummyjson.com/products");
      products.value = response;
    } catch (error) {
      console.log(error);
    }
  }

  async function getProductById(id: string) {
    try {
      const response = await $fetch<Product>(
        "https://dummyjson.com/products/" + id
      );
      productId.value = response;
    } catch (error) {
      console.log(error);
    }
  }

  async function getSearch(data: string) {
    try {
      const response = await $fetch<Response>(
        "https://dummyjson.com/products/search?q=" + data
      );
      products.value = response;
    } catch (error) {
      console.log(error);
    }
  }

  return {
    products,
    getProducts,
    productId,
    getProductById,
    getSearch,
  };
});
