const SortSelector = ({ sortBy, onSortChange }) => {
  return (
    <div className="controls">
      <label htmlFor="sort"> Sort : </label>
      <select
        id="sort"
        value={sortBy}
        onChange={(e) => onSortChange(e.target.value)}
      >
        <option value="market_cap_desc">Market cap(High to low)</option>
        <option value="market_cap_asc">Market cap(Low to High)</option>
        <option value="price_desc">Price (High to low)</option>
        <option value="price_asc">Price (Low to High)</option>
        <option value="change_desc">24h Change (High to low)</option>
        <option value="change_asc">24h Change (Low to High)</option>
      </select>
    </div>
  );
};

export default SortSelector;
