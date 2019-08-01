const express = require('express')
const next = require('next')
const routes = require('./routes')
const favicon = require('serve-favicon')
const path = require('path')

const port = parseInt(process.env.PORT, 10) || 4000
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = routes.getRequestHandler(app)

app.prepare().then(() => {
    const server = express()
    server.use(favicon(path.join(__dirname, 'static/images', 'favicon.ico')))

    // server.get('/portofolio/:id', (req, res) => {
    //     console.log('------PORTOFOLIO-----')
    //     // console.log('id', req.params.id)
    //     const actualPage = '/portofolio'
    //     const queryParams = { id: req.params.id }
    //     return app.render(req, res, actualPage, queryParams)
    // })
    // custom dynamic routes must be declare about asterix
    server.get('*', (req, res) => { // * asterix wildcard
        console.log('------ALL REQUEST-----')
        return handle(req, res)
    })

    server.use(handle).listen(port, err => {
        if (err) throw err
        console.log(`> Ready on http://localhost:${port}`)
    })
})
.catch((ex) => {
    console.log(ex.stack)
    process.exit(1)
})