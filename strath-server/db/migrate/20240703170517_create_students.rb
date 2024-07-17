class CreateStudents < ActiveRecord::Migration[7.1]
  def change
    create_table :students do |t|
      t.string :name, null: false
      t.string :email, null: false
      t.string :interests, null: false
      t.string :course, null: false
      t.integer :year, null: false
      t.boolean :available
      t.string :password_digest, null: false
      t.string :profile_image

      t.timestamps
    end

    add_index :students, :email, unique: true
  end
end
