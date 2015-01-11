class CreateTheories < ActiveRecord::Migration
  def change
    create_table :theories do |t|
      #t.references :mediumable, polymorphic: true, index: true
      t.string :title
      t.text :description
      t.references :chapter, index: true

      t.timestamps
    end
  end
end
