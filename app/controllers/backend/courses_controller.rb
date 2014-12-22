class Backend::CoursesController < BackendController

  def index
    @courses = Course.all
    render 'index'
  end

  def create
    @course = Course.new course_params
    if @course.save
      flash[:success] = t('courses.flash_messages.course_created')
      redirect_to :backend_courses
    else
      flash[:error] = @course.errors.messages.map{|k,v| v}.flatten.join " -- "
      redirect_to new_backend_chapter_path(@course)
    end
  end

  def show
    @course = Course.find course_params[:id]
    @chapters = @course.chapters
    render 'show'
  end

  def edit
    @course = Course.find course_params[:id]
    render 'edit'
  end

  def update
    @course = Course.find course_params[:id]
    if @course.update_attributes(course_params)
      flash[:success] = t('courses.flash_messages.course_updated')
      redirect_to :backend_courses
    else
      flash[:error] = @course.errors.messages.map{|k,v| v}.flatten.join " -- "
      redirect_to edit_backend_course_path(@course)
    end
  end

  def destroy
    @course = Course.find course_params[:id]
    if @course.destroy
      flash[:success] = t('courses.flash_messages.course_destroyed')
      redirect_to :backend_courses
    else
      @errors = @courses.errors
      render 'shared/errors'
    end
  end

  private
  def course_params
    params.permit :id, :title, :description
  end
end
