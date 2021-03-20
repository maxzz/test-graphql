## Description

Testing the GraphQL server implementation.

## Use

Run ```yarn dev``` and open ```localhost:4000```

## Queries and mutations

##### Ask highlights

Query all records
```js
query {
  highlights {
    id
    content
    title
    author
  }
}
```

or just some fields
```js
query {
  highlights {
    title
    author
  }
}
```

Result:
```js
{
  "data": {
    "highlights": [
      {
        "title": "Dharma Bums",
        "author": "Jack Kerouac"
      },
      {
        "title": "Arbitrary Stupid Goal",
        "author": "Tamara Shopsin"
      }
    ]
  }
}
```

##### Query for an individual note by including an ID parameter with our query
```js
query {
  highlight(id: "1") {
    content
  }
}
```

Result:
```js
{
  "data": {
    "highlight": {
      "content": "One day I will find the right words, and they will be simple."
    }
  }
}
```
##### Mutation: Add Record
```js
mutation {
  newHighlight(author: "Adam Scott" title: "JS Everywhere" content: "GraphQL is awesome") {
    id
    author
    title
    content
  }
}
```

Result:
```js
{
  "data": {
    "newHighlight": {
      "id": "3",
      "author": "Adam Scott",
      "title": "JS Everywhere",
      "content": "GraphQL is awesome"
    }
  }
}
```

##### Mutation: Delete Record
```js
mutation {
  deleteHighlight(id: "3") {
    id
  }
}
```

Result:
```js
{
  "data": {
    "deleteHighlight": {
      "id": "3"
    }
  }
}
```

```js
```

### Sources

[Get Started Building GraphQL APIs With Node](https://css-tricks.com/get-started-building-graphql-apis-with-node/)
