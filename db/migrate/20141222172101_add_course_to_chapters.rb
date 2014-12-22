class AddCourseToChapters < ActiveRecord::Migration
  def change
    add_reference :chapters, :course, index: true
  end
end
