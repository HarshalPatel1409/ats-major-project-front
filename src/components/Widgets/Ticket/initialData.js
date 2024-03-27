// initialData.js
const initialData = {
  tasks: {
    "task-1": { id: "task-1", content: "Task 1", status: "todo" },
    "task-2": { id: "task-2", content: "Task 2", status: "in-progress" },
    "task-3": { id: "task-3", content: "Task 3", status: "done" },
  },
  columns: {
    todo: {
      id: "todo",
      title: "To Do",
      taskIds: ["task-1"],
    },
    "in-progress": {
      id: "in-progress",
      title: "In Progress",
      taskIds: ["task-2"],
    },
    done: {
      id: "done",
      title: "Done",
      taskIds: ["task-3"],
    },
  },
  columnOrder: ["todo", "in-progress", "done"],
};

export default initialData;
