class StudentsController < ApplicationController
    def index
        if params[:course]
            @@students = Student.where(course: params[:course])
        elsif params[:year]
            @@students = Student.where(year: params[:year])
        elsif params[:interests]
            @@students = Student.where(interests: params[:interests])
        end

        render json: @@students
    end

    def show
        @student = Student.find_by(email: params[:email])

        render json: @student
    end

    def create
        student = Student.new(student_params).save
        if student
            render json: { status: 'created', student: student}, status: :created
        else
            render json: { status: 'error', errors: student.errors.full_messages}, status: :unprocessable_entity
        end

        render json: @student
    end

    def student_params
        params.permit(:name, :email, :password, :password_confirmation, :course, :availabile, :year, :interests, )
      end
end
