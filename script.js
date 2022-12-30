const inputtdl = document.querySelector('.textarea')
//-->>> using the query, selector, we are thus, capable, of getting the target, area, by thus mentionning, the required tag or the class, name inside the paranthesis,!!
const buttontdl = document.querySelector('.buttoninput')
const listtdl = document.querySelector('.todolist')

function clickButton(e) {
    e.preventDefault()
    //--->>> when clicking, rhe button, we are inside calling the function  the addTodo()-->>.
    addTodo()
}


function addTodo() {
    const itemall = document.createElement('div')
    //-->> so, for the div element, which we created, we are furthur, using the template as the classList, and then adding the item
    itemall.classList.add('itemall')

    const item = document.createElement('p')
    item.classList.add('item')
    item.innerText = inputtdl.value
    itemall.appendChild(item)

    if (inputtdl.value === '') return

    const checkbutton = document.createElement("button")
    checkbutton.innerHTML = '<i class="fa-solid fa-check"></i>'
    checkbutton.classList.add("check-button")
    itemall.appendChild(checkbutton)

    const trashbutton = document.createElement("button")
    trashbutton.innerHTML = '<i class="fa-solid fa-trash"></i>'
    trashbutton.classList.add("trash-button")
    itemall.appendChild(trashbutton)

    listtdl.appendChild(itemall)
    inputtdl.value = ''
}


function okdel(e) {
    const item = e.target


    if (item.classList[0] === 'check-button') {
        const todolist = item.parentElement
        todolist.classList.toggle('checklist')
    }


    if (item.classList[0] === 'trash-button') {
        //-->>> incase, if he clicked, the trash button, we thus using the method to remove it from that !!
        //--->>> 
        const todolist = item.parentElement
        todolist.remove()
    }
}

buttontdl.addEventListener('click', clickButton)
listtdl.addEventListener('click', okdel)