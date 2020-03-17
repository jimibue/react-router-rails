class Api::CommentsController < ApplicationController
  def index
    product = Product.find(params[:product_id])
    render json: product.comments
  end

  def destroy
    Comment.find(params[:id]).destroy
  end
end
