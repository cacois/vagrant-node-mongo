This repo is a bootstrap vagrant-based project using Node.js and MongoDB. 

By default, it uses the precise32 vagrant base box. To start your project, complete the following steps:

* Download and install vagrant, if you haven't already (http://downloads.vagrantup.com/)
    
    vagrant box add base http://files.vagrantup.com/precise32.box
    git clone https://github.com/cacois/vagrant-node-mongo.git
    cd vagrant-node-mongo
    vagrant up

Wait a few moments while your VM is powered on and configured. Now you can access your VM using

    vagrant ssh
    cd app
    node app

Now you can bring up your local browser and browse to http://localhost:3000 to see your Node app in action!
