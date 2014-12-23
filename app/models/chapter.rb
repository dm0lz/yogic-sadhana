class Chapter < ActiveRecord::Base

  belongs_to :course
  has_many :practices

  validates_presence_of :title
  validates_presence_of :description

end
