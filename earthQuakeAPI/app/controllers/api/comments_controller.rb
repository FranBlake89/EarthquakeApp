class Api::CommentsController < ApplicationController
  def create
    feature = Earthquake.find(params[:feature_id])
    comment = feature.comments.new(comment_params)

    if comment.save
      render json:{
        message: 'Comment created succesfully! Congrats',
        status: :created
      }
    else
      render json:{
        errors: comment.errors.full_message,
        status: :unprocessable_entity
      }
    end
  end

  def index_features
    feature = Earthquake.find(params[:feature_id])
    comments = feature.comments

    render json: {
      feature_id: feature.id,
      comments: comments.map { |comment| serialize_comment(comment) }
    }
  end

  private

  def comment_params
    params.require(:comment).permit(:body)
  end
end
