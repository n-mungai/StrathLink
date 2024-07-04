class Student < ApplicationRecord
      # relationships with other tables
      has_many :sent_messages, class_name: 'Message', foreign_key: 'sender_id'
      has_many :received_messages, class_name: 'Message', foreign_key: 'receiver_id'

      has_many :articles
end
