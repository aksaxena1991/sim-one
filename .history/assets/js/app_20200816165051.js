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
        var unit = 50;
        
        var width = angular.element('.vibrationArea').width();
        var yAxis = Math.floor(width/4);
        
        thisRef.oneWayArrowDresc = false;
        thisRef.bothWayArrowDresc = false;
        thisRef.fourparticle = true;
        thisRef.chainOfParticle = false;
        
        thisRef.startMove = function (e) {
            thisRef.bText = e.target.textContent;
            thisRef.directionOfVibration = "Direction of vibration of the particles";
            thisRef.directionOfPropagation = "Direction of travel of the wave";
            thisRef.oneWayArrowDresc = true
            thisRef.bothWayArrowDresc = true
            if (thisRef.bText == "Start") {
                thisRef.runMotionWaves(e);
                angular.element(e.target).html("Pause");
                angular.element('.vibrator').addClass('vibrate');
            }
            if (thisRef.bText == "Pause") {
              angular.element(e.target).html("Continue");
              angular.element('.vibrator').removeClass('vibrate');
            }
            if (thisRef.bText == "Continue") {
              angular.element(e.target).html("Pause");
              angular.element('.vibrator').addClass('vibrate');
            }
          };

          thisRef.drawMotionLines = function (e) {
              var waves = angular.element('.wave');
              var wavelen = waves.length;
              for(var i = parseInt(waves[0].style.left.replace('px','')),k =0; i < width, k < wavelen ; i += 10, k++){
                  var xLeft = parseInt(waves[k].style.left.replace('px',''));
                // console.log("added: "+xLeft+(-yAxis+k)/unit)
                // console.log("subtracted: "+(xLeft-(-yAxis+k)/unit))
                angular.element(waves[k]).animate({left:(xLeft+(yAxis+k)/unit)+"px"},(k+1)*1000).animate({left:(xLeft+(-yAxis+k)/unit)+"px"},(k+2)*1000).animate({left:xLeft+"px"},(k+3)*1000)
                
              }
            
            
            
           
              
          }

          thisRef.runMotionWaves = function (e) {
              if (thisRef.runFlag == 1) {
                thisRef.drawMotionLines(e);
                
            }
          }

          thisRef.updateCounterInterval = function () {
              
          }
          thisRef.onChange = function(evt){
            var val = evt.target.value;
            var waves = angular.element('.wave');
            var left = 90;
            
            
            if(val === 'fourparticles'){
                
                thisRef.fourparticle = true
                thisRef.chainOfParticle = false
                thisRef.directionOfVibration = "";
                thisRef.directionOfPropagation = "";
                thisRef.oneWayArrowDresc = false
                thisRef.bothWayArrowDresc = false
                // thisRef.resetUI();
                angular.element('.wave').each(function(i,v){
                
                    var strID = v.id;
                    var id = parseInt(strID.split('_')[1]);
                    left = left + (30/2.2);
                    
                    if(i+1 === id) {
                        
                        angular.element('#'+strID).css('left',left+'px');
                        
                    }
                    if(id%2 ===0) {
                        
                        
                        if(angular.element('#'+strID).hasClass('red_particle_wave') && angular.element('#'+strID).hasClass('green_particle_wave') && angular.element('#'+strID).hasClass('magenta_particle_wave') && angular.element('#'+strID).hasClass('blue_particle_wave')) {
                            angular.element('#'+strID).css('left',left+'px');
                            angular.element('#'+strID).addClass('plane_wave')
                        }
                        if(angular.element('#'+strID).hasClass('red_particle_wave') || angular.element('#'+strID).hasClass('green_particle_wave') || angular.element('#'+strID).hasClass('magenta_particle_wave') || angular.element('#'+strID).hasClass('blue_particle_wave')) {
                            angular.element('#'+strID).css('left',left-5+'px');
                        }
                    }
                    
                })
                
                
            }else {
                thisRef.fourparticle = false
                thisRef.chainOfParticle = true
                thisRef.directionOfVibration = "";
                thisRef.directionOfPropagation = "";
                thisRef.oneWayArrowDresc = false
                thisRef.bothWayArrowDresc = false;
                
                waves.each(function(i,v){
                    var strID = v.id;
                    var id = parseInt(strID.split('_')[1]);
                    // if(angular.element(v).hasClass('white_particle_wave')){
                    //     angular.element(v).removeClass('white_particle_wave').addClass('plane_wave');
                    //     angular.element('#'+strID).css('left',left+'px');
                    // }
                    left = left + (30/2.2);
                    if((id%2 === 0) && (id !== 20) && (id !== 48) && (id !== 36) && (id !== 30) ) {
                        
                        angular.element(v).addClass('white_particle_wave').removeClass('plane_wave')
                        angular.element('#'+strID).css('left',left-5+'px');
                    }
                    
                        
                })
                angular.element(".ball").removeAttr("style");
                angular.element('.height-indicator').removeAttr("style");
                angular.element(".startsim").html("Start");
            }

          }
          thisRef.onC1Change = function (e) {
            var c1 = thisRef.currentC1Val;
            
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
        <div class="wave plane_wave" id="wave_1"></div>
        <div class="wave plane_wave" id="wave_2"></div>
        <div class="wave plane_wave" id="wave_3"></div>
        <div class="wave plane_wave" id="wave_4"></div>
        <div class="wave plane_wave" id="wave_5"></div>
        <div class="wave plane_wave" id="wave_6"></div>
        <div class="wave plane_wave" id="wave_7"></div>
        <div class="wave plane_wave" id="wave_8"></div>
        <div class="wave plane_wave" id="wave_9"></div>
        <div class="wave plane_wave" id="wave_10"></div>
        <div class="wave plane_wave" id="wave_11"></div>
        <div class="wave plane_wave" id="wave_12"></div>
        <div class="wave plane_wave" id="wave_13"></div>
        <div class="wave plane_wave" id="wave_14"></div>
        <div class="wave plane_wave" id="wave_15"></div>
        <div class="wave plane_wave" id="wave_16"></div>
        <div class="wave plane_wave" id="wave_17"></div>
        <div class="wave plane_wave" id="wave_18"></div>
        <div class="wave plane_wave" id="wave_19"></div>
        <div class="wave red_particle_wave" id="wave_20"></div>
        <div class="wave plane_wave" id="wave_21"></div>
        <div class="wave plane_wave" id="wave_22"></div>
        <div class="wave plane_wave" id="wave_23"></div>
        <div class="wave plane_wave" id="wave_24"></div>
        <div class="wave plane_wave" id="wave_25"></div>
        <div class="wave plane_wave" id="wave_26"></div>
        <div class="wave plane_wave" id="wave_27"></div>
        <div class="wave plane_wave" id="wave_28"></div>
        <div class="wave plane_wave" id="wave_29"></div>
        <div class="wave blue_particle_wave" id="wave_30"></div>
        <div class="wave plane_wave" id="wave_31"></div>
        <div class="wave plane_wave" id="wave_32"></div>
        <div class="wave plane_wave" id="wave_33"></div>
        <div class="wave plane_wave" id="wave_34"></div>
        <div class="wave plane_wave" id="wave_35"></div>
        <div class="wave green_particle_wave" id="wave_36"></div>
        <div class="wave plane_wave" id="wave_37"></div>
        <div class="wave plane_wave" id="wave_38"></div>
        <div class="wave plane_wave" id="wave_39"></div>
        <div class="wave plane_wave" id="wave_40"></div>
        <div class="wave plane_wave" id="wave_41"></div>
        <div class="wave plane_wave" id="wave_42"></div>
        <div class="wave plane_wave" id="wave_43"></div>
        <div class="wave plane_wave" id="wave_44"></div>
        <div class="wave plane_wave" id="wave_45"></div>
        <div class="wave plane_wave" id="wave_46"></div>
        <div class="wave plane_wave" id="wave_47"></div>
        <div class="wave magenta_particle_wave" id="wave_48"></div>
        <div class="wave plane_wave" id="wave_49"></div>
        <div class="wave plane_wave" id="wave_50"></div>
        <div class="wave plane_wave" id="wave_51"></div>
        <div class="wave plane_wave" id="wave_52"></div>
        <div class="wave plane_wave" id="wave_53"></div>
        <div class="wave plane_wave" id="wave_54"></div>
        <div class="wave plane_wave" id="wave_55"></div>
        <div class="wave plane_wave" id="wave_56"></div>
        <div class="wave plane_wave" id="wave_57"></div>
        <div class="wave plane_wave" id="wave_58"></div>
        <div class="wave plane_wave" id="wave_59"></div>
        <div class="wave plane_wave" id="wave_60"></div>`;
        dir.compile = function(element, attributes){
            var left = 90;
            
            return function($scope, element, attributes) {
                
                element.children('.wave').each(function(i,v){
                
                    var strID = v.id;
                    var id = parseInt(strID.split('_')[1]);
                    left = left + (30/2.2);
                    
                    if(i+1 === id) {
                        
                        element.children('#'+strID).css('left',left+'px');
                        
                    }
                    if(id%2 ===0) {
                        
                        
                        if(element.children('#'+strID).hasClass('red_particle_wave') && element.children('#'+strID).hasClass('green_particle_wave') && element.children('#'+strID).hasClass('magenta_particle_wave') && element.children('#'+strID).hasClass('blue_particle_wave')) {
                            element.children('#'+strID).css('left',left+'px');
                            element.children('#'+strID).removeClass('plane_wave').addClass('white_particle_wave')
                        }
                        if(element.children('#'+strID).hasClass('red_particle_wave') || element.children('#'+strID).hasClass('green_particle_wave') || element.children('#'+strID).hasClass('magenta_particle_wave') || element.children('#'+strID).hasClass('blue_particle_wave')) {
                            element.children('#'+strID).css('left',left-5+'px');
                        }
                    }
                    
                })
                
            }
            
        }
        return dir;
        });
