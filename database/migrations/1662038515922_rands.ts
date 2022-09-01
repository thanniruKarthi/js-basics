import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'rands'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')

   table.integer('employ_id')
   table.string('name')
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
