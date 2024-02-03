import React, { useState, useMemo } from "react";
// You have been given a list of items you shopped from the grocery store
// You need to calculate the total amount of money you spent

export const Assignment3 = () => {
  const [items, setItems] = useState([
    { name: "Chocolates", value: 10 },
    { name: "Chips", value: 20 },
    { name: "Onion", value: 30 },
    { name: "Tomato", value: 30 },
    // Add more items as needed
  ]);

  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);

  const onSubmitHandler = (e) => {
    if (name == "") {
      return;
    }
    setItems([...items, { name, value: price }]);
  };

  // Your code starts here
  const totalValue = useMemo(() => {
    let res = 0;
    items.forEach((element) => {
      res = res + element.value;
    });
    return res;
  }, [items]);
  // Your code ends here
  return (
    <div>
      <div>
        <input
          type="text"
          onChange={(e) => {
            setName(e.target.value);
          }}
          placeholder="Name of The Item"
        />
        <input
          type="text"
          onChange={(e) => {
            setPrice(Number(e.target.value));
          }}
          placeholder="Price"
        />
        <button onClick={onSubmitHandler}>Add Item</button>
      </div>
      <ul>
        {items.map((item, index) => (
          <li key={index}>
            {item.name} - Price: ${item.value}
          </li>
        ))}
      </ul>
      <p>Total Value: {totalValue}</p>
    </div>
  );
};
