import { Link } from "react-router-dom";

export default function NotFoundPage() {
  return (
    <div className="center not-found">
      <h1>404</h1>
      <p>Trang không tồn tại</p>
      <Link to="/" className="btn btn-primary">
        Về trang chủ
      </Link>
    </div>
  );
}
