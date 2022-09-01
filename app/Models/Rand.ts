
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class Rand extends BaseModel {
  @column({ isPrimary: true })
  public id: number
  @column()
public employ_id:number
@column()
public name:string
}
