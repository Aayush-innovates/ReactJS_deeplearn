import Welcome from "./Welcome";
import Fruit from "./Bye";

export default function Conditional() {
  const display = true;
  if (display) {
    return <Welcome />;
  } else {
    return <Bye />;
  }
}
