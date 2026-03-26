export default interface Product {
  id: number;
  name: string;
  price: number;
  reviews: Reviews;
  rating: number;
  reviewCount: number;
  shortDescription: string;
  longDescription: string;
  category: "men" | "women" | "kids";
  subCategory: "topwear" | "bottomwear" | "winterwear";
  tags: (
    | "women"
    | "t-shirt"
    | "boxy"
    | "cotton"
    | "jacket"
    | "zip"
    | "casual"
    | "men"
    | "trousers"
    | "formal"
    | "tapered"
    | "kids"
    | "basic"
    | "girls"
    | "top"
    | "shirt"
    | "office"
    | "shorts"
    | "summer"
    | "blazer"
    | "oversized"
    | "fashion"
    | "cargo"
    | "utility"
    | "coat"
    | "winter"
    | "elegant"
    | "print"
    | "rain"
    | "outdoor"
  )[];
  availableSizes: string[];
  features?: string[];
  images: string[];
  bestseller: boolean;
  inStock: number;
}

interface Review {
  reviewText: string;
  rating: number;
}

type Reviews = Review[];
