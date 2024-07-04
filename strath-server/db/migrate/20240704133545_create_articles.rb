class CreateArticles < ActiveRecord::Migration[7.1]
  def change
    create_table :articles do |t|
      t.string :title
      t.string :content
      t.string :topic
      t.references :student, null: false, foreign_key: true
      t.string :writer

      t.timestamps
    end
  end
end
