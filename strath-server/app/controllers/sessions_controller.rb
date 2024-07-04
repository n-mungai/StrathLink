class SessionsController < ApplicationController

    # to facilitate user log in
    def create
        student = Student.find_by(email: params[:email])
        if student && student.authenticate(params[:password])
            session[:student_id] = student.id
            render json: { status: "Logged_in", student: student}
        else
            render json: { status: 'error', message: 'Invalid email or password'}
        end
    end

    # to log out a user

    def destroy
        session[:student_id] = nil
        render json: { status: 'logged_out' }
    end
end
