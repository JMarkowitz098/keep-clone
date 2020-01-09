class ChangeDefualtColor < ActiveRecord::Migration[5.2]
  def change
    change_column_default :notes, :color, "yellow"
    change_column_default :notes, :position, 1
  end
end
