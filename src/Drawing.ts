import jQuery from 'jquery';
import  {css} from '../src/css/style';
import {obj} from './constants';
class Drawing {
    private body = <HTMLElement> document.getElementById('body');
    
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
          .${obj.particle.class}{
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
        
        jQuery(this.body).append('<div class="'+obj["main-container"].class+'" id="'+obj["main-container"].id+'"></div>');
        let el = jQuery('#'+obj["main-container"].id);
        el.css(css.mainDiv);
        this.createLayout();
    }

    private createLayout(){
        let titleDiv = document.createElement('div');
        titleDiv.id = obj["title-container"].id;
        titleDiv.className = obj["title-container"].class;
        let instDiv = document.createElement('div');
        instDiv.id = obj["instruction-container"].id;
        instDiv.className = obj["instruction-container"].class;
        let controls = document.createElement('div');
        controls.id = obj["control-container"].id;
        controls.className = obj["control-container"].class;
        let activityDiv = document.createElement('div');
        activityDiv.id = obj["activity-container"].id;
        activityDiv.className = obj["activity-container"].class;
        let el = jQuery('#'+obj["main-container"].id);
        el.append(titleDiv).append(instDiv).append(controls).append(activityDiv);
        
        this.setTitle();
        this.setInstruction();
        this.setStyle();
        

    }
    private setTitle() {
        let title = jQuery('#'+obj["title-container"].id);
        let span = document.createElement('span');
        span.innerHTML = 'Longitudinal Wave';
        title.html(span);
    }
    private setInstruction() {
        let p = document.createElement('p');
        p.innerHTML = `<strong>Instruction:</strong> Press <Start> to see the wave motion. Observe how the particles vibrate as the longitudinal waves pass them. How is the direction of movement of the particles related to the direction of travel of the wave?`;
        let ins = jQuery('#'+obj["instruction-container"].id);
        ins.html(p);

    }
    private setStyle() {
        let style = `
        <style>
        .${obj["title-container"].class}{
            padding: 15px;
            height: 20px;
            border-bottom: 1px solid black;
        }
        .${obj["title-container"].class} span {
            font-weight: 500;
        }
        div#${obj["instruction-container"].id} {
            padding: 0px 15px 0px 15px;
            height: 70px;
            border-bottom: 1px solid black;
        }
        div#${obj["control-container"].id} {
            border-bottom: 1px solid black;
            height: 50px;
        }
        div#${obj["float-left"].id} {
            float: left;
        }
        div#${obj["float-right"].id} {
            float: right;
        }
        div#${obj["float-left"].id}, div#${obj["float-right"].id} {
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
        button#${obj.buttons.start.id} {
            border-color: #2bbc2b;
            background: #2bbc2b;
        }
        button#reset {
            border-color: #e22020;
            background: #e22020;
        }
        div#${obj["activity-container"].id} {
            height: 255px;
            margin-top: 0px;
        }
        label{
            color: #058686;
            font-weight: normal;
        }
        input[type='${obj.options.type}']:checked:after {
            width: 7px;
            height: 7px;
            border-radius: 15px;
            margin: 1px 1px;
            background-color: #058686;
            content: '';
            display: inline-block;
            border: 2px solid white;
        }
        </style>`;
        jQuery('head').append(style);
    }
    createTrapezium() {
        let mainDiv = jQuery('#'+obj["activity-container"].id);
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
        let ctrlDiv = jQuery('#'+obj["control-container"].id);
        let start = document.createElement('button');
        start.id = obj.buttons.start.id;
        start.className = obj.buttons.start.class;
        start.textContent = obj.buttons.start.text;
        let reset = document.createElement('button');
        reset.id = obj.buttons.reset.id;
        reset.className = obj.buttons.reset.class;
        reset.textContent = obj.buttons.reset.text;
        let el = document.createElement('div');
        el.id = obj["float-right"].id;
        el.className = obj["float-right"].class;
        el.append(start);
        el.append(reset);
        ctrlDiv.append(el);


    }
    createControls() {
        let mainDiv = jQuery('#'+obj["control-container"].id);
        mainDiv.append(`<div id="${obj["float-left"].id}" class="${obj["float-left"].class}"><label>Show</label>
        <input type="${obj.options.type}" id="${obj.options["id-one"]}" name="${obj.options.name}" value="${obj.options["value-one"]}"/> 
        <label for="${obj.options["id-one"]}"> ${obj.options["label-one"]}</label>
        <input type="${obj.options.type}" name="${obj.options.name}" value="${obj.options["value-two"]}" id="${obj.options["id-two"]}"/> 
        <label for="${obj.options["id-two"]}"> ${obj.options["label-two"]}</label> </div>
        `);
        this.createButton();
    }
    createWavelines(n: number) {
        let mainDiv = jQuery('#'+obj["activity-container"].id);
        for (let i = 0 ; i < n ; i++) {
            let particle = '';
            if(i%2 === 1) {
                particle = `<div  id="${obj.particle.id}-`+i+`" class="${obj.particle.class}"></div>`;
            }
            mainDiv.append(`<div id="wave-box-`+i+`" class="wave-box">
            <div class="wave" id="wave-`+i+`"></div>`+particle+`</div>`);
            let wave = jQuery('#wave-box-'+i);
            wave.css(css["wave"]).css({'margin-left':(10*(i+(5.3)))+'px'});
        }
        
    }
}
export default Drawing;