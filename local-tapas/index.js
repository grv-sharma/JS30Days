document.addEventListener("DOMContentLoaded", function() {
    unOList = document.getElementById("ulist");
    deText = document.getElementById("defaultText");
    line = document.getElementById("seperator");
    saveItems = [];
    let count = 0;

    document.addEventListener("submit", function(e) {
        const list = document.createElement("input");
        list.type = 'checkbox';
        list.id = `box${count}`;

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
        console.log(options.value);
        const currText = document.createTextNode(options.value);
        label.appendChild(currText);
        //list.appendChild(currText);
        unOList.appendChild(list);
        unOList.appendChild(label);

        const divider = document.createElement("hr");
        unOList.appendChild(divider);
        count++;

        // push box-id and item-text into array
        saveItems.push([`box${count}`, `${options.value}`]);
        //console.log(saveItems);
        form.reset();

        //localStorage.setItem("taco-list", JSON.stringify(saveItems));
        //appendToStorage("taco-list", `box${count}`, `${options.value}`);
        persistentStorage("taco-list", saveItems);
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
        //console.log(savedListItemsParsed);
        if (savedListItemsParsed === null) {
            return;
        } else {
            for (let i = 0; i < savedListItemsParsed.length; i++) {
                //console.log(savedListItemsParsed[i]);
                const chk = document.createElement('input');
                const divider = document.createElement('hr');
                chk.type = 'checkbox';
                chk.id = savedListItemsParsed[i][0];

                const lbl = document.createElement('label');
                lbl.htmlFor = savedListItemsParsed[i][0];
                lbl.appendChild(document.createTextNode(savedListItemsParsed[i][1]));

                unOList.appendChild(chk);
                unOList.appendChild(lbl);
                unOList.appendChild(divider);
                count = savedListItemsParsed[i][0][savedListItemsParsed[0][0].length - 1];
                console.log(count);
            }
        }   
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