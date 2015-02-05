class AddPictureToChapters < ActiveRecord::Migration
  def change
    add_column :chapters, :picture, :string
  end
end
