module.exports = function reverse (n) {
   let str = n + ""
            let arrRev = str.split('')
            arrRev.reverse()

            let newStr = arrRev.join("")
            newStr = parseInt(newStr)


          return newStr
}
