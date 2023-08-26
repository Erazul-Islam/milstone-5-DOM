function upperName(name) {
    console.log(name.toUpperCase());    
}

function fullName(first,callback){
    const fullName = first + "Islam";
    callback(fullName)
}

fullName('Erazul',upperName)