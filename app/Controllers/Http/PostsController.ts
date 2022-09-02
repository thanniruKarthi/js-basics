import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import EmployDept from 'App/Models/EmployDept'
import EmployAge from 'App/Models/EmployAge'
import EmploydeptValidator from 'App/Validators/EmploydeptValidator'
import EmploAgeValidator from 'App/Validators/EmploAgeValidator'
import Database from '@ioc:Adonis/Lucid/Database'
export default class PostsController 
{   
    public async createdept({request}:HttpContextContract)
    {

    const table2=new EmployDept()
    const payload=await request.validate(EmploydeptValidator)
    table2.empid=payload['empid']
    table2.name=payload['name']
    table2.dept =payload['dept']
  await table2.save()
    }
    public async readdept()
    {
        return await EmployDept.all()
    }
    public async updatedept({})
    {
        
      const user=await EmployDept.findByOrFail('id',11)
      user.dept="tesing"
    await user.save()
    }
    public async deletedept({})
    {
        const user = await EmployDept.findByOrFail('id',12)
await user.delete()
    }
    public async createage({request}:HttpContextContract)
    {
    const table2=new EmployAge()
    const payload=await request.validate(EmploAgeValidator)
    table2.empid=payload['empid']
    table2.age =payload['age']
  await table2.save()
    }
    public async readage()
    {
        return await EmployAge.all()
    }
    public async updateage({})
    {
        
      const user=await EmployAge.findByOrFail('id',11)
      user.age=22
    await user.save()
    }
    public async deleteage({})
    {
        const user = await EmployAge.findByOrFail('id',11)
await user.delete()
    }
    public async getbyid({request})
    {
      const idno=request.input("id")
      const user = await EmployDept.find(idno)
      return user

    }
    public async getbyname({request})
    {
      const username=request.input("name")
    const user = await EmployDept.findBy('name', username)
    return user
    }  

public async getemploydata({request})
{
 return Database
  .from('employ_depts')
  .join('employ_ages', 'employ_depts.empid', 'employ_ages.empid')
  .select('employ_depts.empid')
  .select('employ_depts.name')
  .select('employ_depts.dept')
  .select('employ_ages.age').where('employ_depts.empid',request.input("getid"))

}
    
}
