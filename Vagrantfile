Vagrant::Config.run do |config|
  config.vm.box = "precise32"

  config.vm.forward_port 3000, 3000

  config.vm.share_folder "app", "/home/vagrant/app", "app"

  # allow for symlinks in the testapp folder
  config.vm.customize ["setextradata", :id, "VBoxInternal2/SharedFoldersEnableSymlinksCreate/testapp", "1"]
  config.vm.customize ["modifyvm", :id, "--memory", 512]

  config.vm.provision :chef_solo do |chef|
    chef.cookbooks_path = "cookbooks"
    chef.add_recipe "apt"
    chef.add_recipe "mongodb"
    chef.add_recipe "build-essential"
    chef.add_recipe "nodejs::install_from_package"
    chef.json = {
      "nodejs" => {
        "version" => "0.8.0"
        # uncomment the following line to force
	# recent versions (> 0.8.4) to be built from
	# the source code
	# , "from_source" => true
      }
    }
  end
end
