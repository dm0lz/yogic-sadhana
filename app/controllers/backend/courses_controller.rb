class Backend::CoursesController < Backend::BackendController

  before_action :find_course, only: [:show, :edit, :update, :destroy]

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
      redirect_to new_backend_course_path
    end
  end

  def new
    @course = Course.new
    render 'new'
  end

  def show
    render 'show'
  end

  def edit
    render 'edit'
  end

  def update
    if @course.update_attributes(course_params)
      flash[:success] = t('courses.flash_messages.course_updated')
      redirect_to :backend_courses
    else
      flash[:error] = @course.errors.messages.map{|k,v| v}.flatten.join " -- "
      redirect_to edit_backend_course_path(@course)
    end
  end

  def destroy
    if @course.destroy
      flash[:success] = t('courses.flash_messages.course_destroyed')
      redirect_to :backend_courses
    else
      @errors = @course.errors
      render 'shared/errors'
    end
  end

  private
  def course_params
    params.require(:course).permit(:id, :title, :description, :picture)
  end

  def find_course
    @course = Course.find params[:id]
  end

end
