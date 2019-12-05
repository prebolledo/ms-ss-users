import server from './server'
import users from './users'

server((app) => {
   
    app.get('/', (req,res,next) => {
        res.status(200).json(users.all())
    })

    app.delete('/:id', (req,res,next) => {
        res.status(200).json(users.remove(req.params.id))
    })

    app.post('/', (req,res,next) => {
        const user = req.body
        const id = users.add(user)
        res.status(200).json({
            id
        })
    })

})