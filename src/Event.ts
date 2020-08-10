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
            this.addArrow();
        });
        
        
    }
    addArrow(){
        let oneWayTitle = document.createElement('span');
        oneWayTitle.id = obj.arrow["one-way"].title.id;
        oneWayTitle.className = obj.arrow["title-class"];
        oneWayTitle.innerHTML = obj.arrow["one-way"].title.text;
        oneWayTitle.style.position= 'absolute';
        oneWayTitle.style.margin = '45px 250px';
        oneWayTitle.style.fontSize = '10px';
        let twoWayTitle = document.createElement('span');
        twoWayTitle.id = obj.arrow["two-way"].title.id;
        twoWayTitle.className = obj.arrow["title-class"];
        twoWayTitle.innerHTML = obj.arrow["two-way"].title.text;
        twoWayTitle.style.margin = '20px 240px';
        twoWayTitle.style.position= 'absolute';
        twoWayTitle.style.fontSize = '10px';
        let oneWayEl = document.createElement('img');
        oneWayEl.src = obj.arrow["one-way"].src;
        oneWayEl.id = obj.arrow["one-way"].id;
        oneWayEl.style.margin = '20px 250px';
        
        oneWayEl.style.width = '100px';
        let twoWayEl = document.createElement('img');
        twoWayEl.id = obj.arrow["two-way"].id
        twoWayEl.src = obj.arrow["two-way"].src;
        twoWayEl.style.width = '100px';
        twoWayEl.style.margin = '0px 250px';
        let el = jQuery('#trapezium');
        el.css({'margin-top':'25px'});
        jQuery('#'+obj.arrow["two-way"].id).remove();
        jQuery('#'+obj.arrow["two-way"].title.id).remove();
        jQuery('#trapezoid').before(twoWayEl);
        jQuery(twoWayEl).before(twoWayTitle);
        jQuery('.wave-box:last').after(oneWayTitle);
        jQuery(oneWayTitle).after(oneWayEl);
    }
    removeArrow(){
        let el = jQuery('#trapezium');
        el.css({'margin-top':'125px'});
        jQuery('#'+obj.arrow["two-way"].id).remove();
        jQuery('#'+obj.arrow["two-way"].title.id).remove();
        jQuery('#'+obj.arrow["one-way"].id).remove();
        jQuery('#'+obj.arrow["one-way"].title.id).remove();

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
            this.drawing.colorToParticle(obj.default.particle.value);
            jQuery('#'+obj.options["id-two"]).removeAttr('checked');
            jQuery('#'+obj.options["id-one"]).attr('checked');
            this.removeArrow();
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