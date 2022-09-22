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
    public async readhotel({})
    {
        return  Database
        .from('hotel_details')
        .join('customer_details', 'customer_details.cusid', 'hotel_details.cusid')
        .select('hotel_details.*')
        .select('customer_details.name')
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
        const datad=await  Database
        .from('hotel_details')
        .join('customer_details', 'customer_details.cusid', 'hotel_details.cusid')
        .select('hotel_details.*')
        .select('customer_details.name')
        .orderBy('id','asc')
        const result=[]
    
        for(let index=0;index<datad.length;index++)
        {
        
         let address={

             "branch":datad[index].branch,
             "street":datad[index].street,
             "pincode":datad[index].pin_code
         }
         let finalres={
            "id":datad[index].id,
            "hid":datad[index].hid,
            "cusid":datad[index].cusid,
            "branch":datad[index].branch,
            "street":datad[index].street,
            "pincode":datad[index].pin_code,
            "name":datad[index].name,
             "address":address,
         
         }
         
         result.push(finalres)

      }
      return result
    }
    public async hiddesc()
    {
        const datad =await Database
        .from('hotel_details')
        .join('customer_details', 'customer_details.cusid', 'hotel_details.cusid')
        .select('hotel_details.*')
        .select('customer_details.name')
        .orderBy('id','desc')
        const result=[]
    
        for(let index=0;index<datad.length;index++)
        {
        
         let address={

             "branch":datad[index].branch,
             "street":datad[index].street,
             "pincode":datad[index].pin_code
         }
         let finalres={
            "id":datad[index].id,
            "hid":datad[index].hid,
            "cusid":datad[index].cusid,
            "branch":datad[index].branch,
            "street":datad[index].street,
            "pincode":datad[index].pin_code,
            "name":datad[index].name,
             "address":address,
         
         }
         
         result.push(finalres)

      }
      return result
    }
    public async cusidasc()
    {
        const datad = await Database
        .from('hotel_details')
        .join('customer_details', 'customer_details.cusid', 'hotel_details.cusid')
        .select('hotel_details.*')
        .select('customer_details.name')
        .orderBy('cusid','asc')
        const result=[]
    
        for(let index=0;index<datad.length;index++)
        {
        
         let address={

             "branch":datad[index].branch,
             "street":datad[index].street,
             "pincode":datad[index].pin_code
         }
         let finalres={
            "id":datad[index].id,
            "hid":datad[index].hid,
            "cusid":datad[index].cusid,
            "branch":datad[index].branch,
            "street":datad[index].street,
            "pincode":datad[index].pin_code,
            "name":datad[index].name,
             "address":address,
         
         }
         
         result.push(finalres)

      }
      return result
    }
    public async cusiddesc()
    {
        const datad=await  Database
        .from('hotel_details')
        .join('customer_details', 'customer_details.cusid', 'hotel_details.cusid')
        .select('hotel_details.*')
        .select('customer_details.name')
        .orderBy('cusid','desc')
        const result=[]
    
        for(let index=0;index<datad.length;index++)
        {
        
         let address={

             "branch":datad[index].branch,
             "street":datad[index].street,
             "pincode":datad[index].pin_code
         }
         let finalres={
            "id":datad[index].id,
            "hid":datad[index].hid,
            "cusid":datad[index].cusid,
            "branch":datad[index].branch,
            "street":datad[index].street,
            "pincode":datad[index].pin_code,
            "name":datad[index].name,
             "address":address,
         
         }
         
         result.push(finalres)

      }
      return result
    }
    public async branchasc()
    {
        const datad= await Database
        .from('hotel_details')
        .join('customer_details', 'customer_details.cusid', 'hotel_details.cusid')
        .select('hotel_details.*')
        .select('customer_details.name')
        .orderBy('branch','asc')
        const result=[]
    
        for(let index=0;index<datad.length;index++)
        {
        
         let address={

             "branch":datad[index].branch,
             "street":datad[index].street,
             "pincode":datad[index].pin_code
         }
         let finalres={
            "id":datad[index].id,
            "hid":datad[index].hid,
            "cusid":datad[index].cusid,
            "branch":datad[index].branch,
            "street":datad[index].street,
            "pincode":datad[index].pin_code,
            "name":datad[index].name,
             "address":address,
         
         }
         
         result.push(finalres)

      }
      return result



    }
    public async branchdesc()
    {
        const datad=await  Database
        .from('hotel_details')
        .join('customer_details', 'customer_details.cusid', 'hotel_details.cusid')
        .select('hotel_details.*')
        .select('customer_details.name')
        .orderBy('branch','desc')
        const result=[]
    
        for(let index=0;index<datad.length;index++)
        {
        
         let address={

             "branch":datad[index].branch,
             "street":datad[index].street,
             "pincode":datad[index].pin_code
         }
         let finalres={
            "id":datad[index].id,
            "hid":datad[index].hid,
            "cusid":datad[index].cusid,
            "branch":datad[index].branch,
            "street":datad[index].street,
            "pincode":datad[index].pin_code,
            "name":datad[index].name,
             "address":address,
         
         }
         
         result.push(finalres)

      }
      return result
    }
    public async streetasc()
    {
        const datad=await Database
        .from('hotel_details')
        .join('customer_details', 'customer_details.cusid', 'hotel_details.cusid')
        .select('hotel_details.*')
        .select('customer_details.name')
        .orderBy('street','asc')
        const result=[]
    
        for(let index=0;index<datad.length;index++)
        {
        
         let address={

             "branch":datad[index].branch,
             "street":datad[index].street,
             "pincode":datad[index].pin_code
         }
         let finalres={
            "id":datad[index].id,
            "hid":datad[index].hid,
            "cusid":datad[index].cusid,
            "branch":datad[index].branch,
            "street":datad[index].street,
            "pincode":datad[index].pin_code,
            "name":datad[index].name,
             "address":address,
         
         }
         
         result.push(finalres)

      }
      return result
    }
    public async streetdesc()
    {
        const datad=await Database
        .from('hotel_details')
        .join('customer_details', 'customer_details.cusid', 'hotel_details.cusid')
        .select('hotel_details.*')
        .select('customer_details.name')
        .orderBy('street','desc')
        const result=[]
    
        for(let index=0;index<datad.length;index++)
        {
        
         let address={

             "branch":datad[index].branch,
             "street":datad[index].street,
             "pincode":datad[index].pin_code
         }
         let finalres={
            "id":datad[index].id,
            "hid":datad[index].hid,
            "cusid":datad[index].cusid,
            "branch":datad[index].branch,
            "street":datad[index].street,
            "pincode":datad[index].pin_code,
            "name":datad[index].name,
             "address":address,
         
         }
         
         result.push(finalres)

      }
      return result
    }
    public async pincodeasc()
    {
        const datad=await Database
        .from('hotel_details')
        .join('customer_details', 'customer_details.cusid', 'hotel_details.cusid')
        .select('hotel_details.*')
        .select('customer_details.name')
        .orderBy('pin_code','asc')
        const result=[]
    
        for(let index=0;index<datad.length;index++)
        {
        
         let address={

             "branch":datad[index].branch,
             "street":datad[index].street,
             "pincode":datad[index].pin_code
         }
         let finalres={
            "id":datad[index].id,
            "hid":datad[index].hid,
            "cusid":datad[index].cusid,
            "branch":datad[index].branch,
            "street":datad[index].street,
            "pincode":datad[index].pin_code,
            "name":datad[index].name,
             "address":address,
         
         }
         
         result.push(finalres)

      }
      return result
    }
    public async pincodedesc()
    {
        const datad= await  Database
        .from('hotel_details')
        .join('customer_details', 'customer_details.cusid', 'hotel_details.cusid')
        .select('hotel_details.*')
        .select('customer_details.name')
        .orderBy('pin_code','desc')
        const result=[]
    
        for(let index=0;index<datad.length;index++)
        {
        
         let address={

             "branch":datad[index].branch,
             "street":datad[index].street,
             "pincode":datad[index].pin_code
         }
         let finalres={
            "id":datad[index].id,
            "hid":datad[index].hid,
            "cusid":datad[index].cusid,
            "branch":datad[index].branch,
            "street":datad[index].street,
            "pincode":datad[index].pin_code,
            "name":datad[index].name,
             "address":address,
         
         }
         
         result.push(finalres)

      }
      return result

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
         const datad=await Database
  .from('hotel_details')
  .join('customer_details', 'customer_details.cusid', 'hotel_details.cusid')
  .select('hotel_details.*')
  .select('customer_details.name')
  return datad
  
          }
          public async address()
          {
            const datad=await this.customername()
            const result=[]
    
            for(let index=0;index<datad.length;index++)
            {
            
             let address={
    
                 "branch":datad[index].branch,
                 "street":datad[index].street,
                 "pincode":datad[index].pin_code
             }
             let finalres={
                "id":datad[index].id,
                "hid":datad[index].hid,
                "cusid":datad[index].cusid,
                "branch":datad[index].branch,
                "street":datad[index].street,
                "pincode":datad[index].pin_code,
                "name":datad[index].name,
                 "address":address,
             
             }
             
             result.push(finalres)

          }
          return result
        }

}
