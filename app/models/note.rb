class Note < ApplicationRecord
    validates :position, :author_id, presence: true, uniqueness: true
    validates :color, presence: true

    # has_many :tags
    belongs_to :author,
        class_name: :User

end
