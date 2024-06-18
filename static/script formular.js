       function addToList() {
            const inputText = document.getElementById("textInput").value;
            if (inputText.trim() !== "") {
                const listItem = document.createElement("li");
                listItem.textContent = inputText;
                listItem.onclick = function () {
                    this.remove();
                };
                document.getElementById("myList").appendChild(listItem);
                document.getElementById("textInput").value = "";
            }
        }


