import CreateCanvas from './src/canvas-interface';
import Drawing from "./src/Drawing";
import Event from './src/Event';
import {obj} from './src/constants';


class Index {
    private inst: any;
    private drawing: any;
    private event: any;
    constructor() {
        this.inst = new CreateCanvas('canvas',500,500);
        this.drawing = new Drawing();
        this.event = new Event(obj.buttons.start.id,obj.buttons.reset.id);

    }
    init() {
        this.drawing.addScript();
        this.drawing.createMainDiv();
        this.drawing.createTrapezium();
        this.drawing.createControls();
        this.event.addStartEvent();
        this.event.addResetEvent();        

    }
}
new Index().init();