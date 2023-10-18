
const { readFile, writeFile, read, write } = require('fs')  // this function gives us access to create and read files

// const first = readFileSync('./content/first.txt','utf8') // this reads the content residing inside the file
// console.log(first)

// const second = readFileSync('./content/second.txt','utf8')



// writeFile('./content/result.txt',`Here what's written in the previous file : ${first}, ${second} `,
//             {flag:'a'}) // this allows us to create write and overwrite and append the contents in file


//Syncronous method



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
