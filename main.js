var todos = [
    
];
todos = localService.getTodos();

document.getElementById('tbox').onkeypress = textEnter;
function textEnter(event) {
    if (event.which == 13) {
        var inputtext = document.getElementById('tbox').value;
        myAdd(inputtext);
    }

}

for (var i = 0; i < todos.length; i++) {
    myAdd(todos[i].name, todos[i].selected, true);
}



function myAdd(inputtext, isSelected, preventAddElementArray) {



    var p = document.createElement('p');
    p.id = 'pid';


    var ckbox = document.createElement('input');
    ckbox.type = 'checkbox';
    ckbox.id = 'ckid';
    ckbox.name = 'ckname';
    ckbox.onchange = textStrike;
    ckbox.checked = isSelected;

    function textStrike() {
        if (ckbox.checked == true) {
            sptext.innerHTML = "<strike>" + inputtext + "</strike>";
        }
        else {
            sptext.innerHTML = inputtext;
        }
        localService.updateTodo();
    }



    p.appendChild(ckbox);

    var sptext = document.createElement('span');
    sptext.id = 'spid';
    sptext.textContent = inputtext;

    p.appendChild(sptext);

    var btn = document.createElement('button');
    btn.id = 'btnid';

    btn.name = 'btnname';
    btn.textContent = 'remove';
    btn.onclick = removeElement;

    p.appendChild(btn);

    document.getElementById('demo').appendChild(p);

    if (ckbox.checked == true) {
        textStrike();
    }

    function removeElement() {
        //var element = document.getElementById("pid");
        //element.parentElement.removeChild(p);
        this.parentElement.style.display = 'none';
        //this.parentElement.style.visibility = 'hidden';
        localService.deleteTodo();
    }

    if (!preventAddElementArray) {
        localService.createTodo({ name: inputtext, selected: false });
    }
    console.log(todos);

}