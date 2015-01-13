class CreateTranslationForCourses < ActiveRecord::Migration

  def up
    Course.create_translation_table!({ title: :string, description: :text}, {migrate_data: true})
  end

  def down
    Course.drop_translation_table! migrate_data: true
  end

end
