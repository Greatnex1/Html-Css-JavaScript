
const tasks = document.querySelector(".tasks");
const addTask = document.querySelector(".add-task");
const input = document.querySelector("input[type=text]");
const deleteButton = document.querySelectorAll(".fa-trash");
const deleteButton2 = document.getElementsByClassName("fa-trash");


tasks.innerHTML = "";
input.focus();
addTask.addEventListener("click", (e) => {
  e.preventDefault();
  const text = input.value;
  if (text.trim() === "") return;
  const taskInput =
    `<section class="task"><p class="task-content"><span class="task-content-text">${text} </span><span class="task-content-delete-icon"><i class="fa-solid fa-trash"></i></span></p></section>`;

  tasks.insertAdjacentHTML("beforeend", taskInput);
  input.value = "";
  input.blur();

  Array.from(deleteButton2).forEach((btn) =>
    btn.addEventListener("click", () => {
      btn.closest(".task").remove();
    })
  );
});