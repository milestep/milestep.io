FactoryBot.define do
  factory :post do
    title { 'Dedicated Team - is it an Art or a Science?' }
    body { 'Our world is full of the eternal questions. What do we live for? Is there a life beyond Earth? Whom does dedicated team model work for?...' }
    thumbnail_image { File.open(File.join(Rails.root.join('app', 'assets', 'images', 'blog', 'post_img_1.jpg'))) }
    main_image { File.open(File.join(Rails.root.join('app', 'assets', 'images', 'blog', 'post', 'main_post_image.jpg'))) }
    author
  end
end