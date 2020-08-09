import jQuery from 'jquery';
import  {css} from '../src/css/style';
import {obj} from './constants';
class Drawing {
    private body = <HTMLElement> document.getElementById('body');
    constructor(){
    }
    addScript() {
        let head = jQuery('head');
        head.html(`<style>
        @keyframes oscillate {
            0% {left: 0px;}
            50% {left: 20px;}
            100% {left: 0px;}
          }
          @keyframes resizer {
            0% {width: 30px;}
            50% {width: 50px;}
            100% {width: 30px;}
          }
          .particle{
            height:10px;
            width:10px;
            margin:35px 0px 0px -4px;
            position:absolute;
            border-radius:50%;
            background:#3c3c3c;
        }
        </style>`);
    }
    createMainDiv() {
        let body = jQuery(this.body);
        body.css(css.body);
        console.log(obj["main-container"].id);
        jQuery(this.body).append('<div  id="main-div"></div>');
        let el = jQuery('#main-div');
        el.css(css.mainDiv);
        this.createLayout();
        
        
    }
    private createInstruction() {

    }

    private createLayout(){
        let titleDiv = document.createElement('div');
        titleDiv.id = 'title-div';
        titleDiv.className = 'title-div';
        let instDiv = document.createElement('div');
        instDiv.id = 'inst-div';
        instDiv.className = 'inst-div';
        let controls = document.createElement('div');
        controls.id = 'control-div';
        controls.className = 'control-div';
        let activityDiv = document.createElement('div');
        activityDiv.id = 'activity-div';
        activityDiv.className = 'activity-div';
        let el = jQuery('#main-div');
        el.append(titleDiv).append(instDiv).append(controls).append(activityDiv);
        this.createInstruction();
        this.setTitle();
        this.setInstruction();
        this.setStyle();
        

    }
    private setTitle() {
        let title = jQuery('#title-div');
        let span = document.createElement('span');
        span.innerHTML = 'Longitudinal Wave';
        title.html(span);
    }
    private setInstruction() {
        let p = document.createElement('p');
        p.innerHTML = `<strong>Instruction:</strong> Press <Start> to see the wave motion. Observe how the particles vibrate as the longitudinal waves pass them. How is the direction of movement of the particles related to the direction of travel of the wave?`;
        let ins = jQuery('#inst-div');
        ins.html(p);

    }
    private setStyle() {
        let style = `
        <style>
        .title-div{
            padding: 15px;
            height: 20px;
            border-bottom: 1px solid black;
        }
        .title-div span {
            font-weight: 500;
        }
        div#inst-div {
            padding: 0px 15px 0px 15px;
            height: 70px;
            border-bottom: 1px solid black;
        }
        div#control-div {
            border-bottom: 1px solid black;
            height: 50px;
        }
        div#left {
            float: left;
        }
        div#right {
            float: right;
        }
        div#left, div#right {
            padding: 10px 15px 0px 15px;
        }
        .btn {
            width: 90px;
            margin: 0px 0px 0px 10px;
            border-radius: 15px;
            padding: 3px;
            border-style: solid;
            color: white;
        }
        button#start {
            border-color: #2bbc2b;
            background: #2bbc2b;
        }
        button#reset {
            border-color: #e22020;
            background: #e22020;
        }
        div#activity-div {
            height: 255px;
            margin-top: 0px;
        }
        label{
            color: #058686;
            font-weight: normal;
        }
        input[type='radio']:checked:after {
            width: 7px;
            height: 7px;
            border-radius: 15px;
            margin: 0px 1px;
            background-color: #058686;
            content: '';
            display: inline-block;
            border: 2px solid white;
        }
        </style>`;
        jQuery('head').append(style);
    }
    createTrapezium() {
        let mainDiv = jQuery('#activity-div');
        mainDiv.append(`<div id="trapezoid">
        <div  id="trapezium"></div>
        <div  id="trapezium-elbow"></div>
        </div>`);
        let el = jQuery('#trapezium');
        el.css(css.trapezium);
        let te = jQuery('#trapezium-elbow');
        te.css(css["trapezium-elbow"]);
        this.createWavelines(45);
    }
    
    private createButton() {
        let ctrlDiv = jQuery('#control-div');
        let start = document.createElement('button');
        start.id = 'start';
        start.className = 'btn';
        start.textContent = 'Start';
        let reset = document.createElement('button');
        reset.id = 'reset';
        reset.className = 'btn';
        reset.textContent = 'Reset';
        let el = document.createElement('div');
        el.id = 'right';
        el.className = 'right';
        el.append(start);
        el.append(reset);
        ctrlDiv.append(el);


    }
    createControls() {
        let mainDiv = jQuery('#control-div');
        mainDiv.append(`<div id="left"><label>Show</label> <input type="radio" id="val1" name="option" value="4"/> 
        <label for="val1"> 4 Particles</label>
        <input type="radio" name="option" value="0" id="val2"/> 
        <label for="val2"> Chain of particles</label> </div>
        `);
        this.createButton();
    }
    createWavelines(n: number) {
        let mainDiv = jQuery('#activity-div');
        for (let i = 0 ; i < n ; i++) {
            let particle = '';
            if(i%2 === 1) {
                particle = `<div  id="particle-`+i+`" class="particle"></div>`;
            }
            mainDiv.append(`<div id="wave-box-`+i+`" class="wave-box">
            <div class="wave" id="wave-`+i+`"></div>`+particle+`</div>`);
            let wave = jQuery('#wave-box-'+i);
            wave.css(css["wave"]).css({'margin-left':(10*(i+(5.3)))+'px'});
        }
        
    }
}
export default Drawing;