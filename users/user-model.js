const db = require('../data/db-config')

module.exports = {
    getAll,
     add,
     getById,
     update,
     remove,
     getUserPost
} //objects we can use for the router
//we will define these functions in this file
//they will support the CRUD OPERATIONS
//the most important/eye-catching pieces of info need to be above the fold

function getAll(){
return db('users')
//this returns the promise that it is going to the db to get all users

}

function add(user){
return db('users')
.insert(user, 'id')
.then(ids => {
    const id = ids[0]
    //all queries return an array, even if it only has 1 element
    //.first() will extract the first element from the array & return it
    return getById(id)
})
}

function getById(id){
    return db("users").where({ id })
}

function update(id, changes){
    return db("users").where({ id }).update(changes)
}

function remove(id){
    return   db("users").where({ id }).del()
}

function getUserPost(id){
    return db('posts').where('user_id', id)
}