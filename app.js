const express = require('express')
const app = express();
const path = require('path');

app.set('view engine','ejs')

const index = path.resolve(__dirname, './index.ejs')
const services = path.resolve(__dirname, './services.ejs')
const contact = path.resolve(__dirname, './contact.ejs')

function todayProgram(req,res,next){
    const date=new Date()
    const dateOfTheWeek = ['lundi','mardi','jeudi']
    const todayDate = date.getDay()
    const hourOfTheDay = date.getHours()

    if (dateOfTheWeek[todayDate]==='monday'||'tuesday'||'wednesday'){
        if(hourOfTheDay<8||hourOfTheDay>17)
        res.end('what are you doing')
    }
    next()
}

app.use(todayProgram)

app.route('/').get( (req,res) => {
   
    res.render('index')

})
app.route('/services').get((req,res) => {
    res.render('services')
})
app.route('/contact').get((req,res) => {
    res.render('contact')
})
app.listen(3000, ()=>{
    console.log('server listening at port 3000')
})


