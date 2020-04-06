/* jshint esversion: 8 */
/* jshint node: true */
/* jshint jquery: true */
/* jshint browser: true */
'use strict';

class ListView {
    constructor(model) {
        model.subscribe(this.rewriteList.bind(this));
    }

    rewriteList(fullListDic) {
        let tblBody = document.querySelector("#listAll");
        tblBody.innerHTML = "";
        for (let item of fullListDic) {
            // item id
            let theID = '';
            for (let i of item[1].split(" ")) {
                theID += i;
            }
            let trow = document.createElement("tr");

            let tdDone = document.createElement("td");
            let checkBoxes = document.createElement("input");
            checkBoxes.setAttribute("type", "checkbox");
            checkBoxes.setAttribute("class", "form-check");
            checkBoxes.checked=item[0];
            checkBoxes.setAttribute("onclick", `changePurchase(${ theID })`);
            tdDone.appendChild(checkBoxes);
            trow.appendChild(tdDone);

            let tdName = document.createElement("td");
            tdName.innerHTML = item[1];
            trow.setAttribute("id",theID);
            trow.appendChild(tdName);

            let tdQuan = document.createElement("td");
            tdQuan.innerHTML = item[2];
            trow.appendChild(tdQuan);
            
            let tdPrice = document.createElement("td");
            tdPrice.innerHTML = item[3];
            trow.appendChild(tdPrice);

            let tdStore = document.createElement("td");
            tdStore.innerHTML = item[4];
            trow.appendChild(tdStore);

            let tdSect = document.createElement("td");
            tdSect.innerHTML = item[5];
            trow.appendChild(tdSect);

            let tdPrior = document.createElement("td");
            tdPrior.innerHTML = item[6];
            let classy = item[6].split(" ")[0];
            trow.setAttribute("class",classy);           
            trow.appendChild(tdPrior);

            tblBody.appendChild(trow);
        }
        
    }
    
    // ADD TO OTHE LIST
    writeList(fullListDic) { 
        let loadedList = JSON.parse(fullListDic);
        let tblBody = document.querySelector("#listAll");
        tblBody.innerHTML = "";
        for (let item of loadedList) { 
            // item id
            let theID = '';
            for (let i of item.itemName.split(" ")) {
                theID += i;
            }
            let trow = document.createElement("tr");

            let tdDone = document.createElement("td");
            let checkBoxes = document.createElement("input");
            checkBoxes.setAttribute("type", "checkbox");
            checkBoxes.setAttribute("class", "form-check");
            checkBoxes.checked=item.purchased;
            checkBoxes.setAttribute("onclick", `changePurchase(${ theID }")`);
            tdDone.appendChild(checkBoxes);
            trow.appendChild(tdDone);

            let tdName = document.createElement("td");
            tdName.innerHTML = item.itemName;
            trow.setAttribute("id",theID);
            trow.appendChild(tdName);

            let tdQuan = document.createElement("td");
            tdQuan.innerHTML = item.quantity;
            trow.appendChild(tdQuan);
            
            let tdPrice = document.createElement("td");
            tdPrice.innerHTML = item.price;
            trow.appendChild(tdPrice);

            let tdStore = document.createElement("td");
            tdStore.innerHTML = item.store;
            trow.appendChild(tdStore);

            let tdSect = document.createElement("td");
            tdSect.innerHTML = item.section;
            trow.appendChild(tdSect);

            let tdPrior = document.createElement("td");
            tdPrior.innerHTML = item.priority;
            let classy = item.priority.split(" ")[0];
            trow.setAttribute("class",classy);           
            trow.appendChild(tdPrior);

            tblBody.appendChild(trow);
        }
        
    }

    change() {
        let ids = document.querySelectorAll('.form-check');
        if (ids.checked == true) {
            ids.checked=false;
        } else {
            ids.checked=true;
        }
        
        
    }
    
    warning() {
        let extra = document.querySelector(".space");
		let warning = document.createElement("p");
		warning.setAttribute("class", "alert alert-warning");
		warning.setAttribute('id', 'warnings');
		warning.innerHTML = "Please enter a Item Name and Price (Number)";
        extra.appendChild(warning);
    }

    checkWarning() {
        let extra = document.querySelector(".space");
        if (extra.hasChildNodes() == true) {
            let kids = document.getElementById("warnings");
            kids.remove();
        }
    }
}