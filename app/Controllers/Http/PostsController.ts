import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Database from '@ioc:Adonis/Lucid/Database'

// import { configure } from "@japa/runner"
//import test from "App/Models/TestModel"
//import kar from "App/Models/Kar"
//import rands from "App/Models/Rand"
export default class PostsController 
{   public async insert({}:HttpContextContract)
    {
    
   return  (Database
  .from('kars')
  .join('rands', 'kars.name', '=', 'rands.name')
  .select('kars.*'))

         
    }
}
