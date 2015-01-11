class Course < ActiveRecord::Base

  has_many :chapters, dependent: :destroy
  mount_uploader :picture, PictureUploader

  validates_presence_of :title
  validates_presence_of :description

end
