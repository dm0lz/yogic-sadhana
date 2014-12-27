class Practice < ActiveRecord::Base
  belongs_to :chapter
  has_many :media, dependent: :destroy
end
