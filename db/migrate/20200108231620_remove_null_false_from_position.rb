class RemoveNullFalseFromPosition < ActiveRecord::Migration[5.2]
  def change
    change_column :notes, :position, :integer, null: true
  end
end
