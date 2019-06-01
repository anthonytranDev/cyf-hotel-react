import React from "react";

import Order from "./Order.js";

class Restaurant extends React.Component {
  render() {
    return (
      <div>
        <h3>Restaurant Orders</h3>
        <ol>
          <Order orderTypes="Pasta" />
          <br />
          <Order orderTypes="Pizza" />
          <br />
          <Order orderTypes="Salad" />
          <br />
          <Order orderTypes="Drinks" />
        </ol>
      </div>
    );
  }
}
// const Restaurant = () => {
//   const pizzas = 0;
//   return (
//     <div>
//       <h3>Restaurant Orders</h3>
//       <ul>
//         <li>
//           Pizzas: {pizzas} <button className="btn btn-primary">Add</button>
//         </li>
//       </ul>
//     </div>
//   );
// };

export default Restaurant;
