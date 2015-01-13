class CreateTranslationForTheories < ActiveRecord::Migration

  def up
    Theory.create_translation_table!({ title: :string, description: :text}, {migrate_data: true})
  end

  def down
    Theory.drop_translation_table! migrate_data: true
  end

end
