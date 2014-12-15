class Backend::ChaptersController < BackendController

  def index
    @chapters = Chapter.all
  end

  def create
    @chapter = Chapter.new chapters_params
    if @chapter.save
      redirect_to :backend_chapters
    else
      @errors = @chapter.errors
      render 'shared/errors'
    end
  end

  def edit
    @chapter = Chapter.find chapters_params[:id]
    render 'edit'
  end

  def destroy
    Chapter.delete(params[:id])
    redirect_to :backend_chapters
  end

  def update
  end

  def show
    @chapter = Chapter.find chapters_params[:id]
    render 'show'
  end

  private
  def chapters_params
    params.permit :id, :title, :description
  end
end
