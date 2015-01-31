class Backend::TheoriesController < Backend::BackendController

  before_action :find_theory, only: [:show, :edit, :update, :destroy]
  before_action :find_chapter, only: [:index, :new]

  def index
    @theories = Theory.where chapter_id: params[:chapter_id]

    # respond_to do |format|
    #   format.html  # index.html.erb
    #   format.json  { render json: { theories: @theories }.to_a }
    # end
    # render json: { theories: @theories }.to_a
   render 'index'
  end

  def create
    @theory = Theory.new theory_params
    if @theory.save
      flash[:success] = t('theories.flash_messages.theory_created')
      redirect_to backend_chapter_theories_path
    else
      flash[:error] = @theory.errors.messages.map{|k,v| v}.flatten.join " -- "
      redirect_to new_backend_chapter_theory_path
    end
  end

  def show
    render 'show'
  end

  def new
    @theory = Theory.new
    render 'new'
  end

  def edit
    render 'edit'
  end

  def update
    if @theory.update_attributes(theory_params)
      flash[:success] = t('theories.flash_messages.theory_updated')
      redirect_to backend_theory_path @theory
    else
      flash[:error] = @theory.errors.messages.map{|k,v| v}.flatten.join " -- "
      redirect_to edit_backend_theory_path(@theory)
    end
  end

  def destroy
    if @theory.destroy
      flash[:success] = t('theories.flash_messages.theory_destroyed')
      redirect_to backend_chapter_theories_path @theory.chapter
    else
      @errors = @theory.errors
      render 'shared/errors'
    end
  end

  private
  def theory_params
    params.require(:theory).permit(:id, :title, :description, :chapter_id)
  end

  def find_theory
    @theory = Theory.find params[:id]
  end

  def find_chapter
    @chapter = Chapter.find params[:chapter_id]
  end

end
