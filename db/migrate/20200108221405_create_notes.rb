class CreateNotes < ActiveRecord::Migration[5.2]
  def change
    create_table :notes do |t|
      t.string :title
      t.string :body
      t.integer :position, null: false
      t.string :color, null: false
      t.integer :author_id, null: false

      t.timestamps
    end

    add_index :notes, :title
    add_index :notes, :body
    add_index :notes, :position, unique: true
    add_index :notes, :author_id, unique: true
  end
end
