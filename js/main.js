function newActionPage(){
    window.location.href = "addActionPage.html"
}

function addAction(){

    const time = document.querySelector("#time").value;
    const action = document.querySelector("#action").value;

    let tasks = JSON.parse(localStorage.getItem("tasks")) ||[];
    tasks.push({time, action})
    localStorage.setItem("tasks", JSON.stringify(tasks))
    
    window.location.href = "index.html"
}

function contentLoaded(){
    const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    const details = document.querySelector(".details");

    tasks.forEach(task => {
        details.innerHTML +=`
        <li class='item1'> ${task.time} </li>
        <li class='item2'> ${task.action} </li>
        `;
    })
}

window.addEventListener("DOMContentLoaded", contentLoaded())