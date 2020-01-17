let user = ['user1', 'user2']
let number = {
    'a': 1,
    'b': 2,
    'c': 3,
    'd': 4
}

let arr = []
let count = 0
for(let key in number ){

    arr.push(`The user is ${user[count]} chose ${number[key]}`)
    count++
    if(count === user.length){
        count = 0
    }
}

console.log(arr)