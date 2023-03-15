import { Header } from './Header';
import './home.css';
import { Navbar } from './Navbar';
import { Feature } from './Feature';
import { useEffect } from 'react';
import {useState} from 'react'
export function Home() {
//  const [items, setitems] = useState([]);
const items = [
  {
   "img": "https://hindi.gadgetsnow.com/photo/96886359.cms",
   "name": "Camera",
   "buy": "Buy"
  },
  {
   "img": "https://www.sony.co.in/image/dad03fcb90a51f01c16322ce84522217?fmt=pjpeg&bgcolor=FFFFFF&bgc=FFFFFF&wid=2515&hei=1320",
   "name": "Camera Stand",
   "buy": "Buy"
  },
  {
   "img": "http://cdn.shopify.com/s/files/1/0486/4137/6411/products/112_49849e06-9b1c-45ab-9010-4ac0c7938592.jpg?v=1631274821",
   "name": "Baby light",
   "buy": "Buy"
  },
  {
   "img": "https://media.zigcdn.com/media/model/2022/Jul/right-side-view-1797732104_930x620.jpg",
   "name": "Bike",
   "buy": "Buy"
  },
  {
   "img": "https://s3.ap-south-1.amazonaws.com/choosemybicycle.webp/images/bicycles/rockfire-urban-sport-4.webp",
   "name": "Bicycle",
   "buy": "Buy"
  },
  {
   "img": "https://rukminim1.flixcart.com/image/416/416/kfoapow0/power-drill/u/w/t/10mm-powerful-drill-machine-for-wall-metal-wood-drilling-with-original-imafw28heg8k5kha.jpeg?q=70",
   "name": "Drilling Machine",
   "buy": "Buy"
  },
  {
   "img": "https://www.reliancedigital.in/medias/Eureka-Forbes-Wet-and-Dry-Zeal-Vacuum-Cleaner-492391697-i-1-1200Wx1200H?context=bWFzdGVyfGltYWdlc3w2MjY3NHxpbWFnZS9qcGVnfGltYWdlcy9oZjgvaDJkLzk2MjU1MzYwNjk2NjIuanBnfGQ1ZTIzMTY4MjhkM2QyNjAyOWU3ZmJjOWFjYjAwNTA1NmQyNzc4YTcyZThkZTM5YzU1MTg0ZTc3MDU5NzIwZWI",
   "name": "Vaccum Cleaner",
   "buy": "Buy"
  },
  {
   "img": "https://4.imimg.com/data4/PW/BX/MY-35942334/grass-cutting-machine-500x500.jpg",
   "name": "Grass cutter",
   "buy": "Buy"
  }
 ]
//  useEffect(()=>{
//     fetch('http://localhost:4000/items')
//     .then(res => res.json())
//     .then(data =>setitems(data))
//  },[])
  
  return (
    <div>
      <Navbar />
      <Header />
      <div className='homecontainer'>
        
        {items.map((san,index)=>{
          return<Feature 
          name = {san.name}
          pic = {san.img}
          buy = {san.buy}
          key = {index}
          
          />
        })}
      </div>
    </div>
  );
}

