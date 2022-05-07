window.onload = () => {
    console.log("==============================================\nStackOverflow Copy Button");
    
    const answer = document.getElementById("answers");
    const pre = answer.getElementsByTagName("pre");

    // https://stackoverflow.com/a/822486/13079820
    function strip (html) {
        const tmp = document.createElement("DIV");
        tmp.innerHTML = html;
        return tmp.textContent || tmp.innerText || "";
    }

    // https://developer.chrome.com/docs/extensions/reference/storage/#usage
    function counter(){
        chrome.storage.sync.get(['counter'], (result) => {
            if (result.counter == null) {
                chrome.storage.sync.set({counter: 1});
            }else {
                // adding and +1 to the counter
                chrome.storage.sync.set({counter: result.counter + 1});
            }
        });
    }

    document.addEventListener('copy', (e) =>{
        chrome.storage.sync.get(['counterManual'], (result) => {
            if (result.counterManual == null) {
                chrome.storage.sync.set({counterManual: 1});
            }else {
                // adding and +1 to the counter
                chrome.storage.sync.set({counterManual: result.counterManual + 1});
            }
        });
    }, true); 

    for(let item of pre){
        const copy = document.createElement("button");
        copy.innerHTML = "copy";
        copy.onclick = () => {
            const text = item.innerHTML;
            navigator.clipboard.writeText(strip(text));
            alert("copied !");
            counter();
        }
        item.parentNode.insertBefore(copy, item.nextSibling);
    }
}
