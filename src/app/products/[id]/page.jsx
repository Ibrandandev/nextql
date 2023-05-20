"use client";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMarker } from "@fortawesome/free-solid-svg-icons";
import { useRouter } from "next/navigation";
import { ToastContainer, toast } from "react-toastify";

export default async function ProductPage({ params: { id } }) {
  const router = useRouter();

  const { data: product } = await axios.get(
    `https://nextql-black.vercel.app/api/products/${id}`
  );

  const handleDelete = async (id) => {
    try {
      await axios.delete(`https://nextql-black.vercel.app/api/products/${id}`);
      toast.success("Product deleted successfully");
      setTimeout(() => {
        router.push("/products");
      }, 2500);
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };

  const handleUpdate = async (id) => {
    router.push(`/products/edit/${id}`);
  };

  return (
    <section className="flex justify-center">
      <ToastContainer autoClose={2500} theme="dark" />
      <article className=" bg-green-950 text-white rounded pt-3 w-52  flex flex-col justify-around gap-4 h-48">
        <div className="flex justify-between bg-slate-300 text-green-950  items-center px-5">
          <p>{product.name}</p>
          <p>${product.price}</p>
        </div>
        <div className="text-center px-5 pt-2 text-sm">
          <p>{product.description}</p>
        </div>
        <div className="flex justify-center gap-3 py-3">
          <FontAwesomeIcon
            icon={faMarker}
            className="text-yellow-400 w-5 cursor-pointer"
            onClick={() => handleUpdate(product.id)}
          />
          <FontAwesomeIcon
            icon={faMarker}
            className="text-red-500  w-5 cursor-pointer"
            onClick={() => handleDelete(product.id)}
          />
        </div>
      </article>
    </section>
  );
}
