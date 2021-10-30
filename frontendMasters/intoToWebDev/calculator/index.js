let expression = "";

const jsCalc = () => {
  document
    .querySelector(".calculator-buttons")
    .addEventListener("click", (event) => {
      console.log({ innerText: event.target });
      try {
        switch (event.target.innerText) {
          case "<-":
            expression.length > 0
              ? (expression = expression.slice(0, expression.length - 1))
              : null;
            break;
          case "C":
            expression = "";
            break;
          case "=":
            expression.length > 0
              ? (expression = eval(expression).toString())
              : null;

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

jsCalc();
