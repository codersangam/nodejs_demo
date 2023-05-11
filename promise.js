let a = 20;
let b = 0;

let waitingData = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(30);
    }, 5000)
});

newData = waitingData.then((res) => {
    console.warn(a + res);
})
