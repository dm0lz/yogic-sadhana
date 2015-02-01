# encoding: UTF-8
# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20150201132513) do

  create_table "admins", force: true do |t|
    t.string   "email",                  default: "", null: false
    t.string   "encrypted_password",     default: "", null: false
    t.string   "reset_password_token"
    t.datetime "reset_password_sent_at"
    t.datetime "remember_created_at"
    t.integer  "sign_in_count",          default: 0,  null: false
    t.datetime "current_sign_in_at"
    t.datetime "last_sign_in_at"
    t.string   "current_sign_in_ip"
    t.string   "last_sign_in_ip"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  add_index "admins", ["email"], name: "index_admins_on_email", unique: true
  add_index "admins", ["reset_password_token"], name: "index_admins_on_reset_password_token", unique: true

  create_table "chapter_translations", force: true do |t|
    t.integer  "chapter_id",  null: false
    t.string   "locale",      null: false
    t.datetime "created_at"
    t.datetime "updated_at"
    t.string   "title"
    t.text     "description"
  end

  add_index "chapter_translations", ["chapter_id"], name: "index_chapter_translations_on_chapter_id"
  add_index "chapter_translations", ["locale"], name: "index_chapter_translations_on_locale"

  create_table "chapters", force: true do |t|
    t.string   "title"
    t.text     "description"
    t.datetime "created_at"
    t.datetime "updated_at"
    t.integer  "course_id"
  end

  add_index "chapters", ["course_id"], name: "index_chapters_on_course_id"

  create_table "course_translations", force: true do |t|
    t.integer  "course_id",   null: false
    t.string   "locale",      null: false
    t.datetime "created_at"
    t.datetime "updated_at"
    t.string   "title"
    t.text     "description"
  end

  add_index "course_translations", ["course_id"], name: "index_course_translations_on_course_id"
  add_index "course_translations", ["locale"], name: "index_course_translations_on_locale"

  create_table "courses", force: true do |t|
    t.string   "title"
    t.text     "description"
    t.datetime "created_at"
    t.datetime "updated_at"
    t.string   "picture"
  end

  create_table "media", force: true do |t|
    t.string   "title"
    t.text     "description"
    t.string   "audio"
    t.integer  "mediumable_id"
    t.string   "mediumable_type"
    t.datetime "created_at"
    t.datetime "updated_at"
    t.string   "video"
  end

  add_index "media", ["mediumable_id", "mediumable_type"], name: "index_media_on_mediumable_id_and_mediumable_type"

  create_table "medium_translations", force: true do |t|
    t.integer  "medium_id",   null: false
    t.string   "locale",      null: false
    t.datetime "created_at"
    t.datetime "updated_at"
    t.string   "title"
    t.text     "description"
    t.string   "audio"
    t.string   "video"
  end

  add_index "medium_translations", ["locale"], name: "index_medium_translations_on_locale"
  add_index "medium_translations", ["medium_id"], name: "index_medium_translations_on_medium_id"

  create_table "practice_translations", force: true do |t|
    t.integer  "practice_id", null: false
    t.string   "locale",      null: false
    t.datetime "created_at"
    t.datetime "updated_at"
    t.string   "title"
    t.text     "description"
  end

  add_index "practice_translations", ["locale"], name: "index_practice_translations_on_locale"
  add_index "practice_translations", ["practice_id"], name: "index_practice_translations_on_practice_id"

  create_table "practices", force: true do |t|
    t.string   "title"
    t.text     "description"
    t.integer  "chapter_id"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  add_index "practices", ["chapter_id"], name: "index_practices_on_chapter_id"

  create_table "theories", force: true do |t|
    t.string   "title"
    t.text     "description"
    t.integer  "chapter_id"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  add_index "theories", ["chapter_id"], name: "index_theories_on_chapter_id"

  create_table "theory_translations", force: true do |t|
    t.integer  "theory_id",   null: false
    t.string   "locale",      null: false
    t.datetime "created_at"
    t.datetime "updated_at"
    t.string   "title"
    t.text     "description"
  end

  add_index "theory_translations", ["locale"], name: "index_theory_translations_on_locale"
  add_index "theory_translations", ["theory_id"], name: "index_theory_translations_on_theory_id"

  create_table "users", force: true do |t|
    t.string   "email",                  default: "", null: false
    t.string   "encrypted_password",     default: "", null: false
    t.string   "reset_password_token"
    t.datetime "reset_password_sent_at"
    t.datetime "remember_created_at"
    t.integer  "sign_in_count",          default: 0,  null: false
    t.datetime "current_sign_in_at"
    t.datetime "last_sign_in_at"
    t.string   "current_sign_in_ip"
    t.string   "last_sign_in_ip"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  add_index "users", ["email"], name: "index_users_on_email", unique: true
  add_index "users", ["reset_password_token"], name: "index_users_on_reset_password_token", unique: true

end
