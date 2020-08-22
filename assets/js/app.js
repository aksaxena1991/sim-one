'use strict';

angular.module('playerApp', ['ngSanitize'])
    .controller('playerCtrl', ['$scope', '$interval', '$timeout', function ($scope, $interval, $timeout) {
        var thisRef = $scope;


        /*-- variables : starts --*/
        thisRef.SelHeight = 1;
        thisRef.SelImpact = 1;

        thisRef.CurrValueP1 = "Wavy (up)";
        thisRef.CurrValP2 = "2 units";
        thisRef.CurrValP3 = "Wavy (up)";
        thisRef.CurrValP4 = "2 units";
        thisRef.secondOption = false;
        thisRef.currentOption = true
        thisRef.ThirdOption = false
        /*-- variables : ends --*/
    
        thisRef.eThread = {};    
       
           thisRef.setEvents = function () {
               
            angular.element(".dropDown").click(function (event) {
                console.log(event.target.id);
                
                angular.element(".dropDown1 ul").removeClass("open");
                if (event.target.id && !angular.element("#" + event.target.id + " ul").hasClass("open")) {
                    event.stopPropagation();
                    angular.element(".dropDown ul").removeClass("open");
                    angular.element("#" + event.target.id + " ul").addClass("open");
                }
            });

            angular.element(".dropDown1").click(function (event) {
                console.log(event.target.id);
                angular.element(".dropDown ul").removeClass("open");
                if (event.target.id && !angular.element("#" + event.target.id + " ul").hasClass("open")) {
                event.stopPropagation();
                angular.element(".dropDown1 ul").removeClass("open");
                angular.element("#" + event.target.id + " ul").addClass("open");
                }
            });

            $("body").bind("click", function(){
                angular.element("ul").removeClass("open");
            });

            thisRef.InitialChangeP1 = function(val){
                thisRef.appliedInitialValP1 = val;
                thisRef.CurrValueP1 = val;
                console.log(thisRef.CurrValueP1)
                
            }

            thisRef.InitialChangeP2 = function(val){
                thisRef.appliedInitialValP2 = val;
                thisRef.CurrValP2 = val;
                console.log(thisRef.CurrValP2)       
            }

            thisRef.InitialChangeP3 = function(val){
                thisRef.appliedInitialValP3 = val;
                thisRef.CurrValP3 = val;
                console.log(thisRef.CurrValP3)       
            }

            thisRef.InitialChangeP4 = function(val){
                thisRef.appliedInitialValP4 = val;
                thisRef.CurrValP4 = val;
                console.log(thisRef.CurrValP4)       
            }
        }
    
         thisRef.StartSimulation = function (){  
            $("#InitialHeightCont").addClass("dim");
            $("#InitialHeightCont1").addClass("dim");
            $("#ImpactOptionCont").addClass("dim");
            $("#ImpactOptionCont1").addClass("dim");
            $("#DvStartSim").addClass("dim");
         };

         

         /*-- functions : starts --*/

         thisRef.InitActivity = function (){
         
         };

         thisRef.InitActivity();

         thisRef.ResetSimulation = function (){
             console.log('reset')
              // reset dropdown
              angular.element(".dropDown ul").removeClass("open");
              angular.element(".dropDown1 ul").removeClass("open");
              //reset trolley
            //   thisRef.SetCurrentScene();
              //enable dropdown & Release & Reset btn 
              $("#InitialHeightCont").removeClass("dim");
              $("#InitialHeightCont1").removeClass("dim");
              $("#ImpactOptionCont").removeClass("dim");
              $("#ImpactOptionCont1").removeClass("dim");
              $("#DvStartSim").removeClass("dim");
              $("#ResetSim").addClass("dim");
              thisRef.currentOption = true
            thisRef.secondOption = false
                        
         };
         /*-- functions : ends --*/

        thisRef.setEvents();
    }])

