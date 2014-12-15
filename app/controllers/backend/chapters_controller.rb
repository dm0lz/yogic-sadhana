class Backend::ChaptersController < BackendController

  def index
    @chapters = Chapter.all
  end

  def create
    @chapter = Chapter.new chapter_params
    if @chapter.save
      redirect_to :backend_chapters
    else
      flash[:alert] = @chapter.errors.messages
      redirect_to new_backend_chapter_path(@chapter)
    end
  end

  def edit
    @chapter = Chapter.find chapter_params[:id]
    render 'edit'
  end

  def destroy
    @chapter = Chapter.find chapter_params[:id]
    if @chapter.destroy
      redirect_to :backend_chapters
    else
      @errors = @chapter.errors
      render 'shared/errors'
    end
  end

  def update
    @chapter = Chapter.find chapter_params[:id]
    if @chapter.update_attributes(chapter_params)
      redirect_to :backend_chapters
    else
      flash[:alert] = @chapter.errors.messages
      redirect_to edit_backend_chapter_path(@chapter)
    end
  end

  def show
    @chapter = Chapter.find chapter_params[:id]
    render 'show'
  end

  private
  def chapter_params
    params.permit :id, :title, :description
  end
end
