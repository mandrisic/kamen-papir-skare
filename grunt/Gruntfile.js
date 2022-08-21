module.exports = function(grunt) {

	//project configurations
	grunt.initConfig({

		uglify : {

			options : {
				banner : "/*! app.min.js file */\n"
			},
			build : {
				src : ["app.js"],
				dest : "dist/app.min.js"
			}

		}

	});

	grunt.loadNpmTasks('grunt-contrib-uglify');

	grunt.registerTask("default", ["uglify"]);

};