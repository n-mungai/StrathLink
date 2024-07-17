class CreateArticles < ActiveRecord::Migration[7.1]
  def change
    create_table :articles do |t|
      t.string :title, null: false
      t.string :content, null: false
      t.string :topic, null: false
      t.references :student, null: false, foreign_key: true
      t.string :writer

      t.timestamps
    end
  end
end
