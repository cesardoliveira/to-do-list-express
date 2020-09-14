const express = require('express')
const path = require('path')

const rootRouter = require('./src/routes/index')
const checklistRouter = require('./src/routes/checklist')
const taskRouter = require('./src/routes/task')
const methodOverride = require('method-override')
require('./config/database')

const app = express();
// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true })) // Middleware para tratar requisicoes via form
app.use(methodOverride('_method', { methods: ['POST', 'GET']}))

app.use(express.static(path.join(__dirname, 'public')))

app.set('views', path.join(__dirname, 'src/views'))
app.set('view engine', 'ejs')

app.use('/', rootRouter)
app.use('/checklists', checklistRouter);
app.use('/checklists', taskRouter.checklistDepedent)

app.listen(3000, () => {
    console.log('Servidor foi iniciado. ')
})