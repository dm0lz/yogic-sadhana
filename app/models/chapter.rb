class Chapter < ActiveRecord::Base
  belongs_to :practice
  validates_presence_of :title
  validates_presence_of :description
end
