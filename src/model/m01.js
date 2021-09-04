export function foo(data){
    let y = [];
    let z = [];
    
    for(let i = 0; i < data.length; i++){
    
        if(y.indexOf(JSON.stringify(data[i])) == -1){
            y.push(JSON.stringify(data[i]));
        }
    }

    y.forEach(i => {
        z.push(JSON.parse(i));
    })

    return z;
}

export function fool(){

}