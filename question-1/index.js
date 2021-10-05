// prendi bobo - 101187580 
console.log("")
console.log("Question #1: ")
console.log("")

let prom = new Promise(function(resolve, reject) {
    resolve("this is my promise. do you promise? from promise!")
})
    
prom.then(function(magic){
    console.log("")
    console.log(magic)
    console.log("")
},  function(error){
    console.log(error)
})

const mixedArray = ['PIZZA',10,true,25,false,'WINGS']

lowerCaseWords = (mixedArray) => {
    let result = mixedArray.filter(mixedArray => mixedArray.length > 0);
    let box = [] 
    box = result
    const finalbox = box.map(word => word.toLowerCase());
    console.log(finalbox)
}

lowerCaseWords(mixedArray);

