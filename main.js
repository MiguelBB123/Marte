canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");

roverWidth = 100;
roverHeigth = 90;
backgroundImage = "mars.jpg";
roverImage = "rover.png";
roverX = 10;
roverY = 10;

function add(){
    backgroundImageTag = new Image(); //Definindo uma variável com uma nova imagem
    backgroundImageTag.onload = uploadBackground; //Ajustando uma função ao carregar essa variável
    backgroundImageTag.src = backgroundImage; //Carregar a imagem

    roverImageTag = new Image();
    roverImageTag.onload = uploadRover;
    roverImageTag.src = roverImage;
}

function uploadBackground(){
    ctx.drawImage(backgroundImageTag, 0, 0, canvas.width, canvas.heigth);
}

function uploadRover(){
    ctx.drawImage(roverImageTag, roverX, roverY, roverWidth, roverHeigth);
}

window.addEventListener("keydown", myKeyDown);

function myKeyDown(e){
    keyPressed = e.keyCode;
    console.log(keyPressed);
    if(keyPressed == '38'){
        up();
        console.log("cima");
    }
    if(keyPressed == '40'){
        down();
        console.log("baixo");
    }
    if (keyPressed == '37'){
        left();
        console.log("esquerda");
    }
    if(keyPressed == '39'){
        right();
        console.log("direita");
    }
}
function up(){
    if(roverY >= 0){
        roverY = roverY - 10;
        console.log("Quando direcional para cima for pressionado, x=" + roverX + "y=" + roverY);
        uploadBackground();
        uploadRover();
    }
}

function down(){
    if(roverY <= 500){
        roverY = roverY + 10;
        console.log("Quando direcional para baixo for pressionado, x=" + roverX + "y=" + roverY);
        uploadBackground();
        uploadRover();
    }
}

function left(){
    if(roverX >= 0){
        roverX = roverX - 10;
        console.log("Quando direcional para esquerda for pressionado, x=" + roverX + "y=" + roverY);
        uploadBackground();
        uploadRover();
    }
}

function right(){
    if(roverX <= 700){
        roverX = roverX + 10;
        console.log("Quando direcional para direita for pressionado, x=" + roverX + "y=" + roverY);
        uploadBackground();
        uploadRover();
    }
}