class StudentsController < ApplicationController
    def index
        @students = Student.all


        render json: @students
    end

    def show
        if params[:course]
            @students = @students.where(course: params[:course])
        end

        # filter students using year
        if params[:year]
            @students = @students.where(year: params[:year])
        end

        # using availability
        if params[:availability]
            @students = @students.where(availability: params[:availability])
        end

        if params[:email]
            @students = @students.where(email: params[:email])
        end

        render json: @students
    end

    def create
        student = Student.new(student_params)
        if student.save
            render json: { status: 'created', student: student}, status: :created
        else
            render json: { status: 'error', errors: student.errors.full_messages}, status: :404
        end

        render json: @student
    end

    def student_params
        params.require(:student).permit(:name, :email, :password, :password_confirmation, :course, :availabile, :year, :interests, )
      end
end
