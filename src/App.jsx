import React from "react";
import cars from "./practice";

function App() {
  const [H, T] = cars;
  const { model: Hmodel, coloursByPopularity: Hcolor, speedStats: Hspeed } = H;
  const [Hb] = Hcolor;
  const { topSpeed: HtopSpeed } = Hspeed;

  const { model: Tmodel, coloursByPopularity: Tcolor, speedStats: Tspeed } = T;
  const [Tb] = Tcolor;
  const { topSpeed: TtopSpeed } = Tspeed;

  return (
    <>
      <tr>
        <th>Brand</th>
        <th>Top Speed</th>
        <th>Colour</th>
      </tr>
      <tr>
        <td>{Tmodel}</td>
        <td>{TtopSpeed}</td>
        <td>{Tb}</td>
      </tr>
      <tr>
        <td>{Hmodel}</td>
        <td>{HtopSpeed}</td>
        <td>{Hb}</td>
      </tr>
    </>
  );
}

export default App;
