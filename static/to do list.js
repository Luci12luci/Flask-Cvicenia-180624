const tasks = [];

        // Funkcia na pridanie úlohy
        function addTask() {
            const taskInput = document.getElementById("taskInput");
            const taskText = taskInput.value.trim();
            if (taskText) {
                tasks.push(taskText);
                taskInput.value = "";
                displayTasks();
            }
        }

        // Funkcia na zobrazenie úloh
        function displayTasks() {
            const taskList = document.getElementById("taskList");
            taskList.innerHTML = "";
            tasks.forEach((task, index) => {
                const taskDiv = document.createElement("div");
                taskDiv.className = "task";
                taskDiv.innerHTML = `
                    <label for="task${index}">${task}</label>
                    <button class="remove-button" onclick="removeTask(${index})">Odstrániť</button>
                `;
                taskList.appendChild(taskDiv);
            });
        }

        // Funkcia na označenie úlohy ako dokončenej
        function toggleTask(index) {
            // Implementujte logiku na označenie úlohy ako dokončenej
            // Napríklad: tasks[index].completed = !tasks[index].completed;
            displayTasks();
        }

        // Funkcia na odstránenie úlohy
        function removeTask(index) {
            tasks.splice(index, 1);
            displayTasks();
        }


        });
        // Zobrazenie úloh pri načítaní stránky
        displayTasks();
