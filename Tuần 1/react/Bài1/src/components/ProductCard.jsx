import "./ProductCard.css";
function ProductCard() {
  return (
    <div className="product-card">
      <img src="Bài tập react/Bài1/src/assets/IMG_9808.JPG" alt="Product" />
      <h3>Tên sản phẩm</h3>
      <p className="price">299,000đ</p>
      <button>Add to card</button>
    </div>
  );
}
export default ProductCard;
