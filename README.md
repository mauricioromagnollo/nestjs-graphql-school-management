## **nestjs-graphql-school-management**

> An Open Source repository to study **NestJS** and **Graphql**.

## Packages

- class-transformer
- class-validator

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

### Get Lessons:

```gql
query {
  lessons {
    name
  }
}
```

```gql
# Response

{
  "data": {
    "lessons": [
      {
        "name": "Physycs Class"
      },
      {
        "name": "Math Class"
      },
      {
        "name": "Bio Class"
      }
    ]
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

### Create Student

```gql
mutation {
  createStudent(
    createStudentInput: {
  		firstName: "John",
    	lastName: "Doe"
  	}
	) {
    id
    firstName
    lastName
  }
}
```

```gql
# Response

{
  "data": {
    "createStudent": {
      "id": "9372d282-99bb-436e-a6f3-e2c35b7f3655",
      "firstName": "John",
      "lastName": "Doe"
    }
  }
}
```

```gql
query {
  students {
    firstName
  }
}
```

```gql
# Response

{
  "data": {
    "students": [
      {
        "firstName": "John"
      },
      {
        "firstName": "Jack"
      },
      {
        "firstName": "Anna"
      }
    ]
  }
}
```

### Get Student

```gql
query {
  student(id: "9372d282-99bb-436e-a6f3-e2c35b7f3655") {
    firstName
    lastName
  }
}
```

```gql
# Response

{
  "data": {
    "student": {
      "firstName": "John",
      "lastName": "Doe"
    }
  }
}
```
