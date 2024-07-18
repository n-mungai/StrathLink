class ApplicationController < ActionController::API
    #before_action :set_current_student

#    private
    # def set_current_student
    #     @current_student = Student.find_by(id: session[:student_id])
    # end

    # def authenticate_student!
    #     render json: { status: 'error', message: 'Not authenticated' } unless @current_student
    # end
  
end
