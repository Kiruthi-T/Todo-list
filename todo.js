let arr=[];

let addbtn = () => {
    let inpval = document.getElementById("inp").value;

    let maindiv = document.getElementById("maindiv");
    console.log(maindiv);

    if (inpval.trim() == '') {
        let empty = document.getElementById("empty");
        empty.innerHTML = "No Todo entered"
    }
    else {

        empty.innerHTML = "";

        let mydiv = document.createElement("div");
        maindiv.appendChild(mydiv);
        mydiv.className = "list";

        let checkbox = document.createElement("input");
        checkbox.type = 'checkbox';
        mydiv.appendChild(checkbox);


        let para = document.createElement("span");
        para.innerHTML = inpval;
        mydiv.appendChild(para);

        let str = () => {
            if (checkbox.checked) {
                para.style.textDecoration = "line-through";
            }
            else {
                para.style.textDecoration = "none";
            }
        };
        checkbox.addEventListener("click", str);



        let delbtn = document.createElement("button");
        delbtn.innerHTML = `<i class="fa-solid fa-trash-can"></i>`;
        mydiv.appendChild(delbtn);
        delbtn.className = "delbtn";

        delbtn.addEventListener("click", () => {
            if (checkbox.checked) {
                maindiv.removeChild(mydiv);
            }
            else {
                alert("Item need to be checked before delete");
            }
        });

        document.getElementById("inp").value="";
        arr.push(inpval);
        localStorage.setItem("todo list",JSON.stringify(arr));
        sessionStorage.setItem("todo list",JSON.stringify(arr));


    };
};


