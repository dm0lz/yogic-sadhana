class Medium < ActiveRecord::Base

  translates :title, :description, :audio

  belongs_to :mediumable, polymorphic: true
  mount_uploader :audio, AudioUploader

end
