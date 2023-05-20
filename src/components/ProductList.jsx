"use client";

import ProductCard from "./ProductCard";

export default async function ProductList() {
  const res = await fetch(
    "https://nextql-ibrandandev.vercel.app//api/products",
    {
      cache: "no-store",
    }
  );
  const products = await res.json();

  const renderProducts = () => {
    if (products.length > 0) {
      return products.map((product) => (
        <ProductCard product={product} key={product.id} />
      ));
    } else {
      return <h2>There is no product</h2>;
    }
  };

  return (
    <section className="flex flex-col items-center">
      <h2 className="font-serif text-xl">Product List</h2>
      <section className="flex flex-wrap justify-center pt-4 gap-5 max-w-2xl">
        {renderProducts()}
      </section>
    </section>
  );
}
