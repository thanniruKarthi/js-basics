import Route from '@ioc:Adonis/Core/Route'
Route.put('/add','PostsController.add').middleware('Happy')
Route.post('/sub','PostsController.sub').middleware('Happy')
Route.patch('/multiply','PostsController.multiply').middleware('Happy')
Route.get('/div','PostsController.div').middleware('Happy')