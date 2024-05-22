# @ronaldzav/discord-warns-manage
📁 Manage warnings to your members on your discord server

## Installation

```bash
npm install @ronaldzav/discord-warns-manage
```
If you are using yarn:

```bash
yarn add @ronaldzav/discord-warns-manage
```

You can use the latest version of `discord-warns-manage` by adding it as a dependency to your `package.json`:

```bash
    "dependencies": {
      "@ronaldzav/discord-warns-manage": "github:ronaldzav/discord-warns-manage"
    }
```

## Usage

```js
const { Warn, GuildWarns, UnWarn, ResetWarns } = require('@ronaldzav/discord-warns-manage');
```

```js
// Warn a discord member

  Warn({
    memberId: "12345",
    guildId: '1234567890'
  });
```

```js
// Get all warns of a guild

  let warns = GuildWarns(1234567890);
  console.log(warns); // [{ memberId: "12345", guildId: '1234567890' }, ...]
```

```js
// Unwarn a discord member

  UnWarn({
    memberId: "12345",
    guildId: '1234567890'
    number: 1 // default is 1
  });

  /* Remove <number> warns of a discord member in this guild. */
```

```js
// Reset warns of a guild

  ResetWarns(guild);
```

## CLASSES

### `Warn(options)`

#### options
- `memberId` (string) - The id of the discord member to warn
- `guildId` (string) - The id of the discord guild
- `number` (number) - The number of warns to add . Default is 1.

### `GuildWarns(guildId)`

#### guildId
- (string) - The id of the discord guild

Returns an array of warns of a guild.

### `UnWarn(options)`

#### options
- `memberId` (string) - The id of the discord member to warn
- `guildId` (string) - The id of the discord guild
- `number` (number) - The number of warns to remove. Default is 1.

Unwarn a discord member in a guild.

### `ResetWarns(guildId)`

#### guildId
- (string) - The id of the discord guild

Reset warns of a guild.

## LICENSE
Apache-2.0  
Copyright 2024 Ronald Zavaleta