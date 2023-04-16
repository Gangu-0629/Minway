let arr = [];
let rows = 5;
let columns = 5;

let username="Player";
function myFunction() {
    let x = document.getElementById("usna").value;
    username=x;
    console.log("The name is "+x);
}

let charactername="man";
let robourl="man.png";
let cm=document.getElementById("charman");
let cw=document.getElementById("charwoman");
cm.addEventListener('click',()=>{
    robourl="man.png";
    console.log(robourl);
    charactername="man";
    console.log(charactername);
})
cw.addEventListener('click',()=>{
    robourl="woman.png";
    console.log(robourl);
    charactername="woman";
    console.log(charactername);
})




// creating two-dimensional array
for (let i = 0; i < rows; i++) {
  arr[i] = [];
  for (let j = 0; j < columns; j++) {
    arr[i][j] = Math.floor((Math.random()*10)+1);
  }
}

let rigl=[4,9,14,19,24];
let dowl=[20,21,22,23,24];

let da=document.querySelectorAll(".bo");
console.log(da);
let x=0;
for(let i=0;i<5;i++){
   for(let j=0;j<5;j++){
    da[x].innerHTML=arr[i][j];
    x++;
   }
}
arr[0][0]=0;
arr[4][4]=0;
da[0].innerHTML=0;
da[24].innerHTML=0;


let pathcreen=document.getElementById("comscr");
pathcreen.innerHTML="start";

let e = "box-" + String(0);
let v = document.getElementById(e);
adding(v);
let score=0;
let sce=document.getElementById("screen");
sce.innerHTML=0;
let st=document.getElementById("scr2");
st.innerHTML=Minimumpath(arr);





let bn = document.querySelectorAll("button");
bn.forEach(b => {
    b.addEventListener('click', (e) => {

        //for the value inside the box
       
                if (e.target.innerHTML == "right") {
                    pathcreen.innerHTML="Moved right";
            let old = v.id;
            let num = old.substring(4, old.length);
            num = parseInt(num);
            if(rigl.includes(num)==true){
             
            }
            else{
              
                let str="right";
            removeing(num,str);
            num++;
            let newp = "box-" + String(num);
            let va = document.getElementById(newp);
            adding(va);
            v = va;
            }

        }
        if(e.target.innerHTML == "down") {
            pathcreen.innerHTML="Moved Down";
            let old = v.id;
            let num = old.substring(4, old.length);
            num = parseInt(num);
            if(dowl.includes(num)==true){
             
            }
            else{
                let str="down";
                removeing(num,str);
            num += 5;
            let newp = "box-" + String(num);
            let va = document.getElementById(newp);
            adding(va);
            v = va;
            }
        }
       
        //Ending the game;
        if (v.id == "box-24") {
            if(score==st.innerHTML){
                pathcreen.innerHTML=username+" Won";
            }
            else{
                pathcreen.innerHTML=username+"Lost ";
            }
        }
        else{
        score+=parseInt(v.innerHTML);
        sce.innerHTML=score;
        }
    });
}
)




function adding(v) {

    //adding robot
    let s = document.createElement("img");
    s.src = robourl;
    console.log(s.src);
    s.classList.add("robot");   

    s.id = "gan";
    v.appendChild(s);
}
function removeing(num,str) {

    //adding the path.
    let use = document.createElement("img");
    if(str=="right"){
      use.src = "right-arrow.png";
    }
    if(str=="down"){
        use.src="down-arrow.png"
    }
    use.classList.add("fit");
    console.log(num);
    let e = "box-" + String(num);
    let va = document.getElementById(e);
    let sa = document.getElementById("gan");
    va.removeChild(sa);
    va.appendChild(use);
}


function Minimumpath(grid){
 
    let dp = [];
let rows = 5;
let columns = 5;

// creating two-dimensional array
for (let i = 0; i < rows; i++) {
  dp[i] = [];
  for (let j = 0; j < columns; j++) {
    dp[i][j] = 0;
  }
}
  let m=5;
        let n=5;
        for(let i=m-1;i>=0;i--){
            for(let j=n-1;j>=0;j--){
                if(i==m-1&& j==n-1){
                    dp[i][j]=grid[i][j];
                }
                else{
                    let r=1000,d=1000;
                    if(i+1<m){
                        r=grid[i][j]+dp[i+1][j];
                    }
                    if(j+1<n){
                        d=grid[i][j]+dp[i][j+1];
                    }
                    dp[i][j]=Math.min(r,d);
                }
            }
        }
        return dp[0][0];


}