class AddAudioToMedia < ActiveRecord::Migration
  def change
    add_column :media, :audio, :string
  end
end
