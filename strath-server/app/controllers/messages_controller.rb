class MessagesController < ApplicationController
    def index
        messages = Message.where(sender_id: params[:student_id].or(Message.where(receiver_id: params[:student_id])))
        render json: messages
    end
end
