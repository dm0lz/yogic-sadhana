class Practice < ActiveRecord::Base

  translates :title, :description

  belongs_to :chapter
  has_many :media, as: :mediumable, dependent: :destroy

  validates_presence_of :title
  validates_presence_of :description

end
