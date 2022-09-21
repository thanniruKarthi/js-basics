import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'employ_depts'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')

      table.integer('empid')
      table.string('name')
      table.string('dept')
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
