/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| This file is dedicated for defining HTTP routes. A single file is enough
| for majority of projects, however you can define routes in different
| files and just make sure to import them inside this file. For example
|
| Define routes in following two files
| ├── start/routes/cart.ts
| ├── start/routes/customer.ts
|
| and then import them inside `start/routes.ts` as follows
|
| import './routes/cart'
| import './routes/customer''
|
*/


import Route from '@ioc:Adonis/Core/Route'


Route.get('/', async (ctx) => {
  ctx.test = "testing"
  return ctx.view.render('welcome')
})


Route.on('/test').redirect('/')

Route.on('/test2').render('welcome')

// Route.get('/blog/', async () =>{
//   return "all posts"
// }).as("posts.index")

// Route.get('/blog/:id', async ({params}) =>{
//   return params.id
// })


// regular posts
Route.group(()=>{
  Route.resource("posts", "PostController").except(['create', 'update', 'edit', "destroy", "store"])
}).as('app')


Route.group(()=>{
  Route.resource("admin/posts", "admin/PostController").only(['create', 'update', 'edit', "destroy", "store"])
}).namespace('App/Controllers/Http/Admin').as('admin')