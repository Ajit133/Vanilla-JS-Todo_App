let form = document.querySelector('form');
let itemList = document.getElementById('items');
let newItem = document.querySelector('#item');
let filter = document.getElementById('filter')

filter.addEventListener('keyup',filterItems)
form.addEventListener('submit',addItem);
itemList.addEventListener('click',removeItem);

function addItem(e){
    e.preventDefault();
    let li = document.createElement('li');
    li.className = 'list-group-item';
    li.appendChild(document.createTextNode(newItem.value));
    itemList.appendChild(li);
    let deleteBtn = document.createElement('button')
    deleteBtn.innerText = 'X'
    deleteBtn.className = 'btn btn-danger btn-sm float-right delete'
    li.appendChild(deleteBtn)
    newItem.value = ' '

}

function removeItem(e){
    if(e.target.classList.contains('delete')){
        if(confirm('Are You Sure?')){
            let li = e.target.parentElement;
            itemList.removeChild(li)
        }
    }
}

function filterItems(e){ 
    let text = e.target.value.toLowerCase();
    let items = itemList.getElementsByTagName('li');
    Array.from(items).forEach((item)=>{
         let itemName = item.firstChild.textContent;
        //  console.log(itemName)
         if(itemName.toLowerCase().indexOf(text) != -1){
            item.style.display = 'block';
         }else{
            item.style.display = 'none';
         }
        
    })
}