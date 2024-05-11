const promise = new Promise((resolve,reject) => {
    var a = true

    if(a){
        resolve()
    } else {
        reject()
    }
})
fetch('url')
.then((response)=> response.json())
.catch(() => console.log('error'))