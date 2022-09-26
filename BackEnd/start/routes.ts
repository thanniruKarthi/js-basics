
import Route from '@ioc:Adonis/Core/Route'
Route.group(()=>{

Route.get('/readCustomer','CustomersController.readCustomer')
Route.post('/insertCustomer','CustomersController.insertCustomer')
Route.post('/updateCustomer/:id','CustomersController.updateCustomer')
Route.delete('/deleteCustomer/:id','CustomersController.deleteCustomer')
Route.post('/customerSearch','CustomersController.searchCustomer')
Route.post('/customerSort','CustomersController.customerSort')

Route.post('/insertHotel','HotelsController.insertHotel')
Route.get('/readHotel','HotelsController.readHotel')
Route.delete('/deleteHotel/:id','HotelsController.deleteHotel')
Route.post('/updateHotel','HotelsController.updateHotel')
Route.post('/searchHotel','HotelsController.searchHotel')
Route.post('/sortHotel','HotelsController.sortHotel')
}).middleware('Happy')