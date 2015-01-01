class Medium < ActiveRecord::Base

  belongs_to :practice
  mount_uploader :audio, AudioUploader

end
