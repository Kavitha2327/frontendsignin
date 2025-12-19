// function List() {
//   const fruits = [
//     { id: 1, name: "apple", cal: 45 },
//     { id: 2, name: "orange", cal: 57 },
//     { id: 3, name: "banana", cal: 89 },
//     { id: 4, name: "guava", cal: 67 },
//     { id: 5, name: "watermelon", cal: 34 },
//   ];

//   //   fruits.sort((a, b) => a.name.localeCompare(b.name));

//   // fruits.sort((a,b)=> a.cal - b.cal);

//   const lowCalFruits = fruits.filter((fruit) => {
//     return fruit.cal < 60;
//   });

//   const list = lowCalFruits.map((lowCalFruit) => (
//     <li key={lowCalFruit.id}>
//       {lowCalFruit.name}: &nbsp;{lowCalFruit.cal}
//     </li>
//   ));

//   return <ul>{list}</ul>;
// }

// import PropTypes from "prop-types";

function List({ items = [], category = "Category" }) {
  //   const itemList = props.items;
  //   const category = props.category;

  const listItems = items.map((item) => {
    return (
      <li key={item.id}>
        {item.name}:&nbsp; {item.cal}
      </li>
    );
  });
  return (
    <>
      <h3>{category}</h3>
      <ul>{listItems}</ul>
    </>
  );
}

// List.defaultProps={
//     category:"Category",
// }

export default List;

// import List from "./List.jsx";

// function App() {
//   const fruits = [
//     { id: 1, name: "apple", cal: 45 },
//     { id: 2, name: "orange", cal: 57 },
//     { id: 3, name: "banana", cal: 89 },
//     { id: 4, name: "guava", cal: 67 },
//     { id: 5, name: "watermelon", cal: 34 },
//   ];

//   const chocolates = [
//     { id: 6, name: "snickers", cal: 345 },
//     { id: 7, name: "dairyMilk", cal: 567 },
//     { id: 8, name: "Bournville", cal: 234 },
//     { id: 9, name: "Fuse", cal: 584 },
//     { id: 10, name: "FiveStar", cal: 786 },
//   ];
//   return (
//     <>
//       <List items={fruits} category="fruits" />
//       <List items={chocolates} category="chocolates" />
//     </>
//   );
// }
// export default App;