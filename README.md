html5-config
============

An HTML configuration app for Society Pro

This app offers an HTML interface to configure SoPro through japi calls.
This is a source repository. There is a matching [distribution repository](https://github.com/sopro-dist/html5-config).

Usage
-----

Since SoPro version 0.1.1.9, this app is included in the installer for SoPro.

Development
-----------

If your copy of SoPro doesn't have this app, and you want to try it:

    Get the repo:
    $ git clone https://github.com/SocietyPro/html5-config
    
    Install dependencies:
    $ npm install -g bower           # if you don't already have bower
    $ bower install
    
    Point the SoPro browser to the index.html file: 
    file:///C:/dev/src/sopro/html5-config/index.html
    

Build for distribution
----------------------

Warning: Be aware that the Gruntfile `clean` step destroys files in this project.  
Don't run the Gruntfile if you have unpushed changes you want to keep.

The results of the grunt distribution script are packaged and distributed at [the dist repo](https://github.com/sopro-dist/html5-config).

    $ npm install -g grunt-cli       # if you don't already have grunt
    $ cd html5-config                # root folder
    $ grunt
