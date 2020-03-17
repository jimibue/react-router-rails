class Api::CommentsController < ApplicationController
  def index
    product = Product.find(params[:product_id])
    render json: product.comments
  end

  def create
    product = Product.find(params[:product_id])
    render json: product.comments.create(comment_params)
  end

  def destroy
    Comment.find(params[:id]).destroy
  end

  private

  def comment_params
    params.require(:comment).permit(:user, :text)
  end
end
