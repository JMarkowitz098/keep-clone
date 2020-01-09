class ChangePositionDefault < ActiveRecord::Migration[5.2]
  def change
    change_column_default :notes, :position, nil
  end
end
