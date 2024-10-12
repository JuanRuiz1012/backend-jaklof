const express = require("express");
const app = express();
const port = 3000;

const products = [
  {
    id: 30,
    title: "Sudadera",
    description: "Attractive Design, Metallic material, Four key hooks, Reliable & Durable, Premium Quality",
    price: 80000,
    stock: 25,
    category: "Men",
    talla: "S / M / L / XL",
    thumbnail: "https://tinypic.host/images/2024/09/16/prenda1.jpg",
    images: ["https://tinypic.host/images/2024/09/16/prenda1.jpg"]
  },
  {
    id: 31,
    title: "Camiseta",
    description: "Soft and comfortable cotton material, Trendy design, Perfect for casual wear",
    price: 70000,
    stock: 100,
    category: "Men",
    talla: "S / M / L / XL",
    thumbnail: "https://tinypic.host/images/2024/09/16/prenda2.jpg",
    images: ["https://tinypic.host/images/2024/09/16/prenda2.jpg"]
  },
  {
    id: 32,
    title: "Saco",
    description: "Comfortable and durable, Lightweight, Modern style",
    price: 120000,
    stock: 30,
    category: "Women",
    talla: "S / M / L / XL",
    thumbnail: "https://tinypic.host/images/2024/09/16/prenda3.jpg",
    images: ["https://tinypic.host/images/2024/09/16/prenda3.jpg"]
  },
  {
    id: 34,
    title: "Saco",
    description: "Spacious compartments, Durable material, Perfect for travel and school",
    price: 120000,
    stock: 25,
    category: "Women",
    talla: "S / M / L / XL",
    thumbnail: "https://tinypic.host/images/2024/09/16/producto4.jpg",
    images: ["https://tinypic.host/images/2024/09/16/producto4.jpg"]
  },
  {
    id: 35,
    title: "Saco",
    description: "Comfortable fit, Trendy design, Protects from the sun, Unisex",
    price: 130000,
    stock: 75,
    category: "Men",
    talla: "S / M / L / XL",
    thumbnail: "https://tinypic.host/images/2024/09/16/producto5.jpg",
    images: ["https://tinypic.host/images/2024/09/16/producto5.jpg"]
  },
  {
    id: 36,
    title: "Saco",
    description: "Comfortable fit, Trendy design, Protects from the sun, Unisex",
    price: 140000,
    stock: 75,
    category: "Men",
    talla: "S / M / L / XL",
    thumbnail: "https://tinypic.host/images/2024/09/16/producto6.jpg",
    images: ["https://tinypic.host/images/2024/09/16/producto6.jpg"]
  },
  {
    id: 37,
    title: "Chaleco",
    description: "Comfortable fit, Trendy design, Protects from the sun, Unisex",
    price: 85000,
    stock: 75,
    category: "Women",
    talla: "S / M / L / XL",
    thumbnail: "https://tinypic.host/images/2024/09/16/prenda7.jpg",
    images: ["https://tinypic.host/images/2024/09/16/prenda7.jpg"]
  },
  {
    id: 38,
    title: "Buso",
    description: "Comfortable fit, Trendy design, Protects from the sun, Unisex",
    price: 99000,
    stock: 75,
    category: "Women",
    talla: "S / M / L / XL",
    thumbnail: "https://tinypic.host/images/2024/09/16/prenda8.jpg",
    images: ["https://tinypic.host/images/2024/09/16/prenda8.jpg"]
  },
  {
    id: 39,
    title: "Saco",
    description: "Comfortable fit, Trendy design, Protects from the sun, Unisex",
    price: 130000,
    stock: 75,
    brand: "Women",
    talla: "S / M / L / XL",
    category: "Women",
    thumbnail: "https://tinypic.host/images/2024/09/16/prenda9.jpg",
    images: [
      "https://tinypic.host/images/2024/09/16/prenda9.jpg"
    ]
  },
  {
    id: 40,
    title: "Saco",
    description: "Comfortable fit, Trendy design, Protects from the sun, Unisex",
    price: 100000,
    stock: 75,
    talla: "S / M / L / XL",
    category: "Men",
    thumbnail: "https://tinypic.host/images/2024/09/16/prenda10.jpg",
    images: [
      "https://tinypic.host/images/2024/09/16/prenda10.jpg"
    ]
  },
  {
    id: 41,
    title: "Chamarra",
    description: "Water-resistant, Stylish design, Comfortable fit, Ideal for outdoor activities",
    price: 150000,
    discountPercentage: 5.0,
    rating: 4.80,
    stock: 50,
    brand: "Outdoor Gear",
    talla: "S / M / L / XL",
    category: "Men",
    thumbnail: "https://tinypic.host/images/2024/09/16/prenda11.jpg",
    images: [
      "https://tinypic.host/images/2024/09/16/prenda11.jpg"
    ]
  },
  {
    id: 42,
    title: "Chaleco de Lana",
    description: "Warm and cozy, Made of high-quality wool, Perfect for layering",
    price: 85000,
    discountPercentage: 3.5,
    rating: 4.65,
    stock: 80,
    brand: "Winterwear",
    talla: "S / M / L / XL",
    category: "Women",
    thumbnail: "https://tinypic.host/images/2024/09/16/prenda12.jpg",
    images: [
      "https://tinypic.host/images/2024/09/16/prenda12.jpg"
    ]
  },
  {
    id: 43,
    title: "Chaqueta Deportiva",
    description: "Breathable fabric, Lightweight, Ideal for sports and active wear",
    price: 120000,
    discountPercentage: 4.0,
    rating: 4.75,
    stock: 60,
    brand: "Sporty",
    talla: "S / M / L / XL",
    category: "Men",
    thumbnail: "https://tinypic.host/images/2024/09/16/prenda13.jpg",
    images: [
      "https://tinypic.host/images/2024/09/16/prenda13.jpg"
    ]
  },
  {
    id: 44,
    title: "Abrigo Largo",
    description: "Elegant design, Made from premium materials, Keeps you warm during winter",
    price: 180000,
    discountPercentage: 6.0,
    rating: 4.90,
    stock: 35,
    brand: "Luxury Coats",
    talla: "S / M / L / XL",
    category: "Women",
    thumbnail: "https://tinypic.host/images/2024/09/16/prenda14.jpg",
    images: [
      "https://tinypic.host/images/2024/09/16/prenda14.jpg"
    ]
  },
  {
    id: 45,
    title: "Sudadera Deportiva",
    description: "Moisture-wicking material, Comfortable fit, Ideal for workouts",
    price: 90000,
    discountPercentage: 3.0,
    rating: 4.60,
    stock: 100,
    brand: "Fitness",
    talla: "S / M / L / XL",
    category: "Men",
    thumbnail: "https://tinypic.host/images/2024/09/16/prenda15.jpg",
    images: [
      "https://tinypic.host/images/2024/09/16/prenda15.jpg"
    ]
  },
  {
    "id": 46,
    "title": "Buso",
    "description": "Comfortable fit, Trendy design, Protects from the sun, Unisex",
    "price": 85000,
    "discountPercentage": 4.25,
    "rating": 4.70,
    "stock": 75,
    "brand": "Women",
    "talla": "S / M / L / XL",
    "category": "Women",
    "thumbnail": "https://tinypic.host/images/2024/09/16/prenda16.jpg",
    "images": [
      "https://tinypic.host/images/2024/09/16/prenda16.jpg"
    ]
  },
  {
    "id": 47,
    "title": "Buso",
    "description": "Comfortable fit, Trendy design, Protects from the sun, Unisex",
    "price": 85000,
    "discountPercentage": 4.25,
    "rating": 4.70,
    "stock": 75,
    "brand": "Women",
    "talla": "S / M / L / XL",
    "category": "Men",
    "thumbnail": "https://tinypic.host/images/2024/09/16/prenda17.jpg",
    "images": [
      "https://tinypic.host/images/2024/09/16/prenda17.jpg"
    ]
  },
  {
    "id": 48,
    "title": "Buso",
    "description": "Comfortable fit, Trendy design, Protects from the sun, Unisex",
    "price": 80000,
    "discountPercentage": 4.25,
    "rating": 4.70,
    "stock": 75,
    "brand": "Women",
    "talla": "S / M / L / XL",
    "category": "Men",
    "thumbnail": "https://tinypic.host/images/2024/09/16/prenda18.jpg",
    "images": [
      "https://tinypic.host/images/2024/09/16/prenda18.jpg"
    ]
  },
  {
    "id": 49,
    "title": "Saco",
    "description": "Comfortable fit, Trendy design, Protects from the sun, Unisex",
    "price": 70000,
    "discountPercentage": 4.25,
    "rating": 4.70,
    "stock": 75,
    "brand": "Women",
    "talla": "S / M / L / XL",
    "category": "Women",
    "thumbnail": "https://tinypic.host/images/2024/09/16/prenda19.jpg",
    "images": [
      "https://tinypic.host/images/2024/09/16/prenda19.jpg"
    ]
  },
  {
    "id": 50,
    "title": "Saco",
    "description": "Comfortable fit, Trendy design, Protects from the sun, Unisex",
    "price": 90000,
    "discountPercentage": 4.25,
    "rating": 4.70,
    "stock": 75,
    "brand": "Women",
    "talla": "S / M / L / XL",
    "category": "Women",
    "thumbnail": "https://tinypic.host/images/2024/09/16/prenda20.jpg",
    "images": [
      "https://tinypic.host/images/2024/09/16/prenda20.jpg"
    ]
  },
  {
    "id": 51,
    "title": "Saco",
    "description": "Comfortable fit, Trendy design, Protects from the sun, Unisex",
    "price": 250000,
    "discountPercentage": 4.25,
    "rating": 4.70,
    "stock": 75,
    "brand": "Women",
    "talla": "S / M / L / XL",
    "category": "Men",
    "thumbnail": "https://tinypic.host/images/2024/09/16/prenda21.jpg",
    "images": [
      "https://tinypic.host/images/2024/09/16/prenda21.jpg"
    ]
  },
  {
    "id": 52,
    "title": "Saco",
    "description": "Comfortable fit, Trendy design, Protects from the sun, Unisex",
    "price": 150000,
    "discountPercentage": 4.25,
    "rating": 4.70,
    "stock": 75,
    "brand": "Women",
    "talla": "S / M / L / XL",
    "category": "Men",
    "thumbnail": "https://tinypic.host/images/2024/09/16/prenda22.jpg",
    "images": [
      "https://tinypic.host/images/2024/09/16/prenda22.jpg"
    ]
  },
  {
    "id": 53,
    "title": "Saco",
    "description": "Comfortable fit, Trendy design, Protects from the sun, Unisex",
    "price": 140000,
    "discountPercentage": 4.25,
    "rating": 4.70,
    "stock": 75,
    "brand": "Women",
    "talla": "S / M / L / XL",
    "category": "Men",
    "thumbnail": "https://tinypic.host/images/2024/09/16/prenda23.jpg",
    "images": [
      "https://tinypic.host/images/2024/09/16/prenda23.jpg"
    ]
  },
  {
    "id": 54,
    "title": "Saco",
    "description": "Comfortable fit, Trendy design, Protects from the sun, Unisex",
    "price": 120000,
    "discountPercentage": 4.25,
    "rating": 4.70,
    "stock": 75,
    "brand": "Women",
    "talla": "S / M / L / XL",
    "category": "Women",
    "thumbnail": "https://tinypic.host/images/2024/09/16/prenda24.jpg",
    "images": [
      "https://tinypic.host/images/2024/09/16/prenda24.jpg"
    ]
  },
  {
    "id": 55,
    "title": "Saco",
    "description": "Comfortable fit, Trendy design, Protects from the sun, Unisex",
    "price": 130000,
    "discountPercentage": 4.25,
    "rating": 4.70,
    "stock": 75,
    "brand": "Women",
    "talla": "S / M / L / XL",
    "category": "Men",
    "thumbnail": "https://tinypic.host/images/2024/09/16/prenda25.jpg",
    "images": [
      "https://tinypic.host/images/2024/09/16/prenda25.jpg"
    ]
  }
];

app.get("/api/products/jaklof", (req, res) => {
  res.send(products);
});

app.use("/", express.static("f"));

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
