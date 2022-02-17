class ChangeBookmarkCommentDataType < ActiveRecord::Migration[6.1]
  def change
    remove_column :bookmarks, :comment
    add_column :bookmarks, :comment, :text
  end
end
