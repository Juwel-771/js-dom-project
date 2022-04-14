window.onload = function (){
    const taskField = document.querySelector('#taskField');
    const addTaskBtn = document.querySelector('#addTaskBtn');
    const allTasksParent = document.querySelector('#allTasks');

    taskField.addEventListener('keypress', function(event){
        if(event.keyCode === 13){
            let eventValue = event.target.value;
            createNewTask(allTasksParent, event.target.value);
            this.value = ''
        }
    });
}

function createNewTask(parent, task){
    let col = create({'class' : 'col-sm-3'});
    let singleTask = create({'class':'single-task d-flex'});
    let singleTaskP = create('p');
    singleTaskP.innerHTML = task;
    
    singleTask.appendChild(singleTaskP);

    let span = create('span',{'class':'ml-auto'});
    span.innerHTML = `<i class = "fas fa-times-circle"></i>`
    span.addEventListener('click', function(){
        span.style.cursor= 'click';
        parent.removeChild(col);
    });
    singleTask.appendChild(span);

    let taskController = createTaskController(singleTask);
    taskController.style.visibility = 'hidden';
    singleTask.appendChild(taskController);

    singleTask.onmouseenter= function() {
        taskController.style.visibility = 'visible';
    };

    singleTask.onmouseleave= function() {
        taskController.style.visibility = 'hidden';
    };

    col.appendChild(singleTask);
    parent.appendChild(col);

    function createTaskController(parent){
        let controlPanel = create({'class': 'task-control-panel d-flex align-items-center'});
        
        let colorPlate = createColorPlate(parent);
        let fontTypes = createFontPlate(parent)
        controlPanel.appendChild(colorPlate);
        controlPanel.appendChild(fontTypes);

        let editBtn = createEditBtn(parent);
        controlPanel.appendChild(editBtn);

        return controlPanel;
    }

    function createEditBtn(parent){
        let span = create('span',{'class':'ml-auto mr-2'})
        span.innerHTML = `<i class="fas fa-edit"></i>`
        span.style.color = '#ddd';

        span.addEventListener('click', function(){
            let p = parent.querySelector('p');
            let textArea = create('textarea',{'class':'inner-textarea'});
            textArea.style.width = parent.offsetWidth + 'px';
            textArea.style.height = parent.offsetHeight + 'px';
            textArea.innerHTML = p.innerHTML;

            textArea.addEventListener('keypress', function(event){
                if(event.keyCode==13){

                    if(this.value){
                        p.innerHTML = this.value;
                        parent.removeChild(this);
                    }else{
                        alert("Please Enter Some Value");
                    }
                }
            });

            parent.appendChild(textArea);
        });

        return span;
    }

    // function createFontPlate(parent){

    // }

    function createColorPlate(parent){
        const colors = ['palegreen','skyblue','powderblue','salmon','grey','red','aqua'];
        let colorDiv = create({'class': 'd-flex'});

        colors.forEach(color=> {
            let div = create({'class':'color-circle ml-1'});
            div.style.background = color;
            div.addEventListener('click', function(){
                parent.style.background = color;
            }); 
            colorDiv.appendChild(div);
        });

        return colorDiv;
    }
}
// start from control panel
window.create = function () {

    if (arguments.length === 0) {
        return document.createElement('div');
    }

    if (arguments.length === 1 && typeof arguments[0] != 'object') {
        return document.createElement(arguments[0]);
    }

    var tag = arguments[0];
    var attr = arguments[1] || arguments[0];

    if (arguments.length === 1 && typeof arguments[0] === 'object') {
        tag = 'div';
    }

    var element = document.createElement(tag);

    for (var i in attr) {
        element.setAttribute(i, attr[i]);
    }

    return element;
}
