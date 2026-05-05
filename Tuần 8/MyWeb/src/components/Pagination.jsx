export default function Pagination({ page, totalPages, onChange }) {
  if (totalPages <= 1) return null;

  return (
    <div className="pagination">
      <button disabled={page === 1} onClick={() => onChange(page - 1)}>
        {"<"}
      </button>

      {Array.from({ length: totalPages }, (_, i) => i + 1).map((num) => (
        <button
          key={num}
          className={num === page ? "active" : ""}
          onClick={() => onChange(num)}
        >
          {num}
        </button>
      ))}

      <button disabled={page === totalPages} onClick={() => onChange(page + 1)}>
        {">"}
      </button>
    </div>
  );
}
