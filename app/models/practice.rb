class Practice < ActiveRecord::Base

  belongs_to :chapter
  has_many :media, dependent: :destroy

  validates_presence_of :title
  validates_presence_of :description

end
