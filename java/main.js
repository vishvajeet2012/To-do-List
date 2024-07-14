function btn() {
    let inputt = document.getElementById("input-box");
    let inputvalue = inputt.value; //yaha par user input se value access ki hai maine button click hone ke baade me

    //// alert jb value blank ho
    if (inputvalue === "") {
      // alert("Beta value kon provide krega ??");
      let popup = document.createElement("div"); ///popup window bana rha hu
      let popup_para = document.createElement("p");
      var popupbtn = document.createElement("button");
      popup.className = "popup";
      popup_para.className = "popup_para";
      popupbtn.className = "popup_btn";
      ///      popup.appendChild(main_box)           pata nahi kyu work nahi kr rha.. main container hide ho rha hai
      document.body.appendChild(popup);

      popup.style.color = "black";
      popup.appendChild(popup_para).innerText =          // popup button
        "Beta value kon provide krega ??";
      popup.appendChild(popupbtn).innerText = "OK!!";

      popupbtn.addEventListener("click", popbbt);

      function popbbt() {
        popup.remove();
      }

      return;
    }
    let bodyy = document.getElementsByTagName("body");
    var moonicon = document.getElementById("moonicon"); /// moonicon tag
    var z = document.getElementById("finsound"); //yha finsh sound
    var x = document.getElementById("myAudio"); //yha pr audio element fetch
    let a = document.querySelector(".content");
    var para = document.createElement("p"); //yaha par paragraph tag banaya hai
    let btn = document.createElement("button");
    let fin = document.createElement("button");
    let delfin = document.createElement("div");

    btn.className = "del"; /// btutton class name
    fin.className = "fin";
    delfin.className = "delfin";
    para.className = "paraa";

    //style conent
    // a.style.display = "flex"
    //    a.style.flexWarp = "nowrapx"

    //style button

    //btn.style.textAlign = "left"
    //  btn.style.height = "29px"
    // btn.style.marginBlockStart = "15px"
    btn.style.borderRadius = "0px 10px 10px 0px";
    btn.style.outline = "none";
    btn.style.border = "1px solid black";

    // para tag style
    para.style.borderRadius = "10px 0px 0px 10xp";
    para.style.width = "auto";
    para.style.display = "flex";
    para.style.justifyContent = "space-between";
    para.style.overflow = "auto";

    //console.log(inputt.value);3
    para.innerText = inputvalue; //yaha par paragraph tag ki innertext ko set kiya hai
    a.appendChild(para);
    btn.innerText = "Delete"; /// button inner text added
    para.appendChild(delfin); //yaha par maine paragraph tag ko append kiya hai
    console.log(para); //aur yeh me console karwane ke liye likha tha.
    delfin.appendChild(btn); /// delFin div pr btn ko append kiya kyuki display flex usne krne pr kam aayega
    delfin.appendChild(fin).innerText = "Finished";

    /// Delete p tag
    btn.addEventListener("click", btnDel);
    function btnDel() {
      x.play();
      console.log("this is vishu");

      para.remove();
    }
    fin.addEventListener("click", finish);
    function finish() {
      /// Finis button pr click krne pr funciton
      z.play();
      fin.style.color = "Black";
      fin.style.backgroundColor = "white";
      para.style.backgroundColor = "royalblue";
      para.style.color = "white";
      btn.remove();
    }
    inputt.value = "";
  }

  var headd = document.getElementsByTagName("h2")[0];
  var boddy = document.body;
  var main_box = document.getElementsByClassName("main-container")[0];
  function darkmode() {
    main_box.classList.toggle("darkMode");
    headd.classList.toggle("darkMode");
    boddy.classList.toggle("darkMode2");

    // headd.style.color = "white";
    // main_box.style.backgroundColor = "#333";
    // main_box.style.color = "white";

    // boddy.style.backgroundColor = "#332";
    // boddy.style.color = "white";
    // console.log("thisis ");
  }

  /*console.log(c);

let a= document.querySelector('content');
let para=document.createElement('p');
a.appendChild(para);*/
