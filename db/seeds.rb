if Rails.env.development?
  AdminUser.create_with(password: 'password', password_confirmation: 'password')
           .find_or_create_by(email: 'admin@example.com')
end

author = Author.create!(
  name: "Inna", 
  position: "Manager")

6.times do |n|
  author.posts.create!(
    title: "Dedicated Team - is it an Art or a Science?",
    body: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem. Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet nibh. Donec sodales sagittis magna. Sed consequat, leo eget bibendum sodales, augue velit cursus nunc",
    image_link: "blog/post_img_#{n+1}"
    )
end

32.times do
  author.posts.create!(
    title: "Dedicated Team - is it an Art or a Science?", 
    body: "Our world is full of the eternal questions. What do we live for? Is there a life beyond Earth? Whom does dedicated team model work for?...",
    image_link: "blog/post_img_1"
    )
end

puts 'Successfully completed!!!'