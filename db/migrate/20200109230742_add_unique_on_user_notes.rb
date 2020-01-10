class AddUniqueOnUserNotes < ActiveRecord::Migration[5.2]
  def change
    remove_column :notes, :position
    add_column :notes, :position, :integer, null: false
    add_index :notes, [:author_id, :position], unique: true
    add_index :notes, :position
  end
end
