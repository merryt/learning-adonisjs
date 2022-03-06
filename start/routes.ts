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
  Route.resource("posts", "PostsController").except(['update', 'edit', "destroy"]);
  // a resourceful route that uses shallowResource will use only use the parents ID for index, create, store because 
  // those are the screens that NEED to have an id. For the others it will use just the name (in this case comments)
  // so /comment/:id for the single comment, but /posts/:post_id/comments for the index.
  Route.shallowResource("posts.comments", 'CommentsController');
}).as('app');


// this is a silly way to do this, we could also apply middleware for auth and just not let logged in people use things.
Route.group(()=>{
  Route.resource("admin/posts", "admin/PostsController").only(['create', 'update', 'edit', "destroy", "store"])
}).namespace('App/Controllers/Http/Admin').as('admin')