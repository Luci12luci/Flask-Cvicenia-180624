function calculate() {
            const num1 = parseFloat(document.getElementById("number1").value);
            const num2 = parseFloat(document.getElementById("number2").value);
            const operation = document.getElementById("operation").value;
            let result;

            switch (operation) {
                case "add":
                    result = num1 + num2;
                    break;
                case "subtract":
                    result = num1 - num2;
                    break;
                case "multiply":
                    result = num1 * num2;
                    break;
                case "divide":
                    result = num1 / num2;
                    break;
                default:
                    result = "Neplatná operácia";
            }

            document.getElementById("result").textContent = `Výsledok: ${result}`;
        }
