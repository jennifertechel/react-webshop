import { products } from "../../data";

function Home() {
  const product = products[6];
  console.log(product);
  return (
    // test för att få ut EN produkt
    <div>
      <h1>This is home page</h1>
      <img src={product.image} alt={product.title} />
      <h2>{product.title} vas</h2>
      <p>{product.description}</p>
      <p>{product.price} SEK</p>
      <p>Höjd: {product.height}</p>
    </div>
  );
}

export default Home;
