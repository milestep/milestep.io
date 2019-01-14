if Rails.env.development?
  AdminUser.destroy_all
  Author.destroy_all

  AdminUser.create_with(password: 'password', password_confirmation: 'password')
           .find_or_create_by(email: 'admin@example.com')

  author = Author.create!(
    name: 'Inna',
    position: 'Manager')

  32.times do |n|
    author.posts.create!(
      title: "Dedicated Team - is it an Art or a Science?copy #{n}",
      body: 'Our world is full of the eternal questions. What do we live for? Is there a life beyond Earth? Whom does dedicated team model work for?...',
        thumbnail_image: File.open(File.join(Rails.root.join('app', 'assets', 'images', 'blog', 'post_img_1.jpg'))),
        main_image: File.open(File.join(Rails.root.join('app', 'assets', 'images', 'blog', 'post', 'main_post_image.jpg')))
    )
  end

  6.times do |n|
    author.posts.create!(
      title: "Dedicated Team - is it an Art or a Science? #{n}",
      body: '<p style="text-align: justify;"><span style="font-family:Trebuchet MS,Helvetica,sans-serif;"><span style="font-size:18px;">So, you arrive at a decision that your in-house staff needs an extension with offshore software development team. This article will help you to determine all vulnerabilities&nbsp;and find out the ways to cut them. Besides, it will give clear understanding to all benefits of such cooperation.<br />
      Let&rsquo;s overview the risks that are waiting for you in the process of cooperation with a dedicated team outside of your country.</span></span></p>

      <p style="text-align: justify;"><span style="font-family:Trebuchet MS,Helvetica,sans-serif;"><span style="font-size:18px;"><meta charset="utf-8" /></span></span></p>

      <h3 dir="ltr" style="text-align: justify;"><span style="font-family:Trebuchet MS,Helvetica,sans-serif;"><span style="font-size:18px;"><strong>1. Increasing monthly payments</strong></span></span></h3>

      <p style="text-align: justify;"><span style="font-family:Trebuchet MS,Helvetica,sans-serif;"><span style="font-size:18px;">One of the main advantages of working with an outsourcing company is retrenchment of costs. To be sure that you will stay on budget you should:</span></span></p>

      <ul dir="ltr">
        <li style="text-align: justify;">◦&nbsp;<span style="font-family:Trebuchet MS,Helvetica,sans-serif;"><span style="font-size:18px;">Have a clear vision of what you want to develop with the help of outsourcing company;</span></span></li>
        <li style="text-align: justify;">◦&nbsp;<span style="font-family:Trebuchet MS,Helvetica,sans-serif;"><span style="font-size:18px;">Have the final goal of that creation;</span></span></li>
        <li style="text-align: justify;">◦&nbsp;<span style="font-family:Trebuchet MS,Helvetica,sans-serif;"><span style="font-size:18px;">Define functions it must perform;</span></span></li>
        <li style="text-align: justify;">◦&nbsp;<span style="font-family:Trebuchet MS,Helvetica,sans-serif;"><span style="font-size:18px;">Estimate the time duration of cooperation with offshore members.</span></span></li>
      </ul>

      <p dir="ltr" style="text-align: justify;"><span style="font-family:Trebuchet MS,Helvetica,sans-serif;"><span style="font-size:18px;">When you know the scope of work and the time frames, you will reduce the number of potential candidates for collaboration. This might help you to assess the project budget better. </span></span></p>

      <h3 dir="ltr" style="text-align: justify;"><span style="font-family:Trebuchet MS,Helvetica,sans-serif;"><span style="font-size:18px;"><strong>2. The right choice of the development contractor</strong></span></span></h3>

      <p dir="ltr" style="text-align: justify;"><span style="font-family:Trebuchet MS,Helvetica,sans-serif;"><span style="font-size:18px;">This necessary aspect must be considered carefully. To decrease this risk you need to follow this instruction: </span></span></p>

      <ul dir="ltr">
        <li style="text-align: justify;">◦&nbsp;<span style="font-family:Trebuchet MS,Helvetica,sans-serif;"><span style="font-size:18px;">First&nbsp;off, you need to pick a few outsourcing companies that fit your requirements. Your friend&#39;s and partner&#39;s recommendations will ease this challenge; </span></span></li>
        <li style="text-align: justify;">◦&nbsp;<span style="font-family:Trebuchet MS,Helvetica,sans-serif;"><span style="font-size:18px;">Pay attention to possible cultural differences between you and your future partner. The cooperation between members of the same type of culture will be more successful. American, European and Australian culture belong to the Western type. The culture of the Middle East countries, Central, South-East Asia and North Africa - is the Eastern type;</span></span></li>
        <li style="text-align: justify;">◦&nbsp;<span style="font-family:Trebuchet MS,Helvetica,sans-serif;"><span style="font-size:18px;">Thereafter take a close look at the candidate&#39;s websites, check out their portfolio. The final product speaks better than any advertising. Download the application or visit the website and evaluate the quality indicators of performed work. Look among the completed projects similar to those you want to do. Pay attention to technologies the company operates with;</span></span></li>
        <li style="text-align: justify;">◦&nbsp;&nbsp;<span style="font-family:Trebuchet MS,Helvetica,sans-serif;"><span style="font-size:18px;">Identify the company&rsquo;s previous partners: find the testimonials on forums&nbsp;and blogs;</span></span></li>
        <li style="text-align: justify;">◦<span style="font-family:Trebuchet MS,Helvetica,sans-serif;"><span style="font-size:18px;">To get a better understanding of the company you can visit its social network pages. Active pages that have a positive interaction with followers, characterize the company as reliable;</span></span></li>
        <li style="text-align: justify;">◦&nbsp;<span style="font-family:Trebuchet MS,Helvetica,sans-serif;"><span style="font-size:18px;">A personal meeting with a company&#39;s representative could additionally increase your confidence in a chosen partner.</span></span></li>
      </ul>

      <h3 dir="ltr" style="text-align: justify;"><span style="font-family:Trebuchet MS,Helvetica,sans-serif;"><span style="font-size:18px;"><strong>3. The security problem</strong></span></span></h3>

      <p dir="ltr" style="text-align: justify;"><span style="font-family:Trebuchet MS,Helvetica,sans-serif;"><span style="font-size:18px;">As you know, you will need to share your confidential information with an offshore dedicated team you will be working with. Do you want to protect your information? We are sure you do. Follow this list to decrease the security risks and ensure the safety of your data:</span></span></p>

      <ul dir="ltr">
        <li style="text-align: justify;">◦&nbsp;<span style="font-family:Trebuchet MS,Helvetica,sans-serif;"><span style="font-size:18px;">Make sure your cooperation does not violate local laws and that it is compliant with international norms;</span></span></li>
        <li style="text-align: justify;">◦&nbsp;<span style="font-family:Trebuchet MS,Helvetica,sans-serif;"><span style="font-size:18px;">Sign a non-disclosure agreement (NDA);</span></span></li>
        <li style="text-align: justify;">◦&nbsp;<span style="font-family:Trebuchet MS,Helvetica,sans-serif;"><span style="font-size:18px;">Discuss the process of storing and encrypting the confidential data;</span></span></li>
        <li style="text-align: justify;">◦&nbsp;<span style="font-family:Trebuchet MS,Helvetica,sans-serif;"><span style="font-size:18px;">Document your rights on the end product of development, which will entirely pass into your possession at the end of the cooperation.</span></span></li>
      </ul>

      <h3 dir="ltr" style="text-align: justify;"><span style="font-family:Trebuchet MS,Helvetica,sans-serif;"><span style="font-size:18px;"><strong>4. Communication difficulties</strong></span></span></h3>

      <p dir="ltr" style="text-align: justify;"><span style="font-family:Trebuchet MS,Helvetica,sans-serif;"><span style="font-size:18px;">Good relationships between colleagues have great importance for communication. English language skills is the key to common understanding. To decrease this risk, you can:</span></span></p>

      <ul dir="ltr">
        <li style="text-align: justify;">◦&nbsp;<span style="font-family:Trebuchet MS,Helvetica,sans-serif;"><span style="font-size:18px;">&nbsp;Check each eventual member of your dedicated team on language proficiency;</span></span></li>
        <li style="text-align: justify;">◦&nbsp;&nbsp;<span style="font-family:Trebuchet MS,Helvetica,sans-serif;"><span style="font-size:18px;">Create an informal communication channel to form a team spirit;</span></span></li>
        <li style="text-align: justify;">◦&nbsp;<span style="font-family:Trebuchet MS,Helvetica,sans-serif;"><span style="font-size:18px;">Give and take a feedback from your offshore partners, that allows you to keep a finger on the pulse of all working processes and opens the way to improve your product.</span></span></li>
      </ul>

      <p dir="ltr" style="text-align: justify;"><span style="font-family:Trebuchet MS,Helvetica,sans-serif;"><span style="font-size:18px;">When your team members understand each other and have a trusting relationship, they will discuss some controversial items more readily and the development process might move faster.</span></span></p>

      <h3 dir="ltr" style="text-align: justify;"><span style="font-family:Trebuchet MS,Helvetica,sans-serif;"><span style="font-size:18px;"><strong>5. Low work process control</strong></span></span></h3>

      <p dir="ltr" style="text-align: justify;"><span style="font-family:Trebuchet MS,Helvetica,sans-serif;"><span style="font-size:18px;">Different countries, different time zones - all these put imprint onto a workflow of a remote dedicated team. What can you do to get the teamwork process under control? Your actions are:</span></span></p>

      <ul dir="ltr">
        <li style="text-align: justify;">◦&nbsp;&nbsp;<span style="font-family:Trebuchet MS,Helvetica,sans-serif;"><span style="font-size:18px;">To set up working hours when team members have to be available for communication;</span></span></li>
        <li style="text-align: justify;">◦&nbsp;&nbsp;<span style="font-family:Trebuchet MS,Helvetica,sans-serif;"><span style="font-size:18px;">To assign tools for communication;</span></span></li>
        <li style="text-align: justify;">◦&nbsp;&nbsp;<span style="font-family:Trebuchet MS,Helvetica,sans-serif;"><span style="font-size:18px;">To specify the number of video calls and progress reports in a week.</span></span></li>
      </ul>

      <h3 dir="ltr" style="text-align: justify;"><span style="font-family:Trebuchet MS,Helvetica,sans-serif;"><span style="font-size:18px;"><strong>6. Difficulties in assessing the effectiveness of performed work</strong></span></span></h3>

      <p dir="ltr" style="text-align: justify;"><span style="font-family:Trebuchet MS,Helvetica,sans-serif;"><span style="font-size:18px;">When the staff is outside the office, you can&#39;t evaluate performance in the process of development physically. If you want to assure yourself that everything is going in accordance to the plan, you ought to:</span></span></p>

      <ul dir="ltr">
        <li style="text-align: justify;">◦&nbsp;&nbsp;<span style="font-family:Trebuchet MS,Helvetica,sans-serif;"><span style="font-size:18px;">Split the development process into pieces and determine a target of each of them. The effectiveness depends on a level of each goal implementation; </span></span></li>
        <li style="text-align: justify;">◦&nbsp;&nbsp;<span style="font-family:Trebuchet MS,Helvetica,sans-serif;"><span style="font-size:18px;">Use project management and productivity tracking tools to operate your remote team of developers.</span></span></li>
      </ul>

      <h3 dir="ltr" style="text-align: justify;"><span style="font-family:Trebuchet MS,Helvetica,sans-serif;"><span style="font-size:18px;"><strong>In summary</strong></span></span></h3>

      <p dir="ltr" style="text-align: justify;"><span style="font-family:Trebuchet MS,Helvetica,sans-serif;"><span style="font-size:18px;">The cooperation with an offshore dedicated team has many advantages, let&rsquo;s overview them:</span></span></p>

      <ul dir="ltr">
        <li style="text-align: justify;">◦&nbsp;&nbsp;<span style="font-family:Trebuchet MS,Helvetica,sans-serif;"><span style="font-size:18px;">Access to a workforce with the necessary experience and expertise; </span></span></li>
        <li style="text-align: justify;">◦&nbsp;&nbsp;<span style="font-family:Trebuchet MS,Helvetica,sans-serif;"><span style="font-size:18px;">You don&#39;t need to hire people - your partners will do that job;</span></span></li>
        <li style="text-align: justify;">◦&nbsp;&nbsp;<span style="font-family:Trebuchet MS,Helvetica,sans-serif;"><span style="font-size:18px;">The rate flexibility allows you to save money on salaries;</span></span></li>
        <li style="text-align: justify;">◦&nbsp;&nbsp;<span style="font-family:Trebuchet MS,Helvetica,sans-serif;"><span style="font-size:18px;">To reserve money on additional job places.</span></span></li>
      </ul>

      <p dir="ltr" style="text-align: justify;"><span style="font-family:Trebuchet MS,Helvetica,sans-serif;"><span style="font-size:18px;">Now you know what difficulties can be on your way and clearly understand the best sides of such team collaboration. It is time to make the decision. We can say for sure that such cooperation has many fans nowadays, as it is financially profitable and does not restrict you geographically in choosing of real professionals.</span></span></p>
      ',
      thumbnail_image: File.open(File.join(Rails.root.join('app', 'assets', 'images', 'blog', "post_img_#{n+1}.jpg"))),
      main_image: File.open(File.join(Rails.root.join('app', 'assets', 'images', 'blog', 'post', 'main_post_image.jpg')))
    )
  end

  puts 'Successfully completed!!!'
end
