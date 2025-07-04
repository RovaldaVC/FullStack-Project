function newActionPage(){
    window.location.href = "addActionPage.html"
}

function addAction(){
    const time = document.querySelector("#time").value;
    const action = document.querySelector("#action").value;
    
    localStorage.setItem("newTime", time)
    localStorage.setItem("newAction", action)

    window.location.href = "index.html"
}

function contentLoaded(){
    const time = localStorage.getItem("newTime")
    const action = localStorage.getItem("newAction")
    
    if (time && action){
        const details = document.querySelector(".details");
        details.innerHTML += `
        <li class=item1>${time}</li>
        <li class=item2>${action}</li>
        `
        localStorage.removeItem("newTime")
        localStorage.removeItem("newAction")
    }
}

window.addEventListener("DOMContentLoaded", contentLoaded())