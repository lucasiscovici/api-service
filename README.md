# Api Service

Speed-up Api Service writing

Only write commands as simple function, and config easily

# Install
## npm or yarn
```shell
npm install https://github.com/lucasiscoviciMoon/api-service 
# or
yarn add https://github.com/lucasiscoviciMoon/api-service 
```
## sublime text plugin
Package Control: add repository  
https://raw.github.com/lucasiscoviciMoon/api-service/sublime/packages.json  
Package Control: install package  
Api Service Snippets + SideBar Menu


# Setup

## Configure

```js
import { configure } from 'api-service'


configure({
    baseUrl: 'https://jsonplaceholder.typicode.com/',
    headers: {},

    // if you have an authorization 
    auth: {
        Authorization: "Bearer" // Authorization name
        getToken: () => {} // Function to get (access)token
    }
})

```

## Create Feature

### Feature User

- create folder with feature name "User"
- create 'index.js' file

```js
import { createApi } from '../../apiServices'

import * as commands from './commands'

const { api: userApi } = createApi({ commands })

export { userApi }
```

- create 'commands.js' file

```js
export const get = async ({ api, userId }) => {
    const response = await api.get(`users/${userId}`)
    return response.data
}
```
