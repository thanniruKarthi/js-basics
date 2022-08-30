import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import ArithValidator from 'App/Validators/ArithValidator'

// import { configure } from "@japa/runner"

export default class PostsController 
{   public async add( {request} : HttpContextContract)
    {
        const payload = await request.validate(ArithValidator);
        const a:number=payload['number1']
        const b:number=payload['number2']
       return a+b
       
    }
    public async sub( {request})
    {
        const payload=await request.validate(ArithValidator);
        const a:number=payload["number1"]
        const b:number=payload["number2"]
        return a-b
}
public async multiply( {request})
    { const payload=await request.validate(ArithValidator)
        const a:number=payload["number1"]
        const b:number=payload["number2"]
    return a*b
   
    }
    public async div( {request})
    { const payload=await request.validate(ArithValidator)
        const a:number=payload["number1"]
        const b:number=payload["number2"
    if(b==0)
    {
        return "undefined"
    }
    else{
        return a/b
    }
   
    }  
}
    
