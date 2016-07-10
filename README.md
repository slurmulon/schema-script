# SchemaScript

> :triangular_ruler: JavaScript with JSON Schemas

---

# Install

```bash
npm install schema-script
```

# Examples

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
