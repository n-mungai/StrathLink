class ArticlesController < ApplicationController
  # before_action :authorize

  #GET all articles according to the logged in users interests if he/she has any interests
    def index 
        @articles = Article.where(topic: @current_student.interests)

      if @articles.empty?
         @articles = Article.all
      end
        puts @current_student.interests
        render json: @articles, :except => [:created_at, :updated_at]
    end

    def show
      article = Article.find_by(id:params[:id])
      if article
        render json: article, status: :created
      else
        render json: {error: "article not found"},status: :not_found
    end 

    # POST create a new article
    def create
      article = Article.create(article_params)
      if article
        render json: article,  :except => [:created_at, :updated_at], status: :created
      else
        render json: {error: article.errors.full_messages}, status: :unprocessable_entity
      end
    end

    #PUT update an article

    def update
      article = Article.find_by(id:params[:id])
      if article
        article.update(article_params)
        render json: article,  :except => [:created_at, :updated_at],status: :accepted
      else
        render json: {error: "Article not found"}, status: :not_found
      end
    end

    #destroy
    def destroy
      article = Article.find_by(id:params[:id])
      if article
        article.destroy
        render json: []
      else
        render json: {error: "Article not found"}, status: :not_found
      end
    end
  
  # private

  def article_params
      params.permit(:title, :topic, :writer, :content, :student_id)
    end
  end


end
