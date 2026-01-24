# 🗂️ Task Manager GUI (HTML, CSS, JavaScript)

A lightweight, browser-based **Task Manager application** built using **HTML, CSS, and vanilla JavaScript**. The app features a clean, responsive user interface and **persistent task storage using the browser’s LocalStorage**, ensuring tasks remain available even after refreshing or closing the browser.

This project focuses on demonstrating strong frontend fundamentals, including state management, event-driven programming, and clean UI design — without relying on external frameworks or libraries.

---

## 🚀 Features

* ➕ Add new tasks using the **Add button** or **Enter key**
* 📋 View all tasks in a clean, card-style list
* ✅ Mark tasks as completed with visual feedback (tick + strikethrough)
* ❌ Delete tasks instantly
* 💾 Persistent storage using **LocalStorage**
* 📱 Fully responsive layout for mobile and desktop
* 🎨 Clean, minimal, app-like UI

---

## 🧠 System Design Overview

This application follows a **single-layer frontend architecture** with local persistence.

### In-Memory Layer (Runtime)

Tasks are stored in a JavaScript array:

```
let tasks = [];
```

All UI operations modify this array, which acts as the **single source of truth**.

### Persistent Layer (Browser Storage)

Tasks are saved to the browser using:

```
localStorage.setItem('tasks', JSON.stringify(tasks));
```

Tasks are loaded when the application starts:

```
JSON.parse(localStorage.getItem('tasks'));
```

### Data Flow

```
Page Load
   ↓
Load tasks from LocalStorage
   ↓
Store in tasks[]
   ↓
Render tasks to UI
   ↓
User performs actions (Add / Complete / Delete)
   ↓
Update tasks[]
   ↓
Save to LocalStorage
   ↓
Re-render UI
```

---

## 📁 Project Structure

```
TaskManagerGUI/
│
├── index.html   # Main HTML structure
├── style.css   # UI styling and responsive design
├── index.js    # Application logic and persistence
└── README.md   # Project documentation
```

---

## 🛠️ How to Run

### Requirements

* Any modern web browser (Chrome, Edge, Firefox, Safari)
* No server or installation required

### Steps

1. Download or clone this repository
2. Open `index.html` in your browser
3. Start adding tasks 🎉

---

## 🎮 How to Use

### Add a Task

* Type a task in the input field
* Press **Enter** or click **Add Task**

### Complete a Task

* Click the **green circle button** next to a task
* The task will be marked as completed with a tick and strikethrough

### Delete a Task

* Click the **Delete button** next to the task

### Persistence

* Refresh or close the browser
* Tasks will remain saved automatically

---

## ⚙️ Key Design Decisions

### 1. Vanilla JavaScript (No Frameworks)

* Keeps the system lightweight
* Demonstrates strong core JavaScript fundamentals
* Easy to understand, modify, and extend

### 2. LocalStorage for Persistence

* Eliminates the need for a backend server
* Fast and portable
* Simple way to simulate persistent storage

### 3. Flexbox-Based Layout

* Ensures clean alignment of buttons and task cards
* Handles long task titles gracefully
* Adapts well to different screen sizes

### 4. Event-Driven UI

* Button clicks and keypress events control application logic
* Centralized `renderTasks()` function ensures consistent UI updates

---

## 🏗️ Code Architecture

### Core Components

* `tasks[]` → Single source of truth for application state
* `renderTasks()` → Renders UI from task data
* `saveTasks()` → Persists tasks to LocalStorage
* `addTask()` → Creates new task objects
* Event listeners → Handle user interactions

This architecture mirrors patterns used in modern frontend frameworks, implemented using **plain JavaScript**.

---

## 🚀 Future Enhancements

* 🔍 Search and filter tasks
* ✏️ Edit existing tasks
* 🌓 Dark/Light mode toggle
* 📅 Add due dates and priority levels
* 🌐 Connect to a backend API for cloud storage

---

## 🏆 Learning Outcomes

By building this project, you gain experience in:

* Frontend application design
* State management using JavaScript arrays
* Browser-based persistence with LocalStorage
* Responsive UI design using Flexbox
* Event-driven programming
* Debugging layout and rendering issues

---

## 👤 Author

**Nithish Kumar Goud**
Second-Year Computer Science Student

---

## 📄 License

This project is open for **educational and personal learning use**. You are free to modify and extend it for academic, portfolio, and practice purposes.

---

> *This project demonstrates how a lightweight browser-based system can implement core concepts such as persistence, state management, and clean UI design without relying on backend infrastructure or frontend f
