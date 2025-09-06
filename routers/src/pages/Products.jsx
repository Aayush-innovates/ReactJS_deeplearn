import { useParams } from "react-router-dom";

export default function Products() {
  const { id } = useParams();
  return (
    <>
      <h2>Products</h2>
      <h1>Product id : {id}</h1>
    </>
  );
}
