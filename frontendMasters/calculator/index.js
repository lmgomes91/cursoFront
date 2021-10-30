let expression = "";
let count = 0;

const test = () => {
  count++;
  console.log({ count });

  document
    .querySelector(".calculator-buttons")
    .addEventListener("click", (event) => {
      console.log({ innerText: event.target.innerText });
      try {
        switch (event.target.innerText) {
          case "<-":
            expression.length > 0
              ? (expression = expression.slice(0, expression.length - 1))
              : true;
            break;
          case "C":
            expression = "";
            break;
          case "=":
            expression = eval(expression).toString();

            break;
          case "X":
            expression += "*";
            break;
          case "/":
            expression += "/";
            break;

          default:
            expression += event.target.innerText;
            break;
        }

        document.getElementById("result").textContent =
          expression.length > 0 ? expression : 0;

        event.stopImmediatePropagation();
      } catch (error) {
        alert(error);
      }
    });
};
