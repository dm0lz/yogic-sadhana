class CreateTranslationForMedia < ActiveRecord::Migration

  def up
    Medium.create_translation_table!({ title: :string, description: :text, audio: :string}, {migrate_data: true})
  end

  def down
    Medium.drop_translation_table! migrate_data: true
  end

end
