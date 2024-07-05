import "./styles.css";
import { v4 } from "uuid";

function Homework_06() {
    interface Car {
        brand: string;
        price: number;
        isDiesel: boolean;
    }
  const cars: Car[] = [
    { brand: "BMW", price: 20000, isDiesel: true },
    { brand: "Mercedes", price: 22000, isDiesel: false },
    { brand: "Porshe", price: 50000, isDiesel: true },
    { brand: "Nissan", price: 25000, isDiesel: false },
    { brand: "Audi", price: 50000, isDiesel: true },
  ];

  const cards = cars.map((car)=> {
    return(
        <div className="cars-cards" key={v4()}>
            <p>Brand: {car.brand}</p>
            <p>Price: {car.price}</p>
            <p>Diesel: {car.isDiesel? "yes" : "no"}</p>
        </div>
    )
  })
  return <div className="page-wrapper">
    {cards}
  </div>;
}

export default Homework_06;
