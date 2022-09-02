
import Route from '@ioc:Adonis/Core/Route'
//import PostsController from 'App/Controllers/Http/PostsController'
Route.post('/createdept','PostsController.createdept').middleware("Happy")
Route.post('/readdept','PostsController.readdept').middleware("Happy")
Route.post('/updatedept','PostsController.updatedept').middleware("Happy")
Route.post('/deletedept','PostsController.deletedept').middleware("Happy")
Route.post('/empdetails','PostsController.empdetails').middleware("Happy")
Route.post('/createage','PostsController.createage').middleware("Happy")
Route.post('/readage','PostsController.readage').middleware("Happy")
Route.post('/updateage','PostsController.updateage').middleware("Happy")
Route.post('/deleteage','PostsController.deleteage').middleware("Happy")
Route.post('/getbyid','PostsController.getbyid').middleware("Happy")
Route.post('/getbyname','PostsController.getbyname').middleware("Happy")
Route.post('/iddata','PostsController.getemploydata').middleware("Happy")
