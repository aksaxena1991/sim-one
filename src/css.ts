import jQuery from 'jquery';
import {obj} from './constants';
class CSS {
    private style: any
    private head: any
    constructor(){
        this.head = jQuery('head');
        this.init();

    }
    init(){
        this.style = document.createElement('style');
        this.style.type = "text/css";
        this.createStyle(this.style);

    }
    private createStyle(style:any) {
        this.addMainContainerCSS(style);
        this.addtitleContainerCSS(style);
        this.addInstructionContainerCSS(style);
        this.addControlContainerCSS(style);
        this.addActivityContainerCSS(style);
        this.head.append(style);
        
    }
    private addMainContainerCSS(style: any) {
        style.innerText += `.${obj["main-container"].class} {height: 500px;
            width: 500px;
            margin: auto;border: 1px solid black;}`; 
    }
    private addtitleContainerCSS(style: any) {
        style.innerText += `.${obj["title-container"].class}{padding: 10px;
            font-size: 15px;
            border-bottom: 1px solid black;
            height: 20px;}`;
    }
    private addInstructionContainerCSS(style:any){
        style.innerText += `.${obj["instruction-container"].class}{padding: 10px;
            font-size: 15px;
            border-bottom: 1px solid black;
            height: 60px;}`;
    }
    private addControlContainerCSS(style:any){
        style.innerText += `.${obj["control-container"].class}{padding: 10px;
            
            border-bottom: 1px solid black;
            height: 60px;}`;
    }
    private addActivityContainerCSS(style:any) {
        style.innerText += `.${obj["activity-container"].class}{padding: 10px;
            
            border-bottom: 1px solid black;
            height: 277px;}`;
    }

}
export default CSS;