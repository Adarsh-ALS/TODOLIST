function addtolist()
{

    var taskname = document.getElementById('taskname').value
    var tododiv = document.getElementById('mytodo')

        var newtododitem = document.createElement('div')
        var todoname = document.createElement('li')
    
        todoname.innerHTML = taskname
        var deletebtn = document.createElement('i')
        deletebtn.classList.add('fa-regular')
        deletebtn.classList.add('fa-trash-can')
    
        newtododitem.appendChild(todoname)
        newtododitem.appendChild(deletebtn)
        tododiv.appendChild(newtododitem)  
   
}

var tododiv = document.getElementById('mytodo')
tododiv.addEventListener('click', deleteitem)

function deleteitem(e)
{
    const element = e.target

    if(element.classList[0] = 'fa-regular')
    {
        element.parentElement.remove()
    }
}