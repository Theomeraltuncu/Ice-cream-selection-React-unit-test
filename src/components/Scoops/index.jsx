import axios from "axios";
import { useEffect, useState } from "react";
import Card from "../Card";

const Scoops = () => {
  const [data, setData] = useState([]);
  const [basket, setBasket] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:4040/scoops").then((res) => setData(res.data));
  }, []);

  const addToBasket = (item) => {
    setBasket([...basket, item]);
  };

  const clearFromBasket = (delete_id) => {
    const filtered = basket.filter((i) => i.id !== delete_id);

    setBasket(filtered);
  };

  console.log(basket);

  return (
    <div className="mb-3">
      <h1>Ice Creams</h1>
      <p className="fw-bold fs-5">
        <span className="text-success fw-bold fs-5">5 Eur</span> Each
      </p>
      <h3>
        Total Price:{" "}
        <span data-testid="total" className="text-success">
          {basket.length * 5}
        </span>{" "}
        Eur
      </h3>

      <div className="row gap-3 justify-content-between mt-4 p-3">
        {data.map((i) => (
          <div className="col">
            <Card
              addToBasket={addToBasket}
              clearFromBasket={clearFromBasket}
              key={i.id}
              item={i}
              amount={basket.filter((item) => item.name == i.name).length}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Scoops;
