import jQuery from 'jquery';
import {obj} from './constants';
class Drawing {
    private body:any;
    constructor(){
        this.body = jQuery('body');
        
    }
    createMainContainer(){
        let el = document.createElement('div');
        el.className = obj["main-container"].class;
        el.id = obj["main-container"].id;
        this.body.append(el);
        this.createTitleContainer();
    }
    createTitleContainer(){
        let el = document.createElement('div');
        el.className = obj["title-container"].class;
        el.id = obj["title-container"].id;
        el.innerText = obj["title-container"].text;
        jQuery('#'+obj["main-container"].id).append(el);
        this.createInstructionContainer();
    }
    createInstructionContainer(){
        let el = document.createElement('div');
        el.className = obj["instruction-container"].class;
        el.id = obj["instruction-container"].id;
        el.innerText = obj["instruction-container"].text;
        jQuery('#'+obj["main-container"].id).append(el);
        this.createControlsContainer();
    }
    createControlsContainer(){
        let el = document.createElement('div');
        el.className = obj["control-container"].class;
        el.id = obj["control-container"].id;
        
        jQuery('#'+obj["main-container"].id).append(el);
        this.createActivityContainer();
    }
    createActivityContainer(){
        let el = document.createElement('div');
        el.className = obj["activity-container"].class;
        el.id = obj["activity-container"].id;
        jQuery('#'+obj["main-container"].id).append(el);
    }
    
}
export default Drawing;