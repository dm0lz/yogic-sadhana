class Course < ActiveRecord::Base

  has_many :chapters, dependent: :destroy

  validates_presence_of :title
  validates_presence_of :description

end
