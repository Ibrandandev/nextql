import UpdateProductForm from "@/components/UpdateProductForm";

export default function UpdateProductPage({ params: { id } }) {
  return (
    <section className="border-2 max-w-md mx-auto rounded-sm py-10 mt-3 border-green-950">
      <h2 className="text-center font-serif text-2xl">Update Product</h2>
      <UpdateProductForm id={id} />
    </section>
  );
}
