class Theory < ActiveRecord::Base

  belongs_to :chapter
  has_many :media, as: :mediumable, dependent: :destroy

  validates_presence_of :title
  validates_presence_of :description
end
