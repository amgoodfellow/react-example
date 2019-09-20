# API Folder

## Purpose:

This folder is where all network requests should be kept. In most of our projects, we'll have a single `api.js` file that exports multiple network request functions. As an example, the file should contain functions of the following form:

```javascript
// Snooze a notification on the backend
export const snooze = async id => {
  try {
    const response = await fetch('/notifications/v1/snooze/' + id, {
      credentials: 'include',
      method: 'POST',
      headers: {
        Accept: 'application/json',
        Authorization: 'Bearer ' + token
      }
    })
    return await response.json()
  } catch (err) {
    return err
  }
}
```

Functions can then be imported from this file with the following syntax:

```javascript
import { snooze } from './api.js'
```
