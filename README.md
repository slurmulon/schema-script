# SchemaScript

> :triangular_ruler: JavaScript with JSON Schemas

---

SchemaScript intends to streamline JSON Schema into JavaScript to provide a language with unparalleled non-strict validation
capabilities.

This project is in its infancy and will not even be functional until the following SweetJS issue is resolved:

https://github.com/sweet-js/sweet.js/issues/233

This task will support the loading of non-SweetJS (i.e. vanilla node) modules for use in compile-time definitions.

# Install

```bash
npm install slurmulon/schema-script
cd schema-script
npm link
```

# Proposal

## Keywords

- `schema <identifier> = <Object>` defines and registers a hoisted JSON Schema which is bound with a `$validate` method
- `is <Object> <Schema>` determines if an instance object adheres to a schema

## Usage

```javasccript
schema email = {
  type: 'object',
  properties: {
    type: 'string',
    pattern: '^[a-zA-Z]+[a-zA-Z0-9\\._]+@[a-zA-Z\\.]+\\.[a-zA-Z]{2,}$'
  }
}

is 'foo@bar' email     // false
is 'foo@bar.baz' email // true
```

# Contributing

Anybody is welcome to contribute. Feel free to message me at me@madhax.io or just open a well-justified PR with tests.
