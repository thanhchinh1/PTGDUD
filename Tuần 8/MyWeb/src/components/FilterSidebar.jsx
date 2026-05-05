const types = [
  "pan-fried",
  "grilled",
  "roasted",
  "steamed",
  "baked",
  "steamed",
  "stewed",
];

export default function FilterSidebar({ filters, setFilters }) {
  const toggleType = (value) => {
    const exists = filters.types.includes(value);

    setFilters((prev) => ({
      ...prev,
      types: exists
        ? prev.types.filter((item) => item !== value)
        : [...prev.types, value],
    }));
  };

  return (
    <aside className="sidebar">
      <h3>FILTERS</h3>

      <div className="filter-block">
        <p className="filter-title">Type</p>
        {types.map((type) => (
          <label key={type} className="filter-option">
            <input
              type="checkbox"
              checked={filters.types.includes(type)}
              onChange={() => toggleType(type)}
            />
            <span>{type}</span>
          </label>
        ))}
      </div>

      <div className="filter-block">
        <p className="filter-title">Rating</p>
        {[1, 2, 3, 4, 5].map((star) => (
          <label key={star} className="filter-option">
            <input
              type="radio"
              name="rating"
              checked={filters.minRating === star}
              onChange={() =>
                setFilters((prev) => ({ ...prev, minRating: star }))
              }
            />
            <span>{star} sao trở lên</span>
          </label>
        ))}

        <button
          className="btn btn-light full-width"
          onClick={() => setFilters({ types: [], minRating: 0 })}
        >
          Reset
        </button>
      </div>
    </aside>
  );
}
