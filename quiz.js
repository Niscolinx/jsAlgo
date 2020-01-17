//Storing it with arrays
(() => {
    let user = ['user1', 'user2']
    let number = {
        'a': 1,
        'b': 2,
        'c': 3,
        'd': 4
    }
    let arr = []
    let count = 0
    for (let key in number) {

        arr.push(`The user is ${user[count]} chose ${number[key]}`)
        count++
        if (count === user.length) {
            count = 0
        }
        // for(let i = 0; i < count; i++){
        //     count++
        // }
    }

    console.table(arr)
})()

//Storing it with objects
let user = ['user1', 'user2']
let number = {
    'a': 1,
    'b': 2,
    'c': 3,
    'd': 4
}

let obj = {}
let count = 0
for (let key in number) {

    if (obj[user[count]]) {
        obj[user[count]] = obj[user[count]].concat([number[key]])
    }
    else {
        obj[user[count]] = [number[key]]
    }
    count++
    if (count === user.length) {
        count = 0
    }

}

console.table(obj)
