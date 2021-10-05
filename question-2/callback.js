// prendi bobo - 101187580 
console.log("")
console.log("Question #2: ")
console.log("")

/*
const delayedSuccess = () => {
    setTimeout(() => {
        let success = {'message': 'delayed success! '}
        console.log(success);
    }, 500)
}

const delayedException = () => {
    setTimeout(() => {
        try {
            throw new Error("error: delayed exception! ")
          }  catch (e) {
            console.error(e)
        }
    }, 500)
}


delayedSuccess()
delayedException()
*/


resolvedPromise = () => {
    setTimeout(() => {
       
        let prom1 = new Promise(function(resolve,reject) {
            console.log("")
            resolve("this message is timed and is from resolve promise! ")
        })
        
        prom1.then(function(box){
            console.log(box)
        })

    }, 500)
}
console.log("-----")


rejectedPromise = () => {
    setTimeout(() => {
       
        let prom2 = new Promise(function(resolve,reject) {
            let boxs = 5
            if (boxs > 10)

                resolve("this message is timed and is from resolve promise! ")
            else
                reject("this message is timed and is from reject promise! ")

        })
        
        prom2.then(success => {
            console.log(success)
        } , error => console.log(error) )
   
    }, 500)
}

//resolvedPromise()
rejectedPromise()