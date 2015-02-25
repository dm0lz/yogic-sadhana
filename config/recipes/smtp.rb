namespace :smtp_config do
  task :symlink, :roles => :app do
    run "ln -nfs #{shared_path}/config/smtp.yml #{release_path}/config/smtp.yml"
  end
end