// const stringifyObject = require('stringify-object') ;
// const createKeyframe = require('create-keyframe');
// const insertCSS = require('insert-styles');
import jQuery from 'jquery';
class Event {
    private id: string = '';
    
    constructor(id: string){
        this.id = id;
    }
    addClickEvent() {
        let btn = jQuery('#'+this.id);
        btn.click(() => {
            this.animateBar();
            
        });
        
    }
    
    animateBar() {
        let trapezium = jQuery('#trapezium');
        trapezium.css({
            'animation':'oscillate 4s infinite',
            'position':'relative'
        })
        let elbow = jQuery('#trapezoid').children('#trapezium-elbow');
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