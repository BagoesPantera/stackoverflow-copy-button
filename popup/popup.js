const counter = document.getElementById("counter");
const counterManual = document.getElementById("counterManual");

chrome.storage.sync.get(['counter'], (result) => {
    result.counter != null ? counter.innerHTML = result.counter : counter.innerHTML = 0;
});

chrome.storage.sync.get(['counterManual'], (result) => {
    result.counterManual != null ? counterManual.innerHTML = result.counterManual : counterManual.innerHTML = 0;
});