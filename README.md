# nfc-debug-reader
A simple website made in raw HTML + CSS + JS to read NFC tags and display messages (and their records) in a human-readable format.

## Usage
### Online
You can use the website at [nfc.bemxio.xyz](https://nfc.bemxio.xyz), if you just want to test it out.

### Locally
If you want to run it locally though, you will need a web server.

Because of the Web NFC API requiring HTTPS, you will need to use a certificate for the server. The easiest way to get one is to use [mkcert](https://mkcert.dev) to generate a certificate for `localhost`.

Once you have the certificate, there's a script written in Python, that will do the job of including the certificates and running the web server for you. Just run `python3 start.py`, and it should work at `https://127.0.0.1:8080`.

## License
This project is released into the public domain. Do what you want with it, as long as you don't hold me responsible for anything that happens :P

In case you really want to dive into the details, the license is available in the [`LICENSE`](LICENSE) file.

## Contributing
If you want to contribute, feel free to open a pull request. If you have any questions, feel free to open an issue.