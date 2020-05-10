class Piece {

    constructor(type, playfield, x, y) {
        // cells of this piece
        this.type = type;
        this.cells = types[type];
        this.size = this.cells.length; // assumed square matrix

        // drawing sizes
        this.cellSize = playfield.cellSize;
        this.offset = playfield.borderSize;

        // position of top-left piece relative to playfield
        this.x = x === undefined ? floor((playfield.cols - this.size) / 2) : x;
        this.y = y || 0;
        
        // gravity
        this.dropInterval = 1000 // in ms
        this.dropBuffer = 0; // time since last drop

        // whether this is a ghost piece
        this.isghost = false;
    }
    
    
    update(time) {
        this.dropBuffer += time;
    }
    

    timeToFall() {    
        return this.dropBuffer > this.dropInterval
    }
    
    resetBuffer() {
        this.dropBuffer = 0;
    }

    copy(piece) {
        this.x = piece.x;
        this.y = piece.y;
        this.cells = piece.cells
    }

    
    show() {
        
        // for each non-null cell in this piece, fill in
        // the specified color and draw the rectangle
        for (let row = 0; row < this.size; row++) {
            for (let col = 0; col < this.size; col++) {

                if (this.cells[row][col]) {
                    let x = this.x + col;
                    let y = this.y + row;

                    let cs = this.cellSize;
                    let off = this.offset;

                    fill(this.isghost ? '#bbb' : this.cells[row][col])
                    rect(off + cs * x, off + cs * y, cs-1, cs-1);
                }

            }
        }

    }


    moveDown() {
        this.y++;
    }
    moveRight() {
        this.x++;
    }
    moveLeft() {
        this.x--;
    }
    moveUp() {
        this.y--;
    }
    
    

    //================================
    // Rotate functions
    //================================

    // rotate clockwise
    rotateCW() {
        let newCells = [];

        for (let col = 0; col < this.size; col++) {

            let newRow = [];
            for (let row = this.size - 1; row >= 0; row--) {
                newRow.push(this.cells[row][col]);
            }
            newCells.push(newRow);

        }
        this.cells = newCells;
    }

    // rotate counter-clockwise
    rotateCCW() {
        let newCells = [];
        for (let col = this.size - 1; col >= 0; col--) {

            let newRow = [];
            for (let row = 0; row < this.size; row++) {
                newRow.push(this.cells[row][col]);
            }
            newCells.push(newRow);

        }
        this.cells = newCells;
    }

    //================================
    // End of rotate functions
    //================================


}




