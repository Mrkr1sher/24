var currentAns = "N/A";

function randInt(x) {
  return Math.floor(Math.random() * x) + 1;
}

window.onload = function() {
  document.getElementById("b").addEventListener("click", function() {
    var d = document.getElementById("d");
    var arr = getNums();
    d.innerHTML = strArray(arr);
    d.style.display = "none";
    replaceImgs(arr);
  });
  document.getElementById("s").addEventListener("click", function() {
    document.getElementById("d").style.display = "inline";
  });
  document.getElementById("hide").addEventListener("click", function() {
    document.getElementById("input").style.display = "none";
    document.getElementById("grade").style.display = "none";
    document.getElementById("hide").style.display = "none";
  });
  document.getElementById("grade").addEventListener("click", function() {
    if(document.getElementById("input").value) {
      document.getElementById("input").style.display = "none";
      document.getElementById("grade").style.display = "none";
      document.getElementById("hide").style.display = "none";
      document.getElementById("head").innerHTML = "24 Tournament Grade " + document.getElementById("input").value;
    }
  });
}

function getNums() {
  var a = 0;
  var b = 0;
  var c = 0;
  var d = 0;
  var s1 = 0;
  var s2 = 0;
  var cont = true;
  while (cont) {
    a = randInt(9);
    b = randInt(9);
    c = randInt(9);
    for (var i1 = 3; i1 > -1; i1--) {
      for (var i2 = 0; i2 < 4; i2++) {
        for (var i3 = 3; i3 > -1; i3--) {
          s1 = op(i1, a, b);
          s2 = op(i2, s1, c);
          for (d = 9; d > 0; d--) {
            if (op(i3, s2, d) === 24 && s1 % 1 === 0 && s2 % 1 === 0) {
              if(i1 === 0 && i2 === 0 && i3 === 0) {
                if(randInt(4) === 4) {
                cont = false;
                var array = [];
                array.push(a);
                array.push(b);
                array.push(c);
                array.push(d);
                array.push(i1);
                array.push(i2);
                array.push(i3);
                return array;
                }
              }else {
                cont = false;
                var array = [];
                array.push(a);
                array.push(b);
                array.push(c);
                array.push(d);
                array.push(i1);
                array.push(i2);
                array.push(i3);
                return array;
              }
            }
          }
        }
      }
    }
  }
}

function op(a, b, c) {
  switch (a) {
    case 0:
      return b + c;
    case 1:
      return b - c;
    case 2:
      return b * c;
    case 3:
      return b / c;
  }
}

function strArray(arr) {
  return "((" + arr[0] + " " + getOp(arr[4]) + " " + arr[1] + ")" + " " + getOp(arr[5]) + " " + arr[2] + ")" + " " + getOp(arr[6]) + " " + arr[3];
}

function getOp(a) {
  switch (a) {
    case 0:
      return "+";
    case 1:
      return "-";
    case 2:
      return "*";
    case 3:
      return "/";
  }
}

function replaceImgs(arr) {
  var nums = arr.slice(0).splice(0, 4);
  var newA = [];
  var ind = randInt(4) - 1;
  newA.push(nums[ind]);
  nums.splice(ind, 1);
  ind = randInt(3) - 1;
  newA.push(nums[ind]);
  nums.splice(ind, 1);
  ind = randInt(2) - 1;
  newA.push(nums[ind]);
  nums.splice(ind, 1);
  newA.push(nums[0]);
  for (var i = 0; i < newA.length; i++) {
    document.getElementById("img" + (i + 1)).src = "img/" + newA[i] + "_of_diamonds.png";
  }
}



// function randSuite() {
//   switch(randInt(4)) {
//     case 1:
//     return "clubs";
//     case 2:
//     return "diamonds";
//     case 3:
//     return "hearts";
//     case 4:
//     return "spades";
//   }
// }