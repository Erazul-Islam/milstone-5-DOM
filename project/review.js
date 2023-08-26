document.querySelector('#submit-btn').addEventListener('click',function(){
    const textAreaElement = document.getElementById('text-area');
    const areaValue = textAreaElement.value;
    console.log(textAreaElement.value)

    const p = document.createElement("p");
    p.innerText = areaValue;

    const contaiener = document.querySelector('#review');
    contaiener.appendChild(p);
    document.getElementById('text-area').value = "";
})
 