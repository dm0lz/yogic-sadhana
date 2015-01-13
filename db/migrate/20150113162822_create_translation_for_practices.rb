class CreateTranslationForPractices < ActiveRecord::Migration

  def up
    Practice.create_translation_table!({ title: :string, description: :text}, {migrate_data: true})
  end

  def down
    Practice.drop_translation_table! migrate_data: true
  end

end
