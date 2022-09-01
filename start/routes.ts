
import Route from '@ioc:Adonis/Core/Route'

Route.post('/add','PostsController.add')
Route.post('/sub','PostsController.sub')
Route.post('/multiply','PostsController.multiply')
Route.post('/div','PostsController.div')
Route.post('/delete','PostsController.delete')
Route.post('/update','PostsController.update')