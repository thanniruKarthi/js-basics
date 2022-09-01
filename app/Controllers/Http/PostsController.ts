//import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

// import { configure } from "@japa/runner"
import Migr from "App/Models/Migr"


export default class PostsController 
{   public async delete( {})
    {
    
       
       const user2 = await Migr.findByOrFail('id',2)
        await user2.save()
        user2.delete()
        return Migr.all()
        
        /*user1.employ_integer=request.input("number")
        user1.name=request.input("string")
        await user1.save()
        const a:number=request.input("number1")
        const b:number=request.input("number2")
         return a+b*/
    }
   
    public async update( {})
    {
        const user = await Migr.findByOrFail('id',3)
user.name="mahi"

await user.save()
return Migr.all()

}
public async multiply( {request})
    {
        const a:number=request.input("number1")
        const b:number=request.input("number2")
    return a*b
   
    }
        public async div( {request})
    {
        const a:number=request.input("number1")
        const b:number=request.input("number2")
    if(b==0)
    {
        return "undefined"
    }
    else{
        return a/b
    }
   
    }  
}
    
