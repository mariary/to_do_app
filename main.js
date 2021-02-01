const add_btn = document.querySelector('.app__content_add_btn');

const header = document.querySelector('.app__header');

let task = document.querySelector('.app__content_add_input');
let form = document.querySelector('form');

let content = document.querySelector('.app__content_list');
let del_btn = document.querySelectorAll('.app__content_list_item_action_delete');
let checkbox = document.querySelectorAll('.app__content_list_item_action_checkbox');

add_btn.addEventListener('submit', (evt) => {
    evt.preventDefault();
    AddPost(evt);
    console.log(evt);
});

form.addEventListener('submit', (evt) => {
    evt.preventDefault()
    AddPost(evt);
});

header.addEventListener('click', () => {
    content.innerHTML = '';
})

function AddPost(evt) {
    let text = evt.target.querySelector('.app__content_add_input').value;
    if (text.length > 0) {
        let newHTML = ` <div class="app__content_list_item">
                        <p class="app__content_list_item_text">${text}</p>
                        <span class="app__content_list_item_action">
                            <input type="checkbox" class="app__content_list_item_action_checkbox">
                            <button class="app__content_list_item_action_delete"></button>
                        </span>
                    </div>`;
        content.innerHTML += newHTML;
        task.value = ''
    } else {
        alert('add task')
    }

    del_btn = document.querySelectorAll('.app__content_list_item_action_delete');
    checkbox = document.querySelectorAll('.app__content_list_item_action_checkbox');

    AddDelBtn();
    AddCheckbox();
}

function AddDelBtn() {
    for (let i = 0; i < del_btn.length; i++) {
        del_btn[i].addEventListener('click', (evt) => {
            DeletePost(i);
        });
    }
}

function AddCheckbox() {
    for (let j = 0; j < checkbox.length; j++) {
        checkbox[j].addEventListener('click', (evt) => {
            Checked(j);
        });

    }
}

function DeletePost(n) {
    document.querySelectorAll('.app__content_list_item')[n].style.display = 'none';
}

function Checked(n) {
    document.querySelectorAll('.app__content_list_item_text')[n].classList.toggle('checked');
    if (checkbox[n].hasAttribute('checked')) {
        checkbox[n].removeAttribute('checked');
    }
    else {
        checkbox[n].setAttribute('checked','true');
    }
}

AddDelBtn();
AddCheckbox();