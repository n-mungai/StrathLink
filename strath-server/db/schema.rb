# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema[7.1].define(version: 2024_07_04_133545) do
  create_table "articles", force: :cascade do |t|
    t.string "title", null: false
    t.string "content", null: false
    t.string "topic", null: false
    t.integer "student_id", null: false
    t.string "writer"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["student_id"], name: "index_articles_on_student_id"
  end

  create_table "messages", force: :cascade do |t|
    t.text "content", null: false
    t.integer "sender_id", null: false
    t.integer "receiver_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["receiver_id"], name: "index_messages_on_receiver_id"
    t.index ["sender_id"], name: "index_messages_on_sender_id"
  end

  create_table "students", force: :cascade do |t|
    t.string "name", null: false
    t.string "email", null: false
    t.string "interests", null: false
    t.string "course", null: false
    t.integer "year", null: false
    t.boolean "available"
    t.string "password_digest", null: false
    t.string "profile_image"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["email"], name: "index_students_on_email", unique: true
  end

  add_foreign_key "articles", "students"
  add_foreign_key "messages", "students", column: "receiver_id"
  add_foreign_key "messages", "students", column: "sender_id"
end
