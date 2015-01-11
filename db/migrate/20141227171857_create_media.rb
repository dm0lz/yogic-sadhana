class CreateMedia < ActiveRecord::Migration
  def change
    create_table :media do |t|
      t.string :title
      t.text :description
      t.string :audio
      #t.references :practice, index: true
      t.references :mediumable, polymorphic: true, index: true

      t.timestamps
    end
  end
end
