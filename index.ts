
import Drawing from "./src/drawing";
import CSS from "./src/css";
class Index {
    private drawing: any;
    private css: any;
    constructor() {
    
        this.drawing = new Drawing();
        this.css = new CSS();
        
    }
    init() {
        this.drawing.createMainContainer();

    }
}
new Index().init();