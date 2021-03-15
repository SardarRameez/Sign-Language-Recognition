// Define our labelmap
const labelMap = {
    1:{name:'ا', color:'red'},
    2:{name:'ب', color:'yellow'},
    3:{name:'پ', color:'red'},
    4:{name:'ت', color:'yellow'},
    5:{name:'ٹ', color:'red'},
    6:{name:'ث', color:'yellow'},
    7:{name:'ج', color:'red'},
    8:{name:'چ', color:'yellow'},
    9:{name:'ح', color:'red'},
    10:{name:'خ', color:'yellow'},
    11:{name:'د', color:'red'},
    12:{name:'ڈ', color:'yellow'},
    13:{name:'ذ', color:'red'},
    14:{name:'ر', color:'yellow'},
    15:{name:'ڑ', color:'red'},
    16:{name:'ز', color:'yellow'},
    17:{name:'ژ', color:'red'},
    18:{name:'س', color:'yellow'},
    19:{name:'ش', color:'red'},
    20:{name:'ص', color:'yellow'},
    21:{name:'ض', color:'red'},
    22:{name:'ط', color:'yellow'},
    23:{name:'ظ', color:'red'},
    24:{name:'ع', color:'yellow'},
    25:{name:'غ', color:'red'},
    26:{name:'ف', color:'yellow'},
    27:{name:'ق', color:'red'},
    28:{name:'ک', color:'yellow'},
    29:{name:'گ', color:'red'},
    30:{name:'ل', color:'yellow'},
    31:{name:'م', color:'red'},
    32:{name:'ن', color:'yellow'},
    33:{name:'و', color:'yellow'},
    34:{name:'ہ', color:'red'},
    35:{name:'ی', color:'yellow'},
    36:{name:'ے', color:'yellow'},
    37:{name:'نیند', color:'red'},
    38:{name:'بہتر', color:'yellow'},
    39:{name:'کام', color:'yellow'},
    40:{name:'بس', color:'yellow'},
    41:{name:'اسکول', color:'green'},
    42:{name:'ہاتھ', color:'yellow'},
}

// Define a drawing function
export const drawRect = (boxes, classes, scores, threshold, imgWidth, imgHeight, ctx)=>{
    for(let i=0; i<=boxes.length; i++){
        if(boxes[i] && classes[i] && scores[i]>threshold){
            // Extract variables
            const [y,x,height,width] = boxes[i]
            const text = classes[i]
            
            // Set styling
            ctx.strokeStyle = labelMap[text]['color']
            ctx.lineWidth = 10
            ctx.fillStyle = 'white'
            ctx.font = '30px Arial'         
            
            // DRAW!!
            ctx.beginPath()
            ctx.fillText(labelMap[text]['name'] + ' - ' + Math.round(scores[i]*100), x*imgWidth, y*imgHeight-10)
            console.log(ctx.fillText(labelMap[text]['name'] + ' - ' + Math.round(scores[i]*100), x*imgWidth, y*imgHeight-10))
            ctx.rect(x*imgWidth, y*imgHeight, width*imgWidth/2, height*imgHeight/1.5);
            ctx.stroke()
        }
    }
}