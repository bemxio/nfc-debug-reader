# NFC Debug Reader
A simple website made to read data from an [NFC](https://en.wikipedia.org/wiki/Near-field_communication) tag in a human-readable format.

## Usage
### Online
You can use the website at [nfc.bemxio.xyz](https://nfc.bemxio.xyz), hosted by GitHub Pages.

### Local
If you want to host it locally, you will obviously need a web server.

Because of the Web NFC API requiring HTTPS, you'll also need to use a certificate for the server. The easiest way to get one is by using [mkcert](https://mkcert.dev) to generate a certificate for `localhost`.

Once you have the certificate, you can use the included Python script to run a web server with the provided certificates. Just ensure the constants in [`server.py`](server.py) are correct and then run `python server.py`.

## License
This project is released into the public domain. Do what you want with it, as long as you don't hold me responsible for anything that happens.

If you want to contribute, feel free to open a pull request. If you have any questions, feel free to open an issue.
