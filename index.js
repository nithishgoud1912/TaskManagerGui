document.addEventListener('DOMContentLoaded', () => {

  const submitBtn = document.getElementById('submit-btn');
  const taskInput = document.getElementById('task-input');
  const tasksList = document.getElementById('task-list');

  let tasks = JSON.parse(localStorage.getItem('tasks')) || [];

  // ---------- Persistence ----------
  function saveTasks() {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }

  // ---------- UI Rendering ----------
  function renderTasks() {
    tasksList.innerHTML = ''; // Clear before re-render

    if (tasks.length === 0) {
      const emptyMsg = document.createElement('li');
      emptyMsg.textContent = 'No tasks yet.';
      tasksList.appendChild(emptyMsg);
      return;
    }

    tasks.forEach(task => {
      const listItem = document.createElement('li');

      const titleSpan = document.createElement('span');
      titleSpan.textContent = task.title;
      titleSpan.style.textDecoration = task.isCompleted ? 'line-through' : 'none';

      const buttonContainer = document.createElement('div');
      buttonContainer.classList.add('button-container');

      // ---- Complete Button ----
      const completeBtn = document.createElement('button');
      completeBtn.classList.add('circle-btn');
      if (task.isCompleted) completeBtn.classList.add('checked');

      completeBtn.addEventListener('click', () => {
        task.isCompleted = !task.isCompleted;
        saveTasks();
        renderTasks();
      });

      // ---- Delete Button ----
      const deleteBtn = document.createElement('button');
      deleteBtn.classList.add('deleteBtn');
      deleteBtn.textContent = 'Delete';

      deleteBtn.addEventListener('click', () => {
        const index = tasks.findIndex(t => t.id === task.id);
        if (index !== -1) {
          tasks.splice(index, 1);
          saveTasks();
          renderTasks();
        }
      });

      buttonContainer.appendChild(completeBtn);
      buttonContainer.appendChild(deleteBtn);

      listItem.appendChild(titleSpan);
      listItem.appendChild(buttonContainer);
      tasksList.appendChild(listItem);
    });
  }

  // ---------- Add Task ----------
  function addTask() {
    const taskTitle = taskInput.value.trim();
    if (!taskTitle) return;

    const task = {
      id: Date.now(),
      title: taskTitle,
      isCompleted: false
    };

    tasks.push(task);
    saveTasks();
    renderTasks();

    taskInput.value = '';
  }

  submitBtn.addEventListener('click', (e) => {
    e.preventDefault();
    addTask();
  });

  // ---------- Enter Key Support ----------
  taskInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      addTask();
    }
  });

  // ---------- Init ----------
  renderTasks();

});