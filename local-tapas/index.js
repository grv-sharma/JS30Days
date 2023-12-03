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

        // Save Items to local storage
        
        form.reset();

    });
})