import axios from "axios";
import { useEffect, useState } from "react";

const Toppings = () => {
  const [data, setData] = useState([]);
  const [basket, setBasket] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:4040/toppings")
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  }, []);

  const handleChange = (isChecked, item) => {
    isChecked
      ? setBasket([...basket, item])
      : setBasket(basket.filter((i) => i.name !== item.name));
  };
  return (
    <div className="">
      <h1>Sauce Types</h1>
      <p className="fw-bold fs-5">
        <span className="text-success fw-bold fs-5"> 1 Eur </span>Each
      </p>

      <h3>
        Sauce Price:{" "}
        <span data-testid="total" className="text-success">
          {basket.length * 3}
        </span>{" "}
        Eur
      </h3>

      <div className="row gap-3 mt-4">
        {data.map((item) => (
          <div className="top-card col" style={{ width: "150px" }}>
            <label htmlFor={item.name}>
              <img src={item.imagePath} height={100} alt="" />
              <p className="text-nowrap text-center">{item.name}</p>
            </label>
            <input
              onChange={(e) => handleChange(e.target.checked, item)}
              id={item.name}
              type="checkbox"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Toppings;
