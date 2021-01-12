//Variable declaration, So these will be available for event handlers
var form;
var itemList;
var filter;

//Initailization on window load
window.onload = (() => {
form = document.getElementById('addForm');
itemList = document.getElementById('items');
filter = document.getElementById('filter');

//Ataching events:
// Form submit event
form.addEventListener('submit', addItem);
// Delete event
itemList.addEventListener('click', removeItem);
// Filter event
filter.addEventListener('keyup', filterItems);
});

// Add item
function addItem(e){
  //This is a sublit event of a form tag. By default behavior it will try to submit form on server. 
  //So, to prevent it to unnecessarily submitting on server, we are preventig its default behaviour.
  e.preventDefault();

  // Get input value
  var newItem = document.getElementById('item').value;

  // Create new li element
  var li = document.createElement('li');
  // Add class
  li.className = 'list-group-item';
  // Add text node with input value
  li.appendChild(document.createTextNode(newItem));

  // Create del button element
  var deleteBtn = document.createElement('button');

  // Add classes to del button
  deleteBtn.className = 'btn btn-danger btn-sm float-right delete';

  //Add name attribute to del button
  deleteBtn.name = 'deleteBtn';

  // Append text node
  deleteBtn.appendChild(document.createTextNode('X'));

  // Append button to li
  li.appendChild(deleteBtn);

  // Append li to list
  itemList.appendChild(li);
}

// Remove item
function removeItem(e){
  // //One way to check what kind of this button for confimation before delete via applied classes on that button
  // if(e.target.classList.contains('delete')){
  //   if(confirm('Are You Sure?')){
  //     var li = e.target.parentElement;
  //     console.log(li);
  //     itemList.removeChild(li);
  //   }
  // }

  //Second way to delete with the help of name attribute of button
  console.log(e.target.name);
  if(e.target.name === 'deleteBtn'){
      if(confirm('Are You Sure?')){
        var li = e.target.parentElement;
        itemList.removeChild(li);
      }
    }
}

// Filter Items
function filterItems(e){
  // convert text to lowercase
  var text = e.target.value.toLowerCase();
  // Get all lis
  //In items we got HTMLCollection of all lis. we need to convert it to an array to iterate over it.
  var items = itemList.getElementsByTagName('li');
  console.log(items); 
  console.log(Array.from(items)); 

  // Convert to an array
  Array.from(items).forEach(function(item){
    var itemName = item.firstChild.textContent;
    if(itemName.toLowerCase().indexOf(text) != -1){
      item.style.display = 'block';
    } else {
      item.style.display = 'none';
    }
  });
}