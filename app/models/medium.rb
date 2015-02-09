class Medium < ActiveRecord::Base

  translates :title, :description, :audio, :video

  belongs_to :mediumable, polymorphic: true
  mount_uploader :audio, AudioUploader
  mount_uploader :video, VideoUploader

  def is_audio
    media_type == "audio"
  end

  def is_video
    media_type == "video"
  end

end
