class Medium < ActiveRecord::Base

  #belongs_to :practice
  belongs_to :mediumable, polymorphic: true
  mount_uploader :audio, AudioUploader

end
