import jQuery from 'jquery';
import  {css} from '../src/css/style';
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
        let el = jQuery('#trapezium');
        el.css(css.trapezoid);
        let te = jQuery('#trapezium-elbow');
        te.css(css["trapezium-elbow"]);
    }
    
    createButton() {
        let mainDiv = jQuery('#main-div');
        mainDiv.after('<button id="evt">Click Me</button>');

    }
    createSelect() {
        let mainDiv = jQuery('#main-div');
        mainDiv.after(`<input type="radio" id="val1" name="option" value="4"/> 
        <label for="val1"> 4 Particles</label>
        <input type="radio" name="option" value="0" id="val2"/> 
        <label for="val2"> Chain of particles</label>
        `);
    }
    createWavelines(n: number) {
        let mainDiv = jQuery('#main-div');
        
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