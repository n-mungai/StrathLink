class StudentsController < ApplicationController
    before_action :set_current_student

    # get students according to filtered parameter
    def index
        if params[:course]
            @@students = Student.where(course: params[:course])
        elsif params[:year]
            @@students = Student.where(year: params[:year])
        elsif params[:interests]
            @@students = Student.where(interests: params[:interests])
        elsif !(params[:course]&&params[:year]&&params[:interests])
            @@students = Student.all
        end

        render json: @@students,  :except => [:created_at, :updated_at]
    end

    # get logged in user '/loggedin'
    def show
        render json: @current_student
    end

    # create a user account '/signin'
    def create
        student = Student.create!(student_params)
        if student
            render json: { status: 'created', student: student,  :except => [:created_at, :updated_at]}, status: :created
        else
            render json: { status: 'error', errors: student.errors.full_messages}, status: :unprocessable_entity
        end
    end

    def student_params
        params.permit(:name, :email, :password, :password_confirmation, :course, :available, :year, :interests)
      end
end
