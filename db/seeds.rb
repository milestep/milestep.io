if Rails.env.development?
  AdminUser.create_with(password: 'password', password_confirmation: 'password')
           .find_or_create_by(email: 'admin@example.com')
end

puts 'Successfully completed!!!'
