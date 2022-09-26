import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import CustomerDetail from 'App/Models/CustomerDetail'
import Database from '@ioc:Adonis/Lucid/Database'
import CustomerValidator from 'App/Validators/CustomerValidator'
export default class CustomersController {

    public async insertCustomer({request}:HttpContextContract)
    {
   const table1=new CustomerDetail()
   const payload=await request.validate(CustomerValidator)
   table1.cusid=payload['id']
   table1.name=payload['name']
   table1.owner=payload['owner']
   await table1.save()
   return await CustomerDetail.all()
    }
    public async readCustomer()
    {
      const data= await CustomerDetail.query().orderBy('id','asc')
      .leftJoin('hotel_details','hotel_details.cusid','customer_details.cusid')
      .groupBy('customer_details.id')
      .select("customer_details.*")
      .count('customer_details.cusid as count')
      const newdata=data.map(el=>Object.assign({},el.$attributes,{count:el.$extras.count}))
      console.log(data)
      return newdata
       
    }
    public async updateCustomer({request})
    {
        try{
      const user=await CustomerDetail.findByOrFail('id',request.params().id)
      
      user.cusid=request.input('id')
      user.name=request.input('name')
      user.owner=request.input('owner')
      await user.save()
    await user.save()
    return await CustomerDetail.all()
        }
        catch{

          return "sorry wrong details"
        }
    }
    public async deleteCustomer({request})
    {
      try{ 
      
        const user = await CustomerDetail.findByOrFail('id',request.params().id)
user.delete()
await user.save()
return await CustomerDetail.all()
      }
      catch{
        return "sorry wrong details"
      }
    }
    public async customerSort({request})
    {
      const data= await CustomerDetail.query().orderBy(request.input('value'),request.input('order'))
      .leftJoin('hotel_details','hotel_details.cusid','customer_details.cusid')
      .groupBy('customer_details.id')
      .select("customer_details.*")
      .count('customer_details.cusid as count')
      const newdata=data.map(el=>Object.assign({},el.$attributes,{count:el.$extras.count}))
   
      return newdata
 
    }
    public async searchCustomer({request})
{
const data = request.input('Key')
            return await CustomerDetail.query()
            .from('customer_details')
            .select('*')
            .where((query) =>{
                if(/^[0-9]/.test(data)){
                    query
                    .where('id',data)
                    .orWhere('cusid',data)
                    .orWhereILike('name','%'+data+'%')
                    .orWhereILike('owner','%'+data+'%')
                }
            })
            .orWhere((query) =>{
                query
                .whereILike('name','%'+data+'%')
                .orWhereILike('owner','%'+data+'%')
            })
          }
      


}
