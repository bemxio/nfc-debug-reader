const terminal = document.getElementById("console-output");
const button = document.getElementById("activate-nfc");

async function scanNFC() {
    button.disabled = true;

    if (!("NDEFReader" in window)) {
        return alert("Couldn't find NDEFReader. Make sure you're running this website on Android, with Chrome or Opera.\n");
    }

    const nfc = new NDEFReader();

    try {
        await nfc.scan();
    } catch (error) {
        terminal.innerText += `Error: ${error}\n`;
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
        terminal.innerText += "Error: Reading NFC tag failed.\n";
    });
}

button.addEventListener("click", scanNFC);