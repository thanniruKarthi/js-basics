//import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

// import { configure } from "@japa/runner"

export default class PostsController 
{   public async add( {request})
    {
        const a:number=request.input("number1")
        const b:number=request.input("number2")
        return a+b
    }
    public async sub( {request})
    {
        const a:number=request.input("number1")
        const b:number=request.input("number2")
        return a-b
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
    
