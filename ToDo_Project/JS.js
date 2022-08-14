var create = document.getElementById("create")
var main = document.getElementById("popmain")
var mainpop = document.getElementById("popbox")
var maincontainer = document.getElementById("checkbox")
var inputvalue2 = document.getElementById("inputvalue")
var inputarea = document.getElementById("inputarea")
var all = document.querySelector("body")
function doning() {
    var count = 0;

    let box = document.createElement("div");
    box.setAttribute("id", "box");

    let taskname = document.createElement("h2");
    taskname.setAttribute("id", "taskname");
    let inputvalue = document.getElementById("inputvalue").value;
    taskname.textContent = inputvalue;
    box.append(taskname);


    let icons = document.createElement("div");
    icons.classList.add("icons");
    box.append(icons);


    let action = document.createElement("div");
    action.setAttribute("id", "actionicon");
    action.classList.add("actionicon")
    action.style.display = "none";
    icons.append(action);

    let check_icon = document.createElement("i");
    check_icon.classList.add('fa', 'fa-check');
    check_icon.setAttribute("id", "check2")
    action.append(check_icon);

    let edit_icon = document.createElement("i");
    edit_icon.classList.add("fa", "fa-pencil");
    edit_icon.setAttribute("id", "edit")
    action.append(edit_icon);

    let delete_icon = document.createElement("i");
    delete_icon.classList.add('fa', 'fa-trash-o');
    delete_icon.setAttribute("id", "delete")
    action.append(delete_icon);

    let changecolor_icon = document.createElement("i");
    changecolor_icon.classList.add('fa', 'fa-square');
    changecolor_icon.setAttribute("id", "changecolors")
    action.append(changecolor_icon);


    let lock_icons = document.createElement("div");
    lock_icons.classList.add("lockicon");
    icons.append(lock_icons);

    let lock_icon = document.createElement("i");
    lock_icon.classList.add('fa', 'fa-lock');
    lock_icon.setAttribute("id", "lock");
    lock_icons.append(lock_icon);

    let unlock_icon = document.createElement("i");
    unlock_icon.classList.add('fa', 'fa-unlock');
    unlock_icon.setAttribute("id", "unlock");
    unlock_icon.style.display = "none"
    lock_icons.append(unlock_icon);

    maincontainer.append(box);



    inputvalue2.value = "";

    lock_icon.addEventListener("click", function lock() {
        action.style.display = "block";
        unlock_icon.style.display = "block";
        lock_icon.style.display = "none";
    });

    unlock_icon.onclick = function unlock() {
        action.style.display = "none";
        unlock_icon.style.display = "none";
        lock_icon.style.display = "block";
    };


    changecolor_icon.onclick = function changecolors() {
        let colors = ["yellow", "blue", "black", "red"];
        let cc = ""
        box.style.borderColor = cc + colors[count];
        changecolor_icon.style.color = cc + colors[count];
        count++
    }


    edit_icon.onclick = function editTaskName() {
        if (taskname.contentEditable != "true") {
            taskname.contentEditable = "true"
            edit_icon.style.color = "green"
        }
        else {
            taskname.contentEditable = "false";
            edit_icon.style.color = "white";
        }
    }



    delete_icon.onclick = function remove() {
        maincontainer.removeChild(box)
        totalbox--;
        countbox.textContent = totalbox;
        if(totalbox==0){
        }
    }

    check1.onclick = function showchecked() {
        check1.style.color = "green";
        addBox.style.display = "block";
        maincontainer.style.display="none";
    }
}

function show() {
    main.style.display = "block";
    maincontainer.style.opacity = ".3";
}

function closing() {
    if (main.style.display = "block") {
        main.style.display = "none";
        maincontainer.style.opacity = "1";
    }
}
