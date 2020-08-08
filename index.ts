import CreateCanvas from './src/canvas-interface';
import Drawing from "./src/Drawing";
import Event from './src/Event';


class Index {
    private inst: any;
    private drawing: any;
    private event: any;
    constructor() {
        this.inst = new CreateCanvas('canvas',500,500);
        this.drawing = new Drawing();
        this.event = new Event('evt');

    }
    init() {
        this.drawing.addScript();
        this.drawing.createMainDiv();
        this.drawing.createTrapezium();
        this.drawing.createSelect();
        this.drawing.createButton();
        this.event.addClickEvent();

    }
}
new Index().init();