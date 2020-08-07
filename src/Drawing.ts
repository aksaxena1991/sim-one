import jQuery from 'jquery';
import  {css} from '../src/css/style';

 // {String}
class Drawing {
    private body = <HTMLElement> document.getElementById('body');
    constructor(){
    }
    addScript() {
        let head = jQuery('head');
        head.append(`<style>
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
          
        </style>`);
    }
    createMainDiv() {
        let body = jQuery(this.body);
        body.css(css.body);
        jQuery(this.body).append('<div  id="main-div"></div>');
        let el = jQuery('#main-div');
        el.css(css.mainDiv)
        
    }
    createTrapezium() {
        let mainDiv = jQuery('#main-div');
        mainDiv.append(`<div id="trapezoid">
        <div  id="trapezium"></div>
        <div  id="trapezium-elbow"></div>
        </div>`);
        // mainDiv.append('');
        let el = jQuery('#trapezium');
        el.css(css.trapezoid);
        // mainDiv.append('');
        let te = jQuery('#trapezium-elbow');
        te.css(css["trapezium-elbow"]);
    }
    
    createButton() {
        let mainDiv = jQuery('#main-div');
        mainDiv.after('<button id="evt">Click Me</button>');

    }
    createWavelines(n: number) {
        let mainDiv = jQuery('#main-div');
        
        for (let i = 0 ; i < n ; i++) {
            mainDiv.append('<div  id="wave-line-'+i+'" class="wave-lines"></div>');
            let wave = jQuery('#wave-line-'+i);
            wave.css(css["wave-line"]).css({'margin-left':(10*(i+(5.3)))+'px'});
            if(i%5 === 0) {
                mainDiv.append('<div  id="particle-'+i+'"></div>');
                let prt = jQuery('#particle-'+i);
                prt.css(css.particle).css({'margin-left':(10*(i+7.85))+'px'});
            }
            
            

        }
    }
}
export default Drawing;