let types = {
    1: [
        ['#999', '#999'],
        ['#999',  null ],
        ['#999',  null ],
        ['#999',  null ],
        ['#999',  null ]
    ],
    2: [
        ['#999',  null ],
        ['#999', '#999'],
        ['#999',  null ],
        ['#999',  null ],
        ['#999',  null ]
    ],
    3: [
        ['#f43',  null ],
        ['#f43',  null ],
        ['#f43', '#f43'],
        ['#f43',  null ],
        ['#f43',  null ]
    ],
    4: [
        [null  , '#999'],
        ['#999', '#999'],
        ['#999',  null ],
        ['#999',  null ],
        ['#999',  null ]
    ],
    5: [
        ['#999', '#999'],
        ['#999', '#999'],
        ['#999',  null ],
        ['#999',  null ]
    ],
    6: [
        ['#999', '#999'],
        ['#999',  null ],
        ['#999', '#999'],
        ['#999',  null ]
    ],
    7: [
        ['#f43', '#f43'],
        ['#f43',  null],
        ['#f43',  null],
        ['#f43', '#f43']
    ], 
    8: [
        ['#f43',  null],
        ['#f43', '#f43'],
        ['#f43', '#f43'],
        ['#f43',  null ]
    ],
    9: [
        ['#999', '#999','#999'],
        ['#999',  null ,  null],
        ['#999',  null ,  null],
        ['#999',  null ,  null]
    ],
    10: [
        ['#999',  null ,  null],
        ['#999', '#999','#999'],
        ['#999',  null ,  null],
        ['#999',  null ,  null]
    ],
    11: [
        ['#f43', '#f43','#f43'],
        [ null , '#f43',  null],
        [ null,  '#f43',  null],
        [ null,  '#f43',  null]
    ],
    12: [
        [ null , '#999','#999'],
        ['#999', '#999',  null],
        [ null,  '#999',  null],
        [ null,  '#999',  null]
    ],
    13: [
        [ null , '#999','#999'],
        [ null , '#999',  null],
        ['#999',  '#999',  null],
        [ null,  '#999',  null]
    ],
    14: [
        [ null , '#50f','#50f'],
        [ null,  '#50f',  null],
        [ null,  '#50f',  null],
        ['#50f', '#50f',  null]
    ],
    15: [
        [ null,  '#50f',  null],
        [ null , '#50f','#50f'],
        ['#50f', '#50f',  null],
        [ null,  '#50f',  null]
    ],
    16: [
        [ null,  '#f43',  null],
        ['#f43', '#f43','#f43'],
        [ null,  '#f43',  null],
        [ null,  '#f43',  null]
    ],
    17: [
        [ null ,  '#999',  null],
        [ '#999', '#999','#999'],
        [ '#999',  null ,  null],
        [ '#999',  null ,  null]
    ],
    18: [
        [ null ,  '#999'],
        [ '#999', '#999'],
        [ '#999',  null ],
        [ '#999', '#999']
    ],
    19: [
        [null,   '#50f'],
        [null,   '#50f'],
        ['#50f', '#50f'],
        ['#50f',  null ],
        ['#50f',  null ]
    ],
    20: [
        [null,   '#50f'],
        ['#50f', '#50f'],
        ['#50f', '#50f'],
        ['#50f',  null ]
    ],
    21: [
        ['#c18', '#c18'],
        ['#c18', '#c18'],
        ['#c18', '#c18']
    ],
    22: [
        [ null , null,  '#999'],
        ['#999', '#999','#999'],
        [ null , '#999' , null],
        [ null , '#999',  null]
    ],
    23: [
        ['#999', '#999' ,'#999'],
        [ null , '#999' ,'#999'],
        [ null , '#999' ,  null]
    ],
    24: [
        [null ,   null,  '#999'],
        [ null , '#999' ,'#999'],
        ['#999', '#999' ,  null],
        [ null , '#999' ,  null]
    ],
    25: [
        [null ,   null , '#999'],
        ['#999', '#999', '#999'],
        ['#999',  null ,   null],
        ['#999' , null ,   null]
    ],
    26: [
        [null ,  '#999', '#999'],
        ['#999', '#999',   null],
        ['#999',  null ,   null],
        ['#999' , null ,   null]
    ],
    27: [
        ['#999', '#999', '#999'],
        ['#999',  null , '#999'],
        ['#999' , null ,   null]
    ],
    28: [
        ['#999',  null , '#999'],
        ['#999', '#999', '#999'],
        ['#999' , null ,   null]
    ],
    29: [
        ['#f43',  null , '#f43'],
        ['#f43', '#f43', '#f43'],
        [ null , '#f43',   null]
    ],
    30: [
        [ null , '#999', '#999'],
        [ null , '#999',  null ],
        ['#999', '#999',  null ],
        ['#999',  null ,  null ]
    ],
    31: [
        [ null , '#f43', '#f43'],
        [ null , '#f43',  null ],
        ['#f43', '#f43',  null ],
        ['#f43',  null ,  null ]
    ],
    32: [
        ['#5f5',  null ,  null ],
        ['#5f5', '#5f5',  null ],
        ['#5f5', '#5f5', '#5f5']
    ],
    33: [
        [ null , '#5f5' ,  null],
        ['#5f5', '#5f5', '#5f5'],
        ['#5f5', '#5f5',  null ]
    ],
    34: [
        [ null , null ,  '#999'],
        ['#999', '#999', '#999'],
        ['#999', '#999',  null ]
    ],
    35: [
        [ null ,  null , '#50f'],
        [ null , '#50f', '#50f'],
        ['#50f', '#50f',  null ],
        ['#50f',  null ,  null ]
    ],
    36: [
        ['#c18',  null ],
        ['#c18',  null ],
        ['#c18',  null ],
        ['#c18',  null ],
        ['#c18',  null ],
        ['#c18',  null ]
    ]

}