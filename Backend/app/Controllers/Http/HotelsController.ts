import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import HotelDetail from 'App/Models/HotelDetail'
import Database from '@ioc:Adonis/Lucid/Database'


export default class HotelsController {
    public async inserthotel({request}:HttpContextContract)
    {
   const table2=new HotelDetail()
   table2.hid=request.input('id')
   table2.cusid=request.input('cusid')
   table2.branch=request.input('branch')
   table2.street=request.input('street')
   table2.pin_code=request.input('pincode')
   await table2.save()
   return await HotelDetail.all()
    }
    public async readhotel()
    {
        
        const data=await HotelDetail.all()
        data.sort((a, b) => a["id"] - b["id"])
        return data
       
    }
    public async updatehotel({request})
    {
        try{
      const user=await HotelDetail.findByOrFail('id',request.input('id'))
      user.hid=request.input('id')
   user.cusid=request.input('cusid')
   user.branch=request.input('branch')
   user.street=request.input('street')
   user.pin_code=request.input('pincode')
    await user.save()
    return await HotelDetail.all()
        }
        catch{

          return "sorry wrong details"
        }
    }
    public async deletehotel({request})
    {
      try{ 
      
        const user = await HotelDetail.findByOrFail('id',request.params().id)
user.delete()
await user.save()
return await HotelDetail.all()
      }
      catch{
        return "sorry wrong details"
      }

    }
    public async hidasc()
    {
return HotelDetail.query().orderBy("hid","asc")
    }
    public async hiddesc()
    {
return HotelDetail.query().orderBy("hid","desc")
    }
    public async cusidasc()
    {
return HotelDetail.query().orderBy("cusid","asc")
    }
    public async cusiddesc()
    {
return HotelDetail.query().orderBy("cusid","desc")
    }
    public async branchasc()
    {
return HotelDetail.query().orderBy("branch","asc")
    }
    public async branchdesc()
    {
return HotelDetail.query().orderBy("branch","desc")
    }
    public async streetasc()
    {
return HotelDetail.query().orderBy("street","asc")
    }
    public async streetdesc()
    {
return HotelDetail.query().orderBy("street","desc")
    }
    public async pincodeasc()
    {
return HotelDetail.query().orderBy("pin_code","asc")
    }
    public async pincodedesc()
    {
return HotelDetail.query().orderBy("pin_code","desc")
    }
    public async searchhotel({request})
{
const data = request.input('Key')
            return Database
            .from('hotel_details')
            .select('*')
            .where((query) =>{
                if(/^[0-9]/.test(data)){
                    query
                    .where('id',data)
                    .orWhere('hid',data)
                    .orWhere('cusid',data)
                    .orWhere('pin_code',+data)
                    .orWhereILike('branch','%'+data+'%')
                    .orWhereILike('street','%'+data+'%')
                   
                }
            })
            .orWhere((query) =>{
                query
                .orWhereILike('branch','%'+data+'%')
                .orWhereILike('street','%'+data+'%')
            })
          }
          public async jsondata()
          {
            const data=await HotelDetail.all()
            return data
          }
          public async customername()
          {
         return   Database
  .from('hotel_details')
  .join('customer_details', 'customer_details.cusid', 'hotel_details.cusid')
  .select('hotel_details.*')
  .select('customer_details.name')

 
  
          }

}
