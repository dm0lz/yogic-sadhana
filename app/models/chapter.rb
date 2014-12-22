class Chapter < ActiveRecord::Base
  has_many :practices
  belongs_to :course
  validates_presence_of :title
  validates_presence_of :description
end
