class CreateTranslationForChapters < ActiveRecord::Migration

  def up
    Chapter.create_translation_table!({ title: :string, description: :text}, {migrate_data: true})
  end

  def down
    Chapter.drop_translation_table! migrate_data: true
  end

end
