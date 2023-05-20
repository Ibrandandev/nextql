import pool from "@/config/db";

const getProduct = async (req, res) => {
  try {
    const { id } = req.query;

    const [result] = await pool.query("SELECT * FROM products WHERE id = ?", [
      id,
    ]);
    if (result.length > 0) {
      return res.status(200).json(result[0]);
    }
    return res.status(404).json("Product not found");
  } catch (error) {
    res.status(500).json({ message: "Something went wrong, please try again" });
  }
};
const updateProduct = async (req, res) => {
  try {
    const { id } = req.query;
    const { name, price, description } = req.body;
    await pool.query(
      "UPDATE products SET name = ?, price = ?, description = ?  WHERE id = ?",
      [name, price, description, id]
    );
    return res.status(204).json();
  } catch (error) {
    res.status(500).json({ message: "Something went wrong, please try again" });
  }
};

const deleteProduct = async (req, res) => {
  try {
    const { id } = req.query;
    await pool.query("DELETE FROM products WHERE id = ?", [id]);
    return res.status(204).json();
  } catch (error) {
    res.status(500).json({ message: "Something went wrong, please try again" });
  }
};

export default async function handler(req, res) {
  const { id } = req.query;

  switch (req.method) {
    case "GET":
      return await getProduct(req, res);
    case "PUT":
      return await updateProduct(req, res);
    case "DELETE":
      return await deleteProduct(req, res);
  }
}
