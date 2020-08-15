'use strict';

/**
 * @ngdoc overview
 * @name playerApp
 * @description
 * # playerApp
 *
 * Main module of the application.
 */
var app = angular.module('playerApp', ['ngSanitize']);
    app.controller('playerCtrl', ['$scope', '$interval', '$timeout', function($scope, $interval, $timeout) {
        var thisRef = $scope;
        thisRef.animMode = 'fourparticles';
        thisRef.resetActBool = true;
        thisRef.timeInterval = 0.04 //  in second
        thisRef.currentC1Val = "r1";
        thisRef.currentC2Val = "r2";
        thisRef.runFlag = 1
        var xBase = 90;
        thisRef.oneWayArrowDresc = false;
        thisRef.bothWayArrowDresc = false;
        thisRef.fourparticle = true;
        thisRef.chainOfParticle = false;
        // console.log('saxena',thisRef)
        // thisRef.directionOfVibration = "Direction of vibration of the particles";
        // thisRef.directionOfPropagation = "Direction of travel of the wave";

        thisRef.startMove = function (e) {
            thisRef.bText = e.target.textContent;
            thisRef.directionOfVibration = "Direction of vibration of the particles";
            thisRef.directionOfPropagation = "Direction of travel of the wave";
            thisRef.oneWayArrowDresc = true
            thisRef.bothWayArrowDresc = true
            if (thisRef.bText == "Start") {
                thisRef.runMotionWaves();
                angular.element(e.target).html("Pause");
            }
            if (thisRef.bText == "Pause") {
              angular.element(e.target).html("Continue");
            }
            if (thisRef.bText == "Continue") {
              angular.element(e.target).html("Pause");
            }
          };

          thisRef.drawMotionLines = function () {
           
            //   console.log('drow lines')
          }

          thisRef.runMotionWaves = function () {
              if (thisRef.runFlag == 1) {
                thisRef.drawMotionLines();
                console.log('start motion')
            }
          }

          thisRef.updateCounterInterval = function () {
              console.log('jhvgv')
          }

          thisRef.onC1Change = function (e) {
            var c1 = thisRef.currentC1Val;
            // console.log(c1,'anubhav')
            if(c1 == 'r1'){
                thisRef.fourparticle = true
                thisRef.chainOfParticle = false
                thisRef.directionOfVibration = "";
                thisRef.directionOfPropagation = "";
                thisRef.oneWayArrowDresc = false
                thisRef.bothWayArrowDresc = false
                thisRef.resetUI();
            }
        }

        thisRef.onC2Change = function (e) {
            var c2 = thisRef.currentC2Val;
           console.log(c2)
            if(c2 = 'r2'){
                thisRef.fourparticle = false
                thisRef.chainOfParticle = true
                thisRef.directionOfVibration = "";
                thisRef.directionOfPropagation = "";
                thisRef.oneWayArrowDresc = false
                thisRef.bothWayArrowDresc = false
                angular.element(".ball").removeAttr("style");
                angular.element('.height-indicator').removeAttr("style");
                angular.element(".startsim").html("Start");
            }
        }

          thisRef.resetUI = function () {
            thisRef.timeInterval = 0.04
            // $interval.cancel(thisRef.counterInterval);
            thisRef.directionOfVibration = "";
            thisRef.directionOfPropagation = "";
            thisRef.oneWayArrowDresc = false
            thisRef.bothWayArrowDresc = false
            thisRef.fourparticle = true
            thisRef.chainOfParticle = false
            thisRef.animMode = 'fourparticles';
            angular.element(".ball").removeAttr("style");
            angular.element('.height-indicator').removeAttr("style");
            angular.element(".startsim").html("Start");
          };

        thisRef.resetSim = function () {
            thisRef.resetUI();
        };
    }]).directive('element',function(){
        var dir = {};
        dir.restrict = 'E';
        dir.template= `
        <div class="vibrator"></div>
        <div class="wave" id="wave_1"></div>
        <div class="wave" id="wave_2"></div>
        <div class="wave" id="wave_3"></div>
        <div class="wave" id="wave_4"></div>
        <div class="wave" id="wave_5"></div>
        <div class="wave" id="wave_6"></div>
        <div class="wave" id="wave_7"></div>
        <div class="wave" id="wave_8"></div>
        <div class="wave" id="wave_9"></div>
        <div class="wave" id="wave_10"></div>
        <div class="wave" id="wave_11"></div>
        <div class="wave" id="wave_12"></div>
        <div class="wave" id="wave_13"></div>
        <div class="wave" id="wave_14"></div>
        <div class="wave" id="wave_15"></div>
        <div class="wave" id="wave_16"></div>
        <div class="wave" id="wave_17"></div>
        <div class="wave" id="wave_18"></div>
        <div class="wave" id="wave_19"></div>
        <div class="wave red_particle_wave" id="wave_20"></div>
        <div class="wave" id="wave_21"></div>
        <div class="wave" id="wave_22"></div>
        <div class="wave" id="wave_23"></div>
        <div class="wave" id="wave_24"></div>
        <div class="wave" id="wave_25"></div>
        <div class="wave" id="wave_26"></div>
        <div class="wave" id="wave_27"></div>
        <div class="wave" id="wave_28"></div>
        <div class="wave" id="wave_29"></div>
        <div class="wave blue_particle_wave" id="wave_30"></div>
        <div class="wave" id="wave_31"></div>
        <div class="wave" id="wave_32"></div>
        <div class="wave" id="wave_33"></div>
        <div class="wave" id="wave_34"></div>
        <div class="wave" id="wave_35"></div>
        <div class="wave green_particle_wave" id="wave_36"></div>
        <div class="wave" id="wave_37"></div>
        <div class="wave" id="wave_38"></div>
        <div class="wave" id="wave_39"></div>
        <div class="wave" id="wave_40"></div>
        <div class="wave" id="wave_41"></div>
        <div class="wave" id="wave_42"></div>
        <div class="wave" id="wave_43"></div>
        <div class="wave" id="wave_44"></div>
        <div class="wave" id="wave_45"></div>
        <div class="wave" id="wave_46"></div>
        <div class="wave" id="wave_47"></div>
        <div class="wave magenta_particle_wave" id="wave_48"></div>
        <div class="wave" id="wave_49"></div>
        <div class="wave" id="wave_50"></div>
        <div class="wave" id="wave_51"></div>
        <div class="wave" id="wave_52"></div>
        <div class="wave" id="wave_53"></div>
        <div class="wave" id="wave_54"></div>
        <div class="wave" id="wave_55"></div>
        <div class="wave" id="wave_56"></div>
        <div class="wave" id="wave_57"></div>
        <div class="wave" id="wave_58"></div>
        <div class="wave" id="wave_59"></div>
        <div class="wave" id="wave_60"></div>`;
        dir.compile = function(element, attributes){
            // element.css("border", "1px solid #cccccc");
             //linkFunction is linked with each element with scope to get the element specific data.
            return function($scope, element, attributes) {
                // console.log(element.children('.wave').length)
                element.children('.wave').each(function(i,v){
                    console.log(i,v);
                    element.children('.wave')[i].css('left',"100px")
                })
                // element.html(`Student: , 
                // Roll No: `);
                // element.css("background-color", "#ff00ff");
            }
            // return linkFunction;
        }
        return dir;
        });
