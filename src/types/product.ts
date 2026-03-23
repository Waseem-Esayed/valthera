export default interface Product {
  id: string;
  name: string;
  reviews: Reviews;
  price: number;
  shortDescription: string;
  longDescription: string;
  availableSizes: string[];
  features?: string[];
  category: string;
  subCategory?: string;
  images: string[];
  bestseller: boolean;
}

interface Review {
  reviewText: string;
  rating: number;
}

type Reviews = Review[];
