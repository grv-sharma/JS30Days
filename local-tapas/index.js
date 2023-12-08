document.addEventListener("DOMContentLoaded", function() {
    unOList = document.getElementById("ulist");
    deText = document.getElementById("defaultText");
    line = document.getElementById("seperator");
    clearBtn = document.getElementById("clr");
    saveItems = [];
    let count = 0;

    //clear
    clearBtn.addEventListener("click", function() {
        localStorage.clear();
        location.reload();
    });

    
    function statusSwitcher() {
        inps = document.querySelectorAll('input');
        //set data-status
        inps.forEach((el) => {
            el.addEventListener("click", function() {
                wholeList = JSON.parse(localStorage.getItem("taco-list"));
                for (let i = 0; i < wholeList.length; i++) {
                    if (el.dataset.index == wholeList[i][3]) {
                        wholeList[i][2] = !wholeList[i][2];
                    }
                }
                localStorage.clear();
                localStorage.setItem("taco-list", JSON.stringify(wholeList));
                unOList.innerHTML = '';
                restoreItems('taco-list');
            });
        });
    }
    

    document.addEventListener("submit", function(e) {
        const list = document.createElement("input");
        list.type = 'checkbox';
        list.id = `box${count}`;
        list.dataset.status = 'false';
        list.dataset.index = count;

        const label = document.createElement("label");
        label.htmlFor = `box${count}`;
        
    
        if (unOList.contains(deText)) {
            unOList.removeChild(deText);
            unOList.removeChild(line);
        }; 

        e.preventDefault();

        const form = e.target; 
        const formFields = form.elements;

        const options = formFields.options;
        const currText = document.createTextNode(options.value);
        label.appendChild(currText);
        //list.appendChild(currText);
        unOList.appendChild(list);
        unOList.appendChild(label);

        const divider = document.createElement("hr");
        unOList.appendChild(divider);
        count++;
    
        
        // push box-id and item-text into array
        //push with data-status
        saveItems.push([`box${count}`, `${options.value}`, `${list.dataset.status}`, `${list.dataset.index}`]);
        //console.log(saveItems);
        form.reset();

        persistentStorage("taco-list", saveItems);
        statusSwitcher();
    });

    function restoreItems(key) {
        items = localStorage.getItem('taco-list');
        if (localStorage.getItem("taco-list") != null) {
            if (unOList.contains(deText)) {
                unOList.removeChild(deText);
                unOList.removeChild(line);
            }; 
        }
        
        savedListItemsParsed = JSON.parse(items);
        if (savedListItemsParsed === null) {
            return;
        } else {
            for (let i = 0; i < savedListItemsParsed.length; i++) {
                const chk = document.createElement('input');
                const divider = document.createElement('hr');
                chk.type = 'checkbox';
                chk.id = savedListItemsParsed[i][0];
                chk.dataset.status = savedListItemsParsed[i][2];
                chk.dataset.index = savedListItemsParsed[i][3];
                // check previously checked items
                if (chk.dataset.status === 'true') {
                    chk.checked = true;
                }

                const lbl = document.createElement('label');
                lbl.htmlFor = savedListItemsParsed[i][0];
                lbl.appendChild(document.createTextNode(savedListItemsParsed[i][1]));

                unOList.appendChild(chk);
                unOList.appendChild(lbl);
                unOList.appendChild(divider);
                count = savedListItemsParsed[i][0][savedListItemsParsed[0][0].length - 1];
            }
        }   
        statusSwitcher();
    }


    function persistentStorage(itemList, currArr) {
        itList = localStorage.getItem(itemList);
        if (itList === null) {
            localStorage.setItem(itemList, JSON.stringify(currArr));
            currArr.splice(0, currArr.length);
        } else {
            itListParsed = JSON.parse(itList);
            itListParsed.push(...currArr);
            localStorage.clear();
            localStorage.setItem(itemList, JSON.stringify(itListParsed));
            currArr.splice(0, currArr.length);
        }  
    }

    restoreItems(); 
})