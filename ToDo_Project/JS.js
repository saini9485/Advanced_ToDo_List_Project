var create=document.querySelector("creat") 
var main=document.getElementById("popup")
 var actionicon=document.getElementById("actionicon") 
var unlocking=document.getElementById("unlock")
var locking=document.getElementById("lock")
 var box=document.getElementById("box")
var changecoloring=document.getElementById("changecolor") 
var changecolor_icon=document.getElementById("changecolor") 
var taskname=document.getElementById("taskname")
var removing=document.getElementById("delete")

var inputvalue=document.getElementById("inputvalue")    
// var check2 = document.getElementById("check1") 
// var check1 = document.getElementById("check")    
// var red1 = document.getElementById("red1")     
// var blue1 = document.getElementById("blue1")
// var yellow1 = document.getElementById("yellow1") 
// var black1 = document.getElementById("black1")
// var boxn = document.getElementById("box") 
// var done= document.getElementById("done")
// var all = document.querySelector("body")
// var countbox = document.querySelector("#countbox")
// var addBox = document.getElementById("verifybox")
// var tablehead = document.getElementById("tablehead")

// var inputarea = document.getElementById("inputarea")
// var mainpop = document.getElementById("popbox")
// var maincontainer = document.getElementById("checkbox")



//  var totalbox=0;



// function doning() {   
    var count = 0;

//     let box = document.createElement("div");
//     box.setAttribute("id", "box");

    

//    red1.onclick = function redborder(){
//         box.style.borderTop="20px solid red";
//     }
//    yellow1.onclick = function yellowborder(){
//         box.style.borderTop="20px solid yellow";
//     }
//    blue1.onclick = function blueborder(){
//         box.style.borderTop="20px solid blue";
//     }
//    black1.onclick = function blackborder(){
//         box.style.borderTop="20px solid black";
//     }


//     let taskname = document.createElement("button");
//     taskname.setAttribute("id", "taskname");
//     let inputvalue = document.getElementById("inputvalue");
//     taskname.textContent = inputvalue;
//     box.append(taskname);


//     let icons = document.createElement("div");
//     icons.classList.add("icons");
//     box.append(icons);


//     let action = document.createElement("div"); 
//     action.setAttribute("id", "actionicon");
//     action.classList.add("actionicon")
//     action.style.display = "none";       
//     icons.append(action);

//     let check_icon = document.createElement("i");
//     check_icon.classList.add('fa', 'fa-check');
//     check_icon.setAttribute("id", "check2") 
//     action.append(check_icon);

//     let edit_icon = document.createElement("i");
//     edit_icon.classList.add("fa", "fa-pencil");
//     edit_icon.setAttribute("id", "edit")
//     action.append(edit_icon);

//     let delete_icon = document.createElement("i");
//     delete_icon.classList.add('fa', 'fa-trash-o');
//     delete_icon.setAttribute("id", "delete")
//     action.append(delete_icon);

//     let changecolor_icon = document.createElement("i");
//     changecolor_icon.classList.add('fa', 'fa-square');
//     changecolor_icon.setAttribute("id", "changecolors")
//     action.append(changecolor_icon);


//     let lock_icons = document.createElement("div");
//     lock_icons.classList.add("lock");
//     icons.append(lock_icons);

//     let lock_icon = document.createElement("i");
//     lock_icon.classList.add('fa', 'fa-lock');
//     lock_icon.setAttribute("id", "lock");
//     lock_icons.append(lock_icon);

//     let unlock_icon = document.createElement("i");
//     unlock_icon.classList.add('fa', 'fa-unlock');
//     unlock_icon.setAttribute("id", "unlock");
//     unlock_icon.style.display = "none"
//     lock_icons.append(unlock_icon);

//     maincontainer.append(box);



//     inputvalue.value = "";




//     // main.style.display = "none"
 







//     lock_icon.addEventListener("click", function lock() {
//         action.style.display = "block";
//         unlock_icon.style.display = "block";
//         lock_icon.style.display = "none";
//     });

//     unlock_icon.onclick = function unlock() {
//         action.style.display = "none";
//         unlock_icon.style.display = "none";
//         lock_icon.style.display = "block";
//     };


//     changecolor_icon.onclick = function changecolors() {
//         let colors = ["yellow", "blue", "black", "red"];
//         let cc = ""
//         box.style.borderColor = cc + colors[count];
//         changecolor_icon.style.color = cc + colors[count];
//         count++
//     }


//     edit_icon.onclick = function editTaskName() {  
//         if (taskname.contentEditable != "true") {
//             taskname.contentEditable = "true"
//             edit_icon.style.color = "green"
//         }
//         else {
//             taskname.contentEditable = "false";
//             edit_icon.style.color = "white";
//         }
//     }

//     delete_icon.onclick = function remove() {
//         maincontainer.removeChild(box)
//         totalbox--;
//         countbox.textCount = totalbox
//     }

//     check_icon.onclick = function checked() {
//         box.style.display = "none";
//         tablehead.append(box);
//         tablehead.classList.add("tableheadbox")
//     }


//     check1.onclick = function showchecked() {
//         check1.style.color = "green";
//         addbox.style.display = "block";
//         maincontainer.style.display ="none"

//     }

// totalbox++;
// countbox.textCount = totalbox
// }






function unlock(){
    actionicon.style.display="block";
    unlocking.style.display="block";
    locking.style.display="none";
}
function lock(){
    actionicon.style.display="none";
    unlocking.style.display="none";
    locking.style.display="block";
}

// function remove(){
//     actionicon.style.display="block";
//     removing.style.display="none";
  
// }
function changecolor(){
    let colors=["yellow","blue","black","red","green"];
    let color=""
    box.style.borderColor=color+colors[count];
    changecoloring.style.color=color+colors[count];
    console.log((colors[count]));
    count++
}

// }



// function doning(){
//    done.style.display ="none"
//     }

check1.onclick = function checked(){
    box.style.display = "none"
}

function show(){
    main.style.display="block"; 
}
function closing(){
if(main.style.display ="block"){
    main.style.display="none";
    //maincontainer.style.opacity = "1"
}  

}
// function showall(){
//     maincontainer.style.display = "flex"
//     addBox.style.display = "none"
// }