
# documents-folder

  Get the local documents folder, for all major platforms.

## Usage

```js
const documentsFolder = require('@myrpc/documents-folder');

console.log(documentsFolder());
```

## Installation

```bash
$ npm install @myrpc/documents-folder
# OR
$ yarn add @myrpc/documents-folder
```

## API

### documentsFolder()

Return the location of the documents folder for the current platform.

__Warning__: On *nix, this will perform _synchronous_ operations, so don't
place it where concurrency is required. It's probably the best to just
determine this folder once when your application starts.

## Algorithm

- Mac OS X: `~/Documents`
- Windows: `~/Documents`
- *nix: `xdg-user-dir DOCUMENTS` || `~/Documents` || `/tmp`

## License

MIT
