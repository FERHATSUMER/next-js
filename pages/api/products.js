export default function handler(req,res) {
  res.status(200).json([
    { name: "Hamburger",price:2 },
    { name: "Cake",price:4}
    
  ]);
}
