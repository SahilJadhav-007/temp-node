readFile('./content/first.txt', 'utf8', (err, data) => {
    if (err) {
        console.error(err);
        return;
    }
    const first = data;
    readFile('./content/second.txt', 'utf8', (err, data) => {
        if (err) {
            console.log(err)
            return
        }
        const second = data;
        writeFile('./content/result-async.txt', `Here is the result : ${first}, ${second}`,(err,data) =>{
            if(err){
                console.log(err)
                return
            }
            console.log(data)
        })
    })
});
