import './product.css'
import { Navbar } from './Navbar';
import { Header } from './Header';

export function Product() {
  return (
    <div>
      <Navbar/>
      <Header type = "product"/>
    </div>
  );
}
