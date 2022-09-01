import { BaseModel, column} from '@ioc:Adonis/Lucid/Orm'
export default class Migr extends BaseModel {
  @column({ isPrimary: true })
  public id: number
@column({})
 public employ_integer: number
 @column({})
 public name:string
}
