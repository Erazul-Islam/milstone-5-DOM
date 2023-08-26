let total = 0;
function handleClick(target){
    const selectedItem = document.getElementById('snow-white')
    const itemName = target.parentNode.parentNode.childNodes[1].innerText;
    // const practice = target.parentNode.parentNode.childNodes[3];
    // console.log(practice);
    const li = document.createElement('li');
    li.innerText = itemName;
    selectedItem.appendChild(li);
    // console.log(selectedItem)
    
    const price = target.parentNode.parentNode.childNodes[5].innerText.split(' ')[2];

    total = parseInt(total)+parseInt(price);
    
    document.getElementById('total').innerText = total;
} 
{/* <div class="snow-white" id="snow-white"></div>  */}