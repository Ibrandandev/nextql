import Link from "next/link";

export default function ProductCard({ product }) {
  return (
    <Link href={`/products/${product.id}`}>
      <article className=" bg-green-950 text-white rounded pt-5 w-52 border-green-950 flex flex-col gap-4 h-36">
        <div className="flex justify-between bg-slate-300 text-green-950  items-center px-5">
          <p>{product.name}</p>
          <p>${product.price}</p>
        </div>
        <div className="text-center px-5 pt-2 text-sm">
          <p>{product.description}</p>
        </div>
      </article>
    </Link>
  );
}
