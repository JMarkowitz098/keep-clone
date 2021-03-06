class Note < ApplicationRecord
    validates :author_id, presence: true
    validates :position, length: { minimum: 0, allow_nil: true }
    validates :author_id, uniqueness: { scope: :position }
    # validates :color, presence: true #Can validate when I have a front end

    # has_many :tags
    belongs_to :author,
        class_name: :User

    before_validation :set_position

    def set_position
        self.position ||= 1
    end

end
