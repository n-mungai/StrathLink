class CreateStudents < ActiveRecord::Migration[7.1]
  def change
    create_table :students do |t|
      t.string :name
      t.string :email
      t.string :interests
      t.string :course
      t.integer :year
      t.boolean :available
      t.string :password_digest
      t.string :string
      t.string :profile_image

      t.timestamps
    end
  end
end
