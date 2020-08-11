export const obj = {
    'main-container': {
        id:'parent-div',
        class:'parent-div'
    },
    'title-container':{
        id:'title-div',
        class: 'title-div',
        text:'Adding Pluses'
    },
    'instruction-container':{
        id:'inst-div',
        class:'inst-div',
        text:'Instruction: Press <Start> to observe how two pulses add up when they meet. Change the shape and the amplitude of the pulses and repeat. How do pulses add up when they meet?'
    },
    'control-container': {
        id: 'controls',
        class:'controls'
    },
    'activity-container':{
        id:'activity',
        class: 'activity'
    },
    'action-buttons':{
        type:'button',
        class:'btn',
        buttons:[
            {
                id: 'Start',
                text:'Start'
            },{
                id:'Reset',
                text:'Reset'
            }
        ]
    },
    'options':[
        {
            type:'select',
            optionList:[
                {
                    value:'default',
                    text:'Shape'
                },{
                    value:''
                }
            ]
        }
    ]
    
        // 'particle-color':['#FF0000','#0000FF','#008000','#FF00FF']
        
    
    
};