const nameField = document.querySelector('#nameField');
const ul = document.querySelector('#nameList');

nameField.addEventListener('click', function(){
    // if(event.keyCode === 13){
    //     let name = event.target.value;
    //     ul.appendChile(createLi(name));
    //     event.target.value = "";
    // }

    alert('clicked');
});

// function createLi(name){
//     let li = document.createElement('li');
//     li.className = 'list-group-item';
//     li.innerHTML = name;


//     return li;
// }