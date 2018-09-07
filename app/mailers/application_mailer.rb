class ApplicationMailer < ActionMailer::Base
  default from: 'postmaster@mg.milestep.io'
  layout 'mailer'
end
