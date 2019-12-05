let users = []

users.push({
    id: users.length + 1,
    name: 'Pablo'
})

users.push({
    id: users.length + 1,
    name: 'Juamn'
})

users.push({
    id: users.length + 1,
    name: 'Ricardo'
})

users.push({
    id: users.length + 1,
    name: 'Cristian'
})

const all = () => {
    return users
}

const add = (user) => {
    user.id = users.length + 1
    users.push(user)
    return user.id
}

const remove = (id) =>{
    const usersAux = users.filter((item, index) => {
        return item.id != id
    })
    users = usersAux
    return true
}

export default {
    all,
    add,
    remove,
}