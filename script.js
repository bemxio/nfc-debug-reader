if (window.location.search.includes("debug")) {
    eruda.init();
}

const terminal = document.getElementById("console-output");
const button = document.getElementById("activate-nfc");

async function main() {
    if (!("NDEFReader" in window)) {
        return alert("Couldn't find `NDEFReader`. Make sure you're running this website on a mobile device, with Chrome or Opera.\n");
    }

    button.disabled = true;
    
    const nfc = new NDEFReader();

    try {
        await nfc.scan();
    } catch (error) {
        terminal.innerText += error + "\n";
    }

    nfc.addEventListener("reading", (event) => {
        terminal.innerText += "Received NDEF message.\n";

        for (const [record, index] of event.message.records) {
            terminal.innerText += `Record #${index + 1} - `;

            terminal.innerText += `ID: ${record.id}, `;
            terminal.innerText += `Type: ${record.recordType}, `;
            terminal.innerText += `MIME Type: ${record.mediaType}\n`;

            terminal.innerText += `Data:\n${record.data}\n`;
        }

        terminal.innerText += "\n";
    });

    nfc.addEventListener("readingerror", (event) => {
        terminal.innerText += "Error: " + event.error;
    });
}

button.addEventListener("click", main);