import pool from "@/config/db";

const saveProducts = async (req, res) => {
  const { name, price, description } = req.body;
  try {
    const [result] = await pool.query(`INSERT INTO products SET ?`, {
      name,
      price,
      description,
    });
    return res
      .status(200)
      .json({ id: result.insertId, name, price, description });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

const getProducts = async (req, res) => {
  try {
    const [products] = await pool.query("SELECT * FROM products");
    return res.status(200).json(products);
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Something went wrong, please try again" });
  }
};

export default async function handler(req, res) {
  switch (req.method) {
    case "GET":
      return await getProducts(req, res);
    case "POST":
      return await saveProducts(req, res);
  }
}
