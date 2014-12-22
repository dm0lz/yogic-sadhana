class Chapter < ActiveRecord::Base

  belongs_to :course

  validates_presence_of :title
  validates_presence_of :description

end
