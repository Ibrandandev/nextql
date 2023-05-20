"use client";

import axios from "axios";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { ToastContainer, toast } from "react-toastify";

export default function ProductForm({ id }) {
  const router = useRouter();

  const [product, setProduct] = useState({
    name: "",
    price: 0,
    description: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`/api/products/${id}`, product);
      toast.success("Product updated successfully");
      setTimeout(() => {
        router.push("/products");
      }, 3000);
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };

  const handleChange = ({ target: { name, value } }) => {
    setProduct({ ...product, [name]: value });
  };

  useEffect(() => {
    const getProduct = async (id) => {
      const { data } = await axios.get(
        `https://nextql-black.vercel.app/api/products/${id}`
      );
      setProduct(data);
    };

    getProduct(id);
  }, []);

  return (
    <form className="flex flex-col item-center" onSubmit={handleSubmit}>
      <div className="max-w-sm w-full mx-auto">
        <div className="mb-3 flex flex-col gap-2">
          <label htmlFor="name" className="">
            Product Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            className="h-9 rounded-sm ps-2 bg-gray-300"
            onChange={handleChange}
            value={product.name}
          />
        </div>
        <div className="mb-3 flex flex-col gap-2">
          <label htmlFor="price" className="">
            Price
          </label>
          <input
            type="text"
            id="price"
            name="price"
            className="h-9 rounded-sm ps-2 bg-gray-300"
            onChange={handleChange}
            value={product.price}
          />
        </div>
        <div className="mb-3 flex flex-col gap-2">
          <label htmlFor="description" className="">
            Description
          </label>
          <textarea
            id="description"
            name="description"
            className="rounded-sm ps-2 pt-2 bg-gray-300 h-32"
            onChange={handleChange}
            value={product.description}
          />
        </div>

        <input
          type="submit"
          value="Update Product"
          className="h-9 border-2 bg-green-950 text-white w-full rounded-sm mt-3 cursor-pointer"
        />
        <ToastContainer autoClose={3000} theme="dark" />
      </div>
    </form>
  );
}
