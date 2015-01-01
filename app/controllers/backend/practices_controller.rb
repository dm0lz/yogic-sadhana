class Backend::PracticesController < BackendController

  before_action :find_practice, only: [:show, :edit, :update, :destroy]
  before_action :find_chapter, only: [:index, :new]

  def index
    @practices = Practice.where chapter_id: params[:chapter_id]
    render 'index'
  end

  def create
    @practice = Practice.new practice_params
    if @practice.save
      flash[:success] = t('chapters.flash_messages.chapter_created')
      redirect_to backend_chapter_practices_path
    else
      flash[:error] = @chapter.errors.messages.map{|k,v| v}.flatten.join " -- "
      redirect_to new_backend_chapter_path(@chapter)
    end
  end

  def show
    @chapter = @practice.chapter
    render 'show'
  end

  def new
    @practice = Practice.new
    render 'new'
  end

  def edit
    render 'edit'
  end

  def update
    if @practice.update_attributes(practice_params)
      flash[:success] = t('practices.flash_messages.practice_updated')
      redirect_to backend_practice_path @practice
    else
      flash[:error] = @practice.errors.messages.map{|k,v| v}.flatten.join " -- "
      redirect_to edit_backend_practice_path(@practice)
    end
  end

  def destroy
    if @practice.destroy
      flash[:success] = t('practices.flash_messages.practice_destroyed')
      redirect_to backend_chapter_practices_path @practice.chapter
    else
      @errors = @practice.errors
      render 'shared/errors'
    end
  end

  private
  def practice_params
    params.require(:practice).permit(:id, :title, :description, :chapter_id)
  end

  def find_practice
    @practice = Practice.find params[:id]
  end

  def find_chapter
    @chapter = Chapter.find params[:chapter_id]
  end

end
