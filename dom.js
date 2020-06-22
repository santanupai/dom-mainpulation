//changing the document title
document.title = "DOM Mainpulation"
//changing the body color
document.body.style.backgroundColor = "silver";
document.body.style.boxSizing = "border-box";

//styling the universal operator
// var universal = document.querySelectorAll('*');
// universal.style.margin = "0px !important";
// universal.style.padding = "0px !important";
// universal.style.boxSizing = "border-box";

//styling the header
var h = document.querySelector('header')
h.style.backgroundColor = "#2f2f2f";
h.style.height = "60px";
h.style.display = "flex";
h.style.flexDirection = "row";
h.style.justifyContent = "space-between";

//creating the logo
var logo = document.querySelector(".mylogo");
logo.textContent = "DOM Mainpulations"
logo.style.color = "silver";
logo.style.fontSize = "30px";

var mybtn = document.querySelector('#mybtn').addEventListener("click", showHidePopup);

//show popup
function showHidePopup() {
    var modal = document.querySelector(".mymodal");
    modal.classList.toggle("showhidemodal");
}

//close popup
var btnclose = document.querySelector("#close").addEventListener("click", fnCloseModal);

function fnCloseModal() {
    var modal = document.querySelector(".mymodal");
    modal.classList.toggle("showhidemodal");
}

//form submit event
// var form = document.getElementById("addForm");
// form.addEventListener("submit", addItems);

var addbtn = document.getElementById('btnadd');
addbtn.addEventListener("click" ,addItems);

//grab ul
var itemlist = document.getElementById("ulitem");
itemlist.addEventListener("click", removeItem);

var card = document.querySelector('#mycard');
card.style.display = "none";

//filter
var filter = document.getElementById("filter");
filter.addEventListener("keyup", filterlist);


//card.classList.toggle

function addItems(e) {
    e.preventDefault();

    //grab textbox value
    var newitem = document.querySelector("#item").value;
    if (newitem == "" || newitem == null) {
        alert("Please enter items here");
        
    }
    else {

        card.style.display = "block";

        //create li
        var li = document.createElement("li");

        //add class to li
        li.className = "item-list";

        //add text to li from the txtbox
        li.appendChild(document.createTextNode(newitem));

        //create delete button
        var deletebtn = document.createElement('button');

        //assign a class to button
        deletebtn.className = "delete-btn";

        //create textnode for button
        deletebtn.appendChild(document.createTextNode("X"));

        //append button to li
        li.appendChild(deletebtn);

        //append li to itemlist (ul)
        itemlist.appendChild(li);
    }
}

//delete li by clicking delete button
function removeItem(e) {
    if (e.target.classList.contains('delete-btn')) {
        // var litext = e.target.classList.contains('item-list');
        //var litext = document.getElementsByClassName('item-list').innerText;
        // var txt = litext.innerHTML;
        if (confirm('Are you sure you want delete')) {
            
            var btn = document.querySelector('delete-btn');
            btn = e.target.parentElement;
            itemlist.removeChild(btn);
        }
    }
}

function filterlist(e){
    var filtertext = e.target.value.toLowerCase();
    var items = itemlist.getElementsByTagName('li');
    Array.from(items).forEach(function(item){
        var itename = item.firstChild.textContent
        if(itename.toLocaleLowerCase().indexOf(filtertext) !=-1){
            item.style.display = 'block';
        }
        else{
            item.style.display = 'none'
        }
    })    
}

