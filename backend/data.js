import bcrypt from "bcryptjs";

const data = {
  users: [
    {
      name: "Minh",
      email: "minh@gmail.com",
      password: bcrypt.hashSync("minh1234", 8),
      isAdmin: false,
      isSeller: true,
      seller: {
        name: "Minh",
        logo: "/images/Logo/Seller.png",
        description: "Hot seller",
        rating: 4.0,
        numReviews: 50,
      },
    },
    {
      name: "Nam",
      email: "admin@gmail.com",
      password: bcrypt.hashSync("admin1234", 8),
      isAdmin: true,
      isSeller: false,
    },
    {
      name: "Son",
      email: "son@gmail.com",
      password: bcrypt.hashSync("son1234", 8),
      isAdmin: false,
    },
  ],
  products: [
    {
      name: "White T-Shirt",
      category: "T-Shirt",
      image: "/images/Tshirt/Basic2.jpg",
      price: 40,
      countInStock: 0,
      brand: "No brand",
      rating: 0,
      numReviews: 0,
      description: "Basic shirt with high quality materials",
    },
    {
      name: "Marsh Mallow T-Shirt",
      category: "T-Shirt",
      image: "/images/Tshirt/Basic3.jpg",
      price: 50,
      countInStock: 2,
      brand: "No brand",
      rating: 0,
      numReviews: 0,
      description: "Cool and comfortable T-shirt",
    },
    {
      name: "Black N White T-Shirt",
      category: "T-Shirt",
      image: "/images/Tshirt/Basic.jpg",
      price: 50,
      countInStock: 3,
      brand: "No brand",
      rating: 0,
      numReviews: 0,
      description: "Cool and comfortable T-shirt",
    },
    {
      name: "White Adidas T-Shirt",
      category: "T-Shirt",
      image: "/images/Tshirt/Adidas.jpg",
      price: 50,
      countInStock: 6,
      brand: "Adidas",
      rating: 0,
      numReviews: 0,
      description: "Basic shirt with high quality materials",
    },
    {
      name: "Palace Adidas T-Shirt",
      category: "T-Shirt",
      image: "/images/Tshirt/Adidas3.jpg",
      price: 70,
      countInStock: 4,
      brand: "Adidas",
      rating: 0,
      numReviews: 0,
      description: "Short sleeve cotton t-shirt from Adidas",
    },
    {
      name: "Black Adidas T-Shirt",
      category: "T-Shirt",
      image: "/images/Tshirt/Adidas2.jpg",
      price: 50,
      countInStock: 2,
      brand: "Adidas",
      rating: 0,
      numReviews: 0,
      description: "Cool t-shirt from Adidas",
    },
    {
      name: "Black Pant",
      category: "Pant",
      image: "/images/Pants/Basicpant.jpg",
      price: 40,
      countInStock: 2,
      brand: "No brand",
      rating: 0,
      numReviews: 0,
      description: "Basic pant with high quality materials",
    },
    {
      name: "Brown Kaki Pant",
      category: "Pant",
      image: "/images/Pants/Basicpant3.jpg",
      price: 50,
      countInStock: 4,
      brand: "No brand",
      rating: 0,
      numReviews: 0,
      description: "Basic pant with high quality materials",
    },
    {
      name: "Black Jogger",
      category: "Pant",
      image: "/images/Pants/Basicpant2.jpg",
      price: 40,
      countInStock: 1,
      brand: "No brand",
      rating: 0,
      numReviews: 0,
      description: "Comfortable and convenient jogger",
    },
    {
      name: "Gray Adidas Pant",
      category: "Pant",
      image: "/images/Pants/Adidaspant2.jpg",
      price: 60,
      countInStock: 6,
      brand: "Adidas",
      rating: 0,
      numReviews: 0,
      description: "Hot adidas pant",
    },
    {
      name: "Black Adidas Jogger",
      category: "Pant",
      image: "/images/Pants/Adidaspant.jpg",
      price: 60,
      countInStock: 3,
      brand: "Adidas",
      rating: 0,
      numReviews: 0,
      description: "Black jogger from Adidas",
    },
    {
      name: "White Adidas Jogger",
      category: "Pant",
      image: "/images/Pants/Adidaspant3.jpg",
      price: 70,
      countInStock: 2,
      brand: "Adidas",
      rating: 0,
      numReviews: 0,
      description: "Comfortable for anyone",
    },
    {
      name: "Adidas Insulated Jacket",
      category: "Jacket",
      image: "/images/Jacket/Adidasjacket2.jpg",
      price: 150,
      countInStock: 8,
      brand: "Adidas",
      rating: 0,
      numReviews: 0,
      description: "Warm and comfortable jacket from Adidas",
    },
    {
      name: "Adidas Jacket",
      category: "Jacket",
      image: "/images/Jacket/Adidasjacket.jpg",
      price: 130,
      countInStock: 3,
      brand: "Adidas",
      rating: 0,
      numReviews: 0,
      description: "Nice and cool jacket from Adidas",
    },
    {
      name: "White Jacket",
      category: "Jacket",
      image: "/images/Jacket/Basicjacket.jpg",
      price: 100,
      countInStock: 8,
      brand: "No brand",
      rating: 0,
      numReviews: 0,
      description: "Jacket with high quality materials",
    },
    {
      name: "Biker Jacket",
      category: "Jacket",
      image: "/images/Jacket/Basicjacket2.jpg",
      price: 130,
      countInStock: 8,
      brand: "No brand",
      rating: 0,
      numReviews: 0,
      description: "Blue biker jacket",
    },
  ],
};
export default data;
