import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import CustomerDetail from 'App/Models/CustomerDetail'
import Database from '@ioc:Adonis/Lucid/Database'
export default class CustomersController {

    public async insertcustomer({request}:HttpContextContract)
    {
   const table1=new CustomerDetail()
   table1.cusid=request.input('id')
   table1.name=request.input('name')
   table1.owner=request.input('owner')
   await table1.save()
   return await CustomerDetail.all()
    }
    public async readcustomer()
    {
      const data=Database.from('customer_details')
      .leftJoin('hotel_details','hotel_details.cusid','customer_details.cusid')
      .groupBy('customer_details.id')
      .select("customer_details.*")
      .count('customer_details.cusid as count')
      .orderBy('id','asc')
      return data
       
    }
    public async updatecustomer({request})
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
    public async deletecustomer({request})
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
    public async iddesc()
    {
      const data=Database.from('customer_details')
      .leftJoin('hotel_details','hotel_details.cusid','customer_details.cusid')
      .groupBy('customer_details.id')
      .select("customer_details.*")
      .count('customer_details.cusid as count')
      .orderBy('id','desc')
      return data
    }
    public async nameasc()
    {
      const data=Database.from('customer_details')
      .leftJoin('hotel_details','hotel_details.cusid','customer_details.cusid')
      .groupBy('customer_details.id')
      .select("customer_details.*")
      .count('customer_details.cusid as count')
      .orderBy('name','asc')
      return data
    }
    public async namedsc()
    {
      const data=Database.from('customer_details')
      .leftJoin('hotel_details','hotel_details.cusid','customer_details.cusid')
      .groupBy('customer_details.id')
      .select("customer_details.*")
      .count('customer_details.cusid as count')
      .orderBy('name','desc')
      return data
    }
    public async ownerasc()
    {
      const data=Database.from('customer_details')
      .leftJoin('hotel_details','hotel_details.cusid','customer_details.cusid')
      .groupBy('customer_details.id')
      .select("customer_details.*")
      .count('customer_details.cusid as count')
      .orderBy('owner','asc')
      return data
    }
    public async ownerdsc()
    {
      const data=Database.from('customer_details')
      .leftJoin('hotel_details','hotel_details.cusid','customer_details.cusid')
      .groupBy('customer_details.id')
      .select("customer_details.*")
      .count('customer_details.cusid as count')
      .orderBy('owner','desc')
      return data
    }
    
    public async searchcustomer({request})
{
const data = request.input('Key')
            return Database
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
          public  counting()
          {
          const data=Database.from('customer_details')
          .leftJoin('hotel_details','hotel_details.cusid','customer_details.cusid')
          .groupBy('customer_details.id')
          .select("customer_details.*")
          .count('customer_details.cusid as count')

          return data
          }


}
