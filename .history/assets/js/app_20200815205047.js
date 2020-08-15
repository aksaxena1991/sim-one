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
        console.log('saxena',thisRef)
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
           
              console.log('drow lines')
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
            console.log(c1,'anubhav')
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
    }])
