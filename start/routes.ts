
import Route from '@ioc:Adonis/Core/Route'
//import PostsController from 'App/Controllers/Http/PostsController'
Route.group(()=>{
Route.post('/createdept','employee.createdept')
Route.get('/readdept','employee.readdept')
Route.put('/updatedept','employee.updatedept')
Route.delete('/deletedept','employee.deletedept')
Route.post('/empdetails','employee.empdetails')
Route.post('/createage','employee.createage')
Route.get('/readage','employee.readage')
Route.put('/updateage','employee.updateage')
Route.delete('/deleteage','employee.deleteage')
Route.post('/getbyid','employee.getbyid')
Route.post('/getbyname','employee.getbyname')
Route.post('/iddata','employee.getemploydata')}).middleware('Happy')
