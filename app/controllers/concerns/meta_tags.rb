module MetaTags  
  def default_meta_tags
    { 
       twitter_card: "summary" ,
       twitter_description: "MileStep is an outsourcing company that provides software development services, ranging from technical IT consultancy to extension your in-house staff using dedicated team, creating solutions for custom software and offering support & maintenance to achieve your business goals" ,
       twitter_title: "MileStep | Web & Mobile App Development Company" ,
       twitter_image: "https://i.imgur.com/hDuPtvj.jpg" ,
       og_locale: "en_US" ,
       og_title: "MileStep | Web & Mobile App Development Company" ,
       og_type: "website" ,
       og_description: "MileStep is an outsourcing company that provides software development services, ranging from technical IT consultancy to extension your in-house staff using dedicated team, creating solutions for custom software and offering support & maintenance to achieve your business goals" ,
       og_url: "https://milestep.io/" ,
       og_site_name: "" ,
       og_image: "https://i.imgur.com/yERJpYN.png" 
      }
    end
    
    def merge_into_default_meta_tags(new_tags)  
      default_meta_tags.merge(new_tags)
    end
  end