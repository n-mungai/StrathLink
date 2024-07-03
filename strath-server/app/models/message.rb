class Message < ApplicationRecord
    belongs_to :sender, class_name: 'Student', foreign_key: 'sender_id'
    belongs_to :receiver, class_name: 'Student', foreign_key: 'receiver_id'
  
    validates :content, presence: true
end
