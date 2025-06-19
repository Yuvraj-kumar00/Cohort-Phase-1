const userInput = document.querySelector('#input');
const addBtn = document.querySelector('#addBtn');
const listContainer = document.querySelector('#list-container');
const totalTask = document.querySelector('#total-task');
const completedTask = document.querySelector('#completed-task');
const emptyText = document.querySelector('#empty-text');

let count = 0;
let paragraph;

addBtn.addEventListener('click', function () {
    if (userInput.value === "") {
        alert("Please write first your todo list...");

    } else {
       if (addBtn.innerText === 'Add') {
            creatingListItems();
            showTotalItem();
            toggleEmptyText();
 
            userInput.value = "";
            userInput.focus()

       } else if (addBtn.innerText === 'Update') {
            paragraph.innerText = userInput.value;
            userInput.value = "";
            userInput.focus();
            addBtn.innerText = 'Add';
       }
    }
});

function creatingListItems() {
    const li = document.createElement('li');
    li.classList.add('list-item');

    const input = document.createElement('input');
    input.type = 'checkbox';
    input.classList.add('checkbox');
    li.appendChild(input)
    input.addEventListener('click', function () {
        taskCompleted(input, para);
        showAllCompletedItem(input);
    });

    const para = document.createElement('p');
    para.classList.add('list-content');
    para.innerText = userInput.value;
    li.appendChild(para);

    const editBtn = document.createElement('button');
    editBtn.classList.add('editBtn');
    editBtn.innerText = 'Edit';
    li.appendChild(editBtn);
    editBtn.addEventListener('click', function () {
        editItems(para,input)
    })

    const deleteBtn = document.createElement('button');
    deleteBtn.classList.add('deleteBtn');
    deleteBtn.innerText = 'Delete';
    li.appendChild(deleteBtn);
    deleteBtn.addEventListener('click', function () {
        deleteItems(li);
        if (input.checked === true) {
            count -= 1;
            if (count >= 0) {
                completedTask.innerText = `Completed: ${count}`
            }
            
        }
    });

    listContainer.appendChild(li);
};

function deleteItems(listItem) {
    listItem.remove();
    showTotalItem();
    toggleEmptyText();
};

function taskCompleted(checkbox, listContent) {
    if (checkbox.checked === true) {
        listContent.classList.add('completed');
    
    } else {
        listContent.classList.remove('completed');
    }
};

function showTotalItem() {
    totalTask.innerText = `Total task: ${listContainer.children.length}`;
};

function showAllCompletedItem(checkbox) {
     if (checkbox.checked === true) {
        count += 1;
        completedTask.innerText = `Completed: ${count}`
    
    } else {
        count -= 1;
        if (count >= 0) {
            completedTask.innerText = `Completed: ${count}`
        }
    }
};

function toggleEmptyText() {
    if (listContainer.children.length > 0) {
        emptyText.classList.add('hidden');
    } else {
        emptyText.classList.remove('hidden');
    }
};

function editItems(para, checkbox) {
    if (checkbox.checked === true) {
        return
    } else if (checkbox.checked === false) {
        userInput.value = para.innerText;
        para.innerText = "";
        userInput.focus();
        addBtn.innerText = 'Update';
        paragraph = para;
    }
};