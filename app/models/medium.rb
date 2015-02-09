class Medium < ActiveRecord::Base

  translates :title, :description, :audio, :video

  belongs_to :mediumable, polymorphic: true

  mount_uploader :audio, AudioUploader
  mount_uploader :video, VideoUploader

  validates_presence_of :media_type
  validates_presence_of :title
  validate :media_conformity, :on => [:create, :update]

  def media_conformity
    # binding.pry
    errors.add(:media, I18n.t('activerecord.errors.models.medium.attributes.media_type.type')) if (!video.file.nil? && !audio.file.nil?)
  end

  def is_audio
    media_type == "audio"
  end

  def is_video
    media_type == "video"
  end

end
