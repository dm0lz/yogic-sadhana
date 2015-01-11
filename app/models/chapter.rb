class Chapter < ActiveRecord::Base

  belongs_to :course
  has_many :practices, dependent: :destroy
  has_many :theories, dependent: :destroy

  validates_presence_of :title
  validates_presence_of :description

end
