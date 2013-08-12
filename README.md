Overview
--------
The repository provides a Leaflet [(1)] based web frontend to the Open Source Routing Machine (Project-OSRM [(2)]).
The frontend is implemented in Javascript.
Data is fetched from routing and geocoding servers using JSONP queries.
The website is XHTML 1.0 Strict compliant.
A deployed version of the the web frontend can be seen at [(3)].


Setup
-----
The frontend for OSRM is a pure javascript application and needs no additional server support other than servering files via HTTP.
Folllowing are the steps for an example installation on an Ubuntu server running Apache:

Download repository from GitHub (as root):
```
  cd /usr/local
  git clone https://github.com/DennisSchiefer/Project-OSRM-Web
  chmod 755 -R Project-OSRM-Web
  cd Project-OSRM-Web/WebContent
```
  
Link content for Apache to serve (as root):
```
  cd /var/www
  ln -s /usr/local/Project-OSRM-Web/WebContent osrm
```
  
The frontend should be available on your server at:
```
  http://<your-server>/osrm/main.html
```
  
If required, edit `OSRM.config.js` to change multiple settings.
By default the frontend uses the project-osrm infrastructure (routing server, data timestamps, url shortener).
This should be changed to your locations.

Note that our url shortener only accepts urls pointing to the official project-osrm website.
Though, it is possible to either switch to another shortening service or disable the url shortener entirely if required.


Branches
--------
* The `master` branch will always point to the latest released version of the frontend.
* The `develop` branch should always point to a working version with new features and bugfixes (think of it as a nightly-build).
* Other branches contain various work in progress.


Bugtracking
-----------
Please use the OSRM-Project bug tracker [(4)] for submitting any bug reports or feature requests.


Contribute
----------
If you like to contribute, simply fork the project and start coding.
It is best practice to create a new branch (from the current develop branch!) with a descriptive name for your contributions.
When you are done, send a pull request from that branch.
With this workflow, each pull request is isolated and can be easily merged.


Compatibility
-------------
The frontend has been tested with Firefox 2.0+, Internet Explorer 8+ and Chrome 18+.
Certain visuals like rounded corners or moving boxes only show up in more recent browser versions.
The frontend will not work with Internet Explorer 6 or 7.
As of Leaflet 0.6.x, dragging the map is no longer fully functional in very old browsers, such as Firefox 2.x. 
This will not be fixed.


References
----------
[(1)] Cloudmade Leaflet: http://leaflet.cloudmade.com/  
[(2)] Project OSRM: http://project-osrm.org/  
[(3)] Project OSRM Frontend: http://map.project-osrm.org/  
[(4)] Project OSRM Bugtracker: https://github.com/DennisOSRM/Project-OSRM/issues/


[(1)]: http://leaflet.cloudmade.com/ "Cloudmade Leaflet"
[(2)]: http://project-osrm.org/ "Project OSRM"
[(3)]: http://map.project-osrm.org/ "Project-OSRM Frontend" 
[(4)]: https://github.com/DennisOSRM/Project-OSRM/issues/ "Project-OSRM Bugtracker"