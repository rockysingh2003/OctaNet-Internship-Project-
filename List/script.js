function addTask() {
    var taskInput = document.getElementById("taskInput");
    var taskList = document.getElementById("taskList");

    // Get the task value
    var taskValue = taskInput.value.trim();

    // If task is empty, return
    if (taskValue === "") {
        return;
    }

    // Create a new list item
    var li = document.createElement("li");
    li.textContent = taskValue;

    // Create a delete button
    var deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.className = "deleteButton";
    deleteButton.onclick = function() {
        taskList.removeChild(li); // Remove the task when delete button is clicked
    };

    // Append the delete button to the list item
    li.appendChild(deleteButton);

    // Append the new list item to the task list
    taskList.appendChild(li);

    // Clear the input field
    taskInput.value = "";
}
