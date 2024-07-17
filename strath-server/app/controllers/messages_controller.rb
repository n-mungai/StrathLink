class MessagesController < ApplicationController
    def index
        # messages = Message.all
        messages = Message.where(sender_id: @current_student.id)
        puts @current_student.id
        render json: messages,  :except => [:created_at, :updated_at]
    end

    def create
        message = Message.create!(message_params)
        if message
            render json: { status: 'created', message: message},:except => [:created_at, :updated_at], status: :created
        else
            render json: { status: 'error', errors: message.errors.full_messages}, status: :unprocessable_entity
        end
    end

    private
    def message_params
        params.permit(:content, :sender_id, :receiver_id)
    end
end
