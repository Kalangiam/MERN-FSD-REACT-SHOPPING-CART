import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"
import { useState } from 'react';
import Card from './Card';
import Cart from './Cart';
import Banner from './Banner';
import Footer from './Footer';
import { faStar } from '@fortawesome/free-solid-svg-icons'

function App() {
  const [Products, setProducts] = useState([
    { id: 1, title: "ASUS Vivobook 16X", img: "https://m.media-amazon.com/images/I/71KXxVGeMVL._SX679_.jpg", rupee: "46,990", strike: "59,990", description: "ASUS [SmartChoice] Vivobook 16X (2022), 16.0-inch (40.64 cms) FHD+ 16:10, AMD Ryzen 5 5600H, Thin and Laptop (8GB/512GB SSD/Integrated Graphics/Windows 11/Office 2021/Silver/1.80 kg), M1603QA-MB501WS", isClicked: false },
    { id: 2, title: "HONOR MagicBook", img: "https://m.media-amazon.com/images/I/61aaFLxqFKL._SX679_.jpg", rupee: "48,990", description: "HONOR MagicBook X16 (2024), 12th Gen Intel Core i5-12450H, 16-inch (40.64 cm) FHD IPS Anti-Glare Thin and Light Laptop (8GB/512GB PCIe SSD/Windows 11/ Full-Size Numeric Keyboard /1.68Kg), Gray", isClicked: false },
    { id: 3, title: "Apple MacBook Air", img: "https://m.media-amazon.com/images/I/71jG+e7roXL._SX679_.jpg", rupee: "89,990", stock: "Not in Stock", description: "Apple MacBook Air Laptop M1 chip, 13.3-inch/33.74 cm Retina Display, 8GB RAM, 256GB SSD Storage, Backlit Keyboard, FaceTime HD Camera, Touch ID. Works with iPhone/iPad; Space Grey", isClicked: false },
    { id: 4, title: "Acer Extensa 15", img: "https://m.media-amazon.com/images/I/51g12kaYslL._SX679_.jpg", rupee: "29,990", description: "Acer Extensa 15 Lightweight Laptop 11th Gen Intel Core i3 Processor with 15.6 (39.6 cms) Full HD Display- (8 GB RAM/256GB SSD/Windows 11 Home/Intel UHD Graphics /1.7Kg/Black) EX215-54", isClicked: false },
    { id: 5, title: "Acer Aspire 3", img: "https://m.media-amazon.com/images/I/51ufjoN8K4L._SX679_.jpg", rupee: "42,990", stock: "Not in Stock", description: "Acer Aspire 3 Spin 14 Intel Core i3 N305 Laptop (Windows 11 Home/8 GB/512 GB/AES Pen Solution/MSO) A3SP14-31PT, Multi-Touch WUXGA Display, 1.54 KG, Obsidian Black", isClicked: false },
    { id: 6, title: "ASUS Vivobook", img: "https://m.media-amazon.com/images/I/71HD+TwPD8L._SX522_.jpg", rupee: "66,990", description: "ASUS Vivobook 16X (2022), AMD Ryzen 7 5800Hs, 16 (40.64 Cms) Fhd+, Thin and Laptop (HDMI/16Gb/512Gb Ssd/Windows 11/Office 2021/Alexa Built-in/Backlit Kb/Fp Sensor/Silver/1.88 Kg), M1603Qa-Mb712Ws", isClicked: false },
    { id: 7, title: "Samsung Galaxy Pro", img: "https://m.media-amazon.com/images/I/41xKFwUlL-L._SX300_SY300_QL70_FMwebp_.jpg", strike: "60,990", rupee: "46,990", description: "Samsung Galaxy Book3 Core i7 13th Gen 1355U - (16 GB/512 GB SSD/Windows 11 Home) Galaxy Book3 Thin and Light Laptop  (15.6 Inch, Silver, 1.58 Kg, with MS Office)", isClicked: false },
    { id: 8, title: "Samsung Galaxy Book3", img: "https://m.media-amazon.com/images/I/31aPzW9atKL._SX300_SY300_QL70_FMwebp_.jpg", rupee: "79,990", description: "Samsung Galaxy Book3 Pro 360 Intel 13th Gen i5 EvoTM 40.62cm(16) Touchscreen 2-in-1 3K Display, 120Hz, Thin & Light Laptop(16 GB/512 GB SSD/Windows 11/MS Office/S-Pen/Graphite/1.6Kg), NP960QFG-KA2IN", isClicked: false }]);

  const [CartQuantity, setCartQuantity] = useState(0);

  const handleAddToCart = (product) => {
    setProducts((prevProducts) =>
      prevProducts.map((p) =>
        p.id === product.id ? { ...p, isClicked: true } : p
      )
    );
    setCartQuantity((prevQuantity) => prevQuantity + 1);
  };

  const handleRemoveFromCart = (product) => {
    setProducts((prevProducts) =>
      prevProducts.map((p) =>
        p.id === product.id ? { ...p, isClicked: false } : p
      )
    );
    setCartQuantity((prevQuantity) => prevQuantity - 1);
  };


  return (
    <div className='container-fluid'>

      <Cart CartQuantity={CartQuantity} /><br></br>
      <Banner></Banner>
      <div className="container container px-4 px-lg-1 mt-5">
        <div className='row'>
          {
            Products.map((product) => {
              return <Card product={product} onAddToCart={handleAddToCart} onRemoveFromCart={handleRemoveFromCart} ></Card>
            })
          }
        </div>
      </div><br></br>
      <Footer></Footer>


    </div>
  );
}

export default App;
