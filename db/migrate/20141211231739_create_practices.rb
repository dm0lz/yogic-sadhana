class CreatePractices < ActiveRecord::Migration
  def change
    create_table :practices do |t|
      t.string :name
      t.text :description
      t.references :chapter, index: true

      t.timestamps
    end
  end
end
