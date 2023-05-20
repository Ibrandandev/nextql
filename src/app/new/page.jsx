import ProductForm from "@/components/ProductForm";

export default function NewProductPage() {
  return (
    <section className="border-2 max-w-md mx-auto rounded-sm py-10 mt-3 border-green-950">
      <h2 className="text-center font-serif text-2xl">Create Product</h2>
      <ProductForm />
    </section>
  );
}
