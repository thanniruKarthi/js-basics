import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'employ_names'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').primary()

      table.integer('empid')
      table.integer('age')
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
