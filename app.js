const addForm = document.querySelector('.add');
const unOrderedList = document.querySelector('.todos');
const search = document.querySelector('.search input');

// generate template
const generateTemplate = todo => {
    const html = `
        <li class="list-group-item d-flex justify-content-between align-items-center">
            <span> ${todo}</span>
            <i class="far fa-trash-alt delete"></i>
        </li>
    `;
    unOrderedList.innerHTML += html;
}

addForm.addEventListener('submit', e => {
    e.preventDefault();
    const todo = addForm.addIn.value.trim();
    if(todo.length){
        generateTemplate(todo);
        addForm.reset();
    }
});

// delete todos
unOrderedList.addEventListener('click', e => {
    if(e.target.classList.contains('delete')){
        e.target.parentElement.remove();
    }
});

// filter todos
const filterTodos = (term) => {
    Array.from(unOrderedList.children)
        .filter(todo => !todo.textContent.toLowerCase().includes(term))
        .forEach(todo => todo.classList.add('filtered'));
    Array.from(unOrderedList.children)
        .filter(todo => todo.textContent.toLowerCase().includes(term))
        .forEach(todo => todo.classList.remove('filtered'));
};
search.addEventListener('keyup', () => {
    const term = search.value.trim().toLowerCase(); 
    filterTodos(term);
});