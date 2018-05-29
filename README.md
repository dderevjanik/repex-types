# Repex - Interface

[![Build Status](https://travis-ci.org/dderevjanik/repex-types.svg?branch=master)](https://travis-ci.org/dderevjanik/repex-types)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg)](https://github.com/prettier/prettier)



# Api documentation

#### Login 

Will authurize user in the application

Return uniq json token for current user

`POST /api/v1/user/login`

**Parameters**

| Name | Type | Description	|
|-------|-------|---------------|
| email | string | user email address |
| password | string | user password |

```javascript
{
	email: 'user.email@gmail.com',
    password: '123userpassword'
}
```

**Response**

```javascript
{
	type: 'data',
    email: 'user.email@gmail.com'
    token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9'
}
```

---

#### Update person data

Will update user person data in database

Return status

`POST /api/v1/user/person/update`

`TODO: http authorization header`

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| firstName | string | new user first name |
| lastName | string | new user last namme |

```javascript
{
	firstName: 'Peter',
    lastName: 'Peto'
}
```

**Response**

```javascript
{
	type: 'data'
    status: true
}

```

---

### Create new Issue

Will create new issue under current user

Return id of new created issue

`POST  '/api/v1/issue/create'`

`TODO: auth header`

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| title | string | Title of the issue |
| body | string | text witch will describe issue |
| imageBase64 | string | image data in png format |
| events | array of event objects | events, array of objects(will by link) describe what happend on page |

```javascript
{
	title: 'Button error',
    body: 'can not click on the red button',
    imageBase64: 'data:image/png;base64, iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAYAAACNbyblAAAAHElEQVQI12P4//8/w38GIAXDIBKE0DHxgljNBAAO9TXL0Y4OHwAAAABJRU5ErkJggg==',
    events: [{
    
    },
    {
    
    }]
}
```

**Response**

```javascript
{
	type: 'data',
    id: 3211
}

```

---

### Create or Update user integration data

Will create (if no exists) or update (if already exists) user integration data with external applications

return status

`POST  '/api/v1/user/integration/update'`

`TODO: auth header`

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| integrationType | string | Application witch is integrated one of: 'github' \| 'trello' \| 'targetprocess' \| 'jira'
| repositoryName | string | repository name where will by future issues   |


```javascript
{
	integrationType: 'github',
    repositoryName: 'repex',
    repositoryId: '0023acs32',
    repositoryOwner: {
      login: peterpeto,
      id: 20032,
    },
}
```

**Response**

```javascript
{
	type: 'data',
    status: true
}

```









