import Link from "next/link";

export default function Navigation() {
  return (
    <nav>
      <ul className="flex justify-center py-3 gap-x-3 bg-green-950 text-white">
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/products">Products</Link>
        </li>
        <li>
          <Link href="/new">Add new</Link>
        </li>
      </ul>
    </nav>
  );
}
