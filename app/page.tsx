import image from 'next/image';
import ProductCard from './components/ProductCard';
 

export default function Home(){
  return (
    <main>
      <h1>Hello world</h1>
      <a href="/users"> users </a>
      <ProductCard />
     
    </main>
  )
}