function newActionPage(){
    window.location.href = "/addActionPage"
}

function addAction() {
    const time = document.querySelector("#time").value;
    const action = document.querySelector("#action").value;

    fetch("http://localhost:5000/add", {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({time, action})
    }).then(() => {
        window.location.href = "/";
    });
}

function contentLoaded() {
    fetch("http://localhost:5000/tasks")
        .then(res => res.json())
        .then(tasks => {
            const details = document.querySelector(".details");
            tasks.forEach(task => {
                details.innerHTML += `
                    <li class='item1'> ${task.time} </li>
                    <li class='item2'> ${task.action} </li>
                `;
            });
        });
}

window.addEventListener("DOMContentLoaded", contentLoaded);