class Course < ActiveRecord::Base
  has_many :chapters
  has_many :practices
end
