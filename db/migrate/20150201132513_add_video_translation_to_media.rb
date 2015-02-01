class AddVideoTranslationToMedia < ActiveRecord::Migration
  def up
    Medium.add_translation_fields! video: :text
  end

  def down
    remove_column :medium_translations, :video
  end
end
