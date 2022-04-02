## **nestjs-graphql-school-management**

> An Open Source repository to study **NestJS** and **Graphql**.

## Run

First, install Docker and Docker Compose. Then, run this command:

```bash
$ npm run start:dev:watch
```

## Use

You can access the **Graphql Playground** when the project is running locally. [http://localhost:3000/graphql](http://localhost:3000/graphql)


## GraphQL

### Create Lesson:

```gql
mutation {
  createLesson(
    createLessonInput: {
      name: "Physycs Class",
      startDate: "2022-04-02T04:47:30.079Z",
      endDate: "2022-04-02T05:47:30.079Z"
    }
  ) {
    name
	id
  }
}
```
```gql
# Response

{
  "data": {
    "createLesson": {
      "name": "Physycs Class",
      "id": "8b36064b-0404-4fb9-b5c5-c44674326f43"
    }
  }
}
```

### Get Lesson:

```gql
query {
  lesson(id: "42303bff-a9b6-4e1a-82d4-fffba3483d7d") {
    name
    startDate
  }
}
```

```gql
# Response

{
  "data": {
    "lesson": {
      "name": "Physycs Class",
      "startDate": "2022-04-02T04:47:30.079Z"
    }
  }
}
```
