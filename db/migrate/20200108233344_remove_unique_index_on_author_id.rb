class RemoveUniqueIndexOnAuthorId < ActiveRecord::Migration[5.2]
  def change
    remove_index :notes, :author_id
    add_index :notes, :author_id
  end
end
