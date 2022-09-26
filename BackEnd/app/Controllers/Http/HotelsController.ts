import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import HotelDetail from 'App/Models/HotelDetail'
import Database from '@ioc:Adonis/Lucid/Database'
import HotelValidator from 'App/Validators/HotelValidator'
export default class HotelsController {
    public async insertHotel({request}:HttpContextContract)
    {
   const table2=new HotelDetail()
   const payload=await request.validate(HotelValidator)
   table2.hid=payload['id']
   table2.cusid=payload['customerid']
   table2.branch=payload['branch']
   table2.street=payload['street']
   table2.pin_code=payload['pincode']
   await table2.save()
   return await HotelDetail.all()
    }
    public async readHotel({})
    {
      const hotelDetails=await HotelDetail.query().orderBy('id','asc')
      .from('hotel_details')
.join('customer_details', 'customer_details.cusid', 'hotel_details.cusid')
.select('hotel_details.*','customer_details.name')
const nameData=hotelDetails.map(el=>Object.assign({},el.$attributes,{name:el.$extras.name}))
        const result=[]
for(let index=0;index<nameData.length;index++)
{
 let address={

     "branch":nameData[index].branch,
     "street":nameData[index].street,
     "pincode":nameData[index].pin_code
 }
 let finalresult={
    "id":nameData[index].id,
    "hid":nameData[index].hid,
    "cusid":nameData[index].cusid,
    "branch":nameData[index].branch,
    "street":nameData[index].street,
    "pincode":nameData[index].pin_code,
    "name":nameData[index].name,
     "address":address,
 }
 result.push(finalresult)
}
return result
      
       }
    public async updateHotel({request})
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
    public async deleteHotel({request})
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
    public async sortHotel({request})
    {
        const hotelDetails=await HotelDetail.query().orderBy(request.input('value'),request.input('order'))
              .from('hotel_details')
        .join('customer_details', 'customer_details.cusid', 'hotel_details.cusid')
        .select('hotel_details.*','customer_details.name')
        const nameData=hotelDetails.map(el=>Object.assign({},el.$attributes,{name:el.$extras.name}))
                const result=[]
        for(let index=0;index<nameData.length;index++)
        {
         let address={

             "branch":nameData[index].branch,
             "street":nameData[index].street,
             "pin_code":nameData[index].pin_code
         }
         let finalresult={
            "id":nameData[index].id,
            "hid":nameData[index].hid,
            "cusid":nameData[index].cusid,
            "branch":nameData[index].branch,
            "street":nameData[index].street,
            "pincode":nameData[index].pin_code,
            "name":nameData[index].name,
             "address":address,
         }
         result.push(finalresult)
      }
      return result
    }

    
    public async searchHotel({request})
{
const data = request.input('Key')
            return await HotelDetail.query()
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
   
}
