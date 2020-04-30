// Project 1: Cella-Rule-150
// Authors: Junji Bressan, Armon Rahimi, Cindy Quach
// Email: Junjib@csu.fullerton.edu
//        cindyquach@csu.fullerton.edu
//        armon16@csu.fullerton.edu

var g_canvas = { cell_size:10, wid:30, hgt:30 }; // JS Global var, w canvas size info.

// Declaration for shape objects
var stickTile = {orientation: ['A', 'B', 'C', 'E', 'F', 'G', 'H', 'I']};
var tile;
var colors = ["Purple", "Orange", "Pink"]; 
var x = 0; var y = 0;

function setup() // P5 Setup Fcn
{
    let sz = g_canvas.cell_size;
    let width = sz * g_canvas.wid;  // Our 'canvas' uses cells of given size, not 1x1 pixels.
    let height = sz * g_canvas.hgt;
    createCanvas( width, height );  // Make a P5 canvas.
    //draw_grid( 10, 50, "white" ); NOTE: re-add this line after experiments are complete
    selectTile();
}

function draw()
{
}

function drawStick()
{
    let color = selectColor();
    fill(color);
    x = 150; y = 150;
    if(tile == 0)
    {
        for(let i = 0; i < 6; i++)
        {
            square(x, y, 10);
            y = y + 10;
        }
    }
    else if(tile == 1)
    {
        for(let i = 0; i < 6; i++)
        {
            square(x, y, 10);
            x = x + 10;
        }
    }
    else if(tile == 2)
    {
        for(let i = 0; i < 6; i++)
        {
            square(x, y, 10);
            y = y + 10;
        }
    }
    else if(tile == 3)
    {
        for(let i = 0; i < 6; i++)
        {
            square(x, y, 10);
            x = x + 10;
        }
    }
    else if(tile == 4)
    {
        for(let i = 0; i < 6; i++)
        {
            square(x, y, 10);
            y = y + 10;
        }
    }
    else if(tile == 5)
    {
        for(let i = 0; i < 6; i++)
        {
            square(x, y, 10);
            x = x + 10;
        }
    }
    else if(tile == 6)
    {
        for(let i = 0; i < 6; i++)
        {
            square(x, y, 10);
            y = y + 10;
        }
    }
    else if(tile == 7)
    {
        for(let i = 0; i < 6; i++)
        {
            square(x, y, 10);
            x = x + 10;
        }
    }
    var x = get(150,150,10,10);
    console.log(x);
    if(x == color)
    {
        console.log("True");
    }
}

function selectTile()
{
    tile = Math.floor(Math.random() * 8);
    drawStick();
}

function selectColor()
{
    let col = Math.floor(Math.random() * 3);
    return colors[col];
}