import jQuery from 'jquery';
import Drawing from './Drawing';
import {obj} from './constants';

class Event {
    private startID: string = '';
    private resetID: string = '';
    private drawing: any;
    
    constructor(startID: string, resetID: string){
        this.startID = startID;
        this.resetID = resetID;
        this.drawing = new Drawing();
        
    }
    addStartEvent() {
        let btn = jQuery('#'+this.startID);
        btn.click(() => {
            this.animateBar();
        });
        
    }
    addResetEvent() {
        let btn = jQuery('#'+this.resetID);
        btn.click(() => {
            let trap = jQuery('#trapezium');
            trap.css('animation','');
            let elbow = jQuery('#trapezium-elbow');
            elbow.css('animation','');
            let waveLines = jQuery('.wave-box');
            waveLines.remove();
            this.drawing.createWavelines(obj.default.waves.value);
        
        });
        
    }
    
    animateBar() {
        let trapezium = jQuery('#trapezium');
        trapezium.css({
            'animation':'oscillate 4s infinite',
            'position':'relative'
        })
        let elbow = jQuery('#trapezium-elbow');
        elbow.css({
            'animation':'resizer 4s infinite',
            'position':'relative'
        })
        this.moveWaveAndParticle();
    }
    private moveWaveAndParticle(){
        let waveLines = jQuery('.wave-box');
        this.generateKeyFrames(waveLines.length, waveLines);
        jQuery.each(waveLines,function(i,v){
            setInterval(()=>{
            jQuery(v).css({'animation':'wave-'+i+' '+i+'s infinite','position':'absolute'});
            }, 100 * i);
            
        });
        
    }
    private generateKeyFrames(n:number,el: any) {
        let cssKeyFrame = '';
        for(let i = 0; i < n ; i++) {
            let marginLeft = el[i].style['margin-left'].replace('px','');
            let num = parseInt(marginLeft) + i;
            i >= 0 ? num = num - 2 : num = num;
            cssKeyFrame   += `          @keyframes wave-`+i+` {
                0% {margin-left: `+parseInt(marginLeft)+`px;}
                50% {margin-left: `+num +`px;}
                100% {margin-left: `+parseInt(marginLeft)+`px;} 
              }                 `;
        }
          jQuery('head').append('<style>'+cssKeyFrame+'</style>')
    }
    
    
    
}
export default Event;