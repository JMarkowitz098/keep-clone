# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


ApplicationRecord.transaction do
    User.destroy_all;
    Note.destroy_all

    User.create!(email: "superman@gmail.com",  password: "greenrock")
    User.create!(email: "bluebeetle@gmail.com",  password: "scarab")
    User.create!(email: "batman@gmail.com",  password: "moneymoney")

    Note.create!(title: "Rescue Louis", body: "She has been kidnapped by Lex Luxor! I must save her!",
                author_id: User.first.id)
    Note.create!(title: "Walk Krypto", body: "Make sure he doesn't pee in the neighbors yard again!",
                author_id: User.first.id, position: 2)
    Note.create!(title: "", body: "account: gogome! pw: greenrock",
                author_id: User.first.id, position: 3)
end
