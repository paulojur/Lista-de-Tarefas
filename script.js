document.addEventListener("DOMContentLoaded", function() {
    const taskInput = document.getElementById('new-task');
    const addTaskButton = document.getElementById('add-task');
    const taskList = document.getElementById('task-list');

    addTaskButton.addEventListener('click', function() {
        const taskText = taskInput.value.trim();
        if (taskText !== "") {
            const listItem = document.createElement('li');
            listItem.className = 'list-group-item d-flex justify-content-between align-items items-center';
            listItem.innerHTML = `
            <span>${taskText}</span>
            <div>
                <button class="btn btn-sm btn-success me-2 complete-task">Concluir</button>
                <button class="btn btn-sm btn-danger delete-task">Excluir</button>
            </div>
        `;
        taskList.appendChild(listItem);
        taskInput.value = "";

        listItem.querySelector('.complete-task').addEventListener('click', function() {
            listItem.classList.toggle('completed');
        });

        listItem.querySelector('.delete-task').addEventListener('click', function() {
            taskList.removeChild(listItem);
        });

        }
    })
})