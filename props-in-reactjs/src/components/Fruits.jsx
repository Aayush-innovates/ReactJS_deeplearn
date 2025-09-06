import Fruit from "./Fruit";
export default function Fruits() {
  //const fruits = ["Mango", "Apple"];
  const fruits = [
    { name: "Apple", price: 10, sold: false },
    { name: "Mango", price: 20, sold: true },
  ];
  return (
    <>
      <ul>
        {fruits.map((fruit) => {
          return (
            // <li key={fruit.name}>
            //   {fruit.name} :{fruit.price}
            // </li>
            <Fruit key={fruit.name} fruit={fruit} />
          );
        })}
      </ul>
    </>
  );
}
