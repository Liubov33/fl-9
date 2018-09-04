let rootNode = document.getElementById('root'),
    maxItems = 10,
    firstChild = 0,
    input = document.getElementsByName('addNewAction')[firstChild],
    button = document.getElementsByTagName('button')[firstChild],
    form = document.getElementsByTagName('form')[firstChild],
    notification = document.getElementById('notification'),
    ul = document.getElementById('list'),
    dragAndDrop;

input.addEventListener('input', isEmpty);
form.addEventListener('submit', addItems);

function isEmpty(e) {
    if (e.value !== '') {
        button.disabled = false;
    }
}

function addItems(e) {
    let newItem = input.value,
        li = document.createElement('li'),
        span = document.createElement('span'),
        checkbox = document.createElement('i'),
        deleteIcon = document.createElement('button');

    li.setAttribute('draggable', 'true');
    checkbox.className = 'material-icons';
    checkbox.innerHTML = 'check_box_outline_blank';
    deleteIcon.innerHTML = '<i class="material-icons delete">delete</i>';
    span.appendChild(checkbox);
    span.appendChild(document.createTextNode(newItem));
    li.appendChild(span);
    li.appendChild(deleteIcon);
    ul.appendChild(li);
    input.value = '';
    button.disabled = true;
    checkbox.addEventListener('click', toggleCheckbox);
    li.addEventListener('click', deleteItem);

    function toggleCheckbox() {
        checkbox.innerText = 'check_box';
    }

    function deleteItem(e) {
        if (e.target.classList.contains('delete')) {
            ul.removeChild(li);
            if (input.disabled) {
                input.disabled = false;
                notification.style.display = 'none';
            }
        }
    }
    if (ul.children.length === maxItems) {
        button.disabled = true;
        input.setAttribute('disabled', 'true');
        notification.style.display = 'block';
    }

    e.preventDefault();
}

ul.addEventListener('dragstart', dragStart);

function dragStart(e) {
    dragAndDrop = e.target;
    setTimeout(function() {
        dragAndDrop.className = 'dragAndDrop';
    });
    ul.addEventListener('dragover', dragOver);
    ul.addEventListener('dragend', dragEnd);
}

function dragEnd() {
    dragAndDrop.className = 'item';
}

function dragOver(e) {
    e.dataTransfer.dropEffect = 'move';
    if (e.target && e.target !== dragAndDrop && e.target.nodeName === 'LI') {
        ul.insertBefore(dragAndDrop, e.target.nextSibling || e.target);
    }
    e.preventDefault();
}