export default function Fruit({ fruit }) {
  return (
    <>
      {/* {fruit.name}, {fruit.price} */}
      {fruit.sold == false ? (
        <li key={fruit.name}>
          {fruit.name} {}{" "}
        </li>
      ) : (
        " "
      )}
    </>
  );
}
