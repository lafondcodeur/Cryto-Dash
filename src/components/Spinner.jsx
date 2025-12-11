import { BarLoader } from "react-spinners";

const override = {
  display: "block",
  margin: "auto 0 50px auto",
};

const Spinner = ({ color = "blue", size = "150" }) => {
  return (
    <div>
      <BarLoader
        color={color}
        size={size}
        cssOverride={override}
        aria-label="loading..."
      />
    </div>
  );
};

export default Spinner;
