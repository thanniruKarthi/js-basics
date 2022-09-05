
import Route from '@ioc:Adonis/Core/Route'
//import PostsController from 'App/Controllers/Http/PostsController'
Route.group(()=>{
Route.post('/createdept','employee.createdept')
Route.post('/readdept','employee.readdept')
Route.post('/updatedept','employee.updatedept')
Route.post('/deletedept','employee.deletedept')
Route.post('/empdetails','employee.empdetails')
Route.post('/createage','employee.createage')
Route.post('/readage','employee.readage')
Route.post('/updateage','employee.updateage')
Route.post('/deleteage','employee.deleteage')
Route.post('/getbyid','employee.getbyid')
Route.post('/getbyname','employee.getbyname')
Route.post('/iddata','employee.getemploydata')}).middleware('Happy')
