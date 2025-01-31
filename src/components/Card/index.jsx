const Card = ({ item, clearFromBasket, addToBasket, amount }) => {
  return (
    <div
      style={{ width: "200px" }}
      className="d-flex flex-column align-items-center gap-1 border rounded p-3"
    >
      <img height={100} src={item.imagePath} alt="category-image" />
      <span>{item.name}</span>

      <div className="d-flex gap-2 mt-4 align-items-center">
        <button
          onClick={() => clearFromBasket(item.id)}
          className="btn btn-sm btn-outline-danger"
        >
          Reset
        </button>
        <span data-testid="amount" className="fs-2">
          {amount}
        </span>
        <button
          onClick={() => addToBasket(item)}
          className="btn btn-sm btn-outline-success"
        >
          Add
        </button>
      </div>
    </div>
  );
};

export default Card;
