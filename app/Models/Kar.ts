
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class Kar extends BaseModel {
  @column({ isPrimary: true })
  public id: number
  @column()
public name:string
@column()
public dept:string
}
