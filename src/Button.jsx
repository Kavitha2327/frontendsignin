function Button() {
  //const click1=()=> console.log("thanks for clicking")

  //   const click2 = (name) => console.log(`${name} stop clicking`);

  //   let count = 0;
  //   const click1 = (name) => {
  //     if (count < 3) {
  //       count++;
  //       console.log(`${name} you clicked me ${count} times`);
  //     } else {
  //       console.log(`${name} stop clicking me`);
  //     }
  //   };

  //   const click = (e) => console.log(e);

  const click = (e) => (e.target.textContent = "hello");

  return <button onClick={(e) => click(e)}>Click me</button>;
}

export default Button;
