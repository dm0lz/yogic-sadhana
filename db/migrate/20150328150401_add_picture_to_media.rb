class AddPictureToMedia < ActiveRecord::Migration
  def change
    add_column :media, :picture, :string
  end
end
