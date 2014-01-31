'use strict';

module.exports = function (grunt) {
    grunt.loadNpmTasks('grunt-contrib');
    grunt.loadNpmTasks('grunt-express-server');
    grunt.loadNpmTasks('grunt-mocha');
    grunt.loadNpmTasks('grunt-karma');
//    grunt.loadNpmTasks('grunt-contrib-clean');
//    grunt.loadNpmTasks('grunt-contrib-copy');
//    grunt.loadNpmTasks('grunt-express-server');
//    grunt.loadNpmTasks('grunt-contrib-watch');

    var path = require('path');

    var serverPort = 5555;

    var buildDir = 'build';
    var staticAssetsDir = 'assets';
    var serverDir = 'server';
    var getServerFilePath = function(file){
        return path.join(serverDir, file);
    }

    var getAssetRelativeDirs = function(parentDir){
        return {
            images: path.join(parentDir, 'images'),
            scripts: path.join(parentDir, 'scripts'),
            styles: path.join(parentDir, 'styles')
        };
    };
    var getBuiltAssetsRelativeDirs = function(){
        return getAssetRelativeDirs(path.join(buildDir, 'assets'));
    }
    var getStaticAssetsRelativeDirs = function(){
        return getAssetRelativeDirs(staticAssetsDir);
    }


    // Project configuration.
    var gruntInitConfig = {
        pkg: grunt.file.readJSON('package.json'),
        clean: [buildDir],
        copy: {
            build: {
                files: [
                    {cwd: getStaticAssetsRelativeDirs().images, src: [ '**/*' ], expand: true, dest: getBuiltAssetsRelativeDirs().images},
                    {cwd: getStaticAssetsRelativeDirs().styles, src: [ '**/*' ], expand: true, dest: getBuiltAssetsRelativeDirs().styles},
                ]
            }
        },
        express: {
            options: {
                port: serverPort
            },
            dev: {
                options: {
                    script: getServerFilePath('server.js'),
                    node_env: 'development'
                }
            },
            prod: {
                options: {
                    script: getServerFilePath('server.js'),
                    node_env: 'production'
                }
            },
            test: {
                options: {
                    script: getServerFilePath('server.js')
                }
            }
        },
        karma: {
            options: {
                configFile: 'client/test/karma/karma.conf.js'
            },
            tdd: {
                background: false,
                singleRun: false,   // keep watching/running
                autoWatch: true
            },
            build: {
                singleRun: true,    // just run once
                autoWatch: false    // no watching
            },
            server: {
                background: false,
                singleRun: true,   // keep running
                autoWatch: false    // watch task does this
            }
        },
        mocha: {
            options: {
                mocha: {
                    ignoreLeaks: false
                },
                log: true,
                timeout: 5000,
                run: true
            },
            all: [ "client/test/mocha-requirejs/index.html" ]
        },
        watch: {
            tdd: {
                files: ['server/**/*.js', 'client/**/*.js', '**/*.css'],
                tasks: ['karma:server', 'express:dev'],
                options: {
                    span: false
                }
            }
        }
    };
    grunt.initConfig(gruntInitConfig);


    //grunt.log.writeln("\n\nGRUNT",grunt.task);
    grunt.registerTask('build', [ 'clean', 'copy', 'karma:build' ]);
    grunt.registerTask('tdd', [  'karma:tdd' ])
    grunt.registerTask('server', [ 'karma:server', 'express:dev', 'watch' ])


};