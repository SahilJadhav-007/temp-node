// Os Module 

const os = require('os') // This line makes us available all os related attributes

 const user = os.userInfo() // one of the os attribute to display userinfo
 console.log(user)


console.log(`The System Uptime is ${os.uptime()} seconds`)

const currentOS = {
    name: os.type(),
    release: os.release(),
    totalMem: os.totalmem(),
    freeMem: os.freemem(),
}

console.log(currentOS)

