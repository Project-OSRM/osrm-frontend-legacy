module.exports = function(grunt) {


  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    uglify: {
      OSRM: {
        files: {
          'dist/OSRM.js': [
            "Webcontent/base/leaflet/L.Additions.js",
            "Webcontent/base/leaflet/L.Bugfixes.js",
            "Webcontent/base/leaflet/L.LabelMarker.js",
            "Webcontent/base/leaflet/L.LabelMarkerIcon.js",
            "Webcontent/OSRM.base.js",
            "Webcontent/OSRM.config.js",
            "Webcontent/utils/OSRM.browsers.js",
            "Webcontent/utils/OSRM.classes.js",
            "Webcontent/main.js",
            "Webcontent/base/osrm/OSRM.Control.Attribution.js",
            "Webcontent/base/osrm/OSRM.Control.Layers.js",
            "Webcontent/base/osrm/OSRM.Control.Locations.js",
            "Webcontent/base/osrm/OSRM.Control.Zoom.js",
            "Webcontent/base/osrm/OSRM.Control.Map.js",
            "Webcontent/base/osrm/OSRM.Marker.js",
            "Webcontent/base/osrm/OSRM.Route.js",
            "Webcontent/base/OSRM.Map.js",
            "Webcontent/base/OSRM.Markers.js",
            "Webcontent/base/OSRM.Routes.js",
            "Webcontent/base/OSRM.HistoryRoutes.js",
            "Webcontent/gui/OSRM.GUI.js",
            "Webcontent/gui/OSRM.GUIBoxGroup.js",
            "Webcontent/gui/OSRM.GUIBoxHandle.js",
            "Webcontent/gui/OSRM.Selector.js",
            "Webcontent/gui/OSRM.MainGUI.js",
            "Webcontent/gui/OSRM.Notifications.js",
            "Webcontent/routing/OSRM.Routing.js",
            "Webcontent/routing/OSRM.RoutingAlternatives.js",
            "Webcontent/routing/OSRM.RoutingDescription.js",
            "Webcontent/routing/OSRM.RoutingGeometry.js",
            "Webcontent/gui/OSRM.RoutingGUI.js",
            "Webcontent/gui/OSRM.RoutingEngineGUI.js",
            "Webcontent/routing/OSRM.RoutingNoNames.js",
            "Webcontent/base/OSRM.Via.js",
            "Webcontent/base/OSRM.Geocoder.js",
            "Webcontent/utils/OSRM.CSS.js",
            "Webcontent/utils/OSRM.JSONP.js",
            "Webcontent/localization/OSRM.Localization.js",
            "Webcontent/printing/OSRM.Printing.js",
            "Webcontent/utils/OSRM.Utils.js"
          ]
        }
      },
      printing: {
        files: {
          'dist/printing/printing.js': [
            "Webcontent/printing/printing.js",
            "Webcontent/base/leaflet/L.LabelMarker.js",
            "Webcontent/base/leaflet/L.LabelMarkerIcon.js",
            "Webcontent/base/osrm/OSRM.Control.Map.js"
          ]
        }
      },
      qrcodes: {
        files: {
          'dist/qrcodes/qrcodes.js': [
            "Webcontent/qrcodes/qrcodes.js",
            "Webcontent/qrcodes/QRCode.js"
          ],
        }
      },
      localization: {
      files: [{
          expand: true,
          flatten: true,
          src: 'Webcontent/localization/*.js',
          dest: 'dist/localization'
      }]
    }

    },
    copy: {
      images: {
        files: [
          {
            expand: true,
            flatten: true,
            src: ['Webcontent/favicon.ico'],
            dest: 'dist/'
          },
          {
            expand: true,
            flatten: true,
            src: ['Webcontent/images/*'],
            dest: 'dist/images/'
          }
        ]
      },
      cname: {
        files: [
          {
            expand: true,
            flatten: true,
            src: ['CNAME'],
            dest: 'dist/'
          }
        ]
      },
      leaflet: {
        files: [
          {
            expand: true,
            flatten: true,
            src: ['Webcontent/leaflet/images/*'],
            dest: 'dist/leaflet/images/'
          },
          {
            expand: true,
            flatten: true,
            src: ['Webcontent/leaflet/*.css', 'Webcontent/leaflet/leaflet.js'],
            dest: 'dist/leaflet/'
          }
        ]
      }
    },
    cssmin: {
      main: {
        files: {
          'dist/main.css': ['Webcontent/main.css']
        }
      },
      qrcodes: {
        files: {
          'dist/qrcodes/qrcodes.css': ['Webcontent/qrcodes/qrcodes.css']
        }
      },
      printing: {
        files: {
          'dist/printing/printing.css': ['Webcontent/printing/printing.css']
        }
      }
    },
    processhtml: {
      main: {
        files: {
          'dist/index.html': ['Webcontent/main.html']
        }
      },
      qrcodes: {
        files: {
          'dist/qrcodes/qrcodes.html': ['Webcontent/qrcodes/qrcodes.html']
        }
      },
      printing: {
        files: {
          'dist/printing/printing.html': ['Webcontent/printing/printing.html']
        }
      }
    },
    htmlmin: {                                     // Task
      htmlmin: {                                   // Target
        options: {                                 // Target options
          removeComments: true,
          collapseWhitespace: true
        },
        files: {                                   // Dictionary of files
          'dist/index.html': 'dist/index.html',
          'dist/printing/printing.html': 'dist/printing/printing.html',
          'dist/qrcodes/qrcodes.html': 'dist/qrcodes/qrcodes.html'
        }
      }
    },
    imagemin: {                          // Task
      images: {                         // Another target
        files: [{
          expand: true,                  // Enable dynamic expansion
          flatten: true,
          src: ['dist/images/*.{png,jpg,gif}'],   // Actual patterns to match
          dest: 'dist/images/'                    // Destination path prefix
        }]
      },
      leaflet: {                         // Another target
        files: [{
          expand: true,                  // Enable dynamic expansion
          flatten: true,
          src: ['dist/leaflet/images/*.{png,jpg,gif}'],   // Actual patterns to match
          dest: 'dist/leaflet/images/'                    // Destination path prefix
        }]
      }
    },
    jshint: {
      files: ['Gruntfile.js', 'src/**/*.js', 'test/**/*.js'],
      options: {
        // options here to override JSHint defaults
        globals: {
          jQuery: true,
          console: true,
          module: true,
          document: true
        }
      }
    },
    clean: {
      build: {
        src: ["dist"]
      }
    },
    watch: {
      files: ['<%= jshint.files %>'],
      tasks: ['jshint']
    }
  });

  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-processhtml');
  grunt.loadNpmTasks('grunt-contrib-htmlmin');
  grunt.loadNpmTasks('grunt-contrib-imagemin');

  grunt.registerTask('test', ['jshint']);
  grunt.registerTask('default', [
    'clean',
    'jshint',
    'uglify',
    'copy',
    'cssmin',
    'processhtml',
    'htmlmin',
    'imagemin'
    ]
  );

};
