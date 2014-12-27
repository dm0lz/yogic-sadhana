class CreateMedia < ActiveRecord::Migration
  def change
    create_table :media do |t|
      t.string :title
      t.text :description
      t.references :practice, index: true

      t.timestamps
    end
  end
end
