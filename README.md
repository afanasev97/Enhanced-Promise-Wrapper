# Enhanced-Promise-Wrapper
This repository contains modules that provide a wrapper over standard JavaScript promises to track and manage promises in a pending state.


## Files in the Repository:

### 1. `enhancedPromise.js`
The `enhancedPromise.js` module includes the `EnhancedPromise` class, serving as a wrapper over standard promises. This wrapper enables the tracking of promises in a pending state and facilitates their management.

### 2. `pendingPromises.js`
The `pendingPromises.js` module provides the `PendingPromises` structure, offering methods to add, remove, and retrieve information about promises in a pending state.

## Usage:

1. **`enhancedPromise.js`:** Import the `EnhancedPromise` class from this module to create promises with additional tracking capabilities.
2. **`pendingPromises.js`:** Utilize `PendingPromises` to manage the state of promises in the pending state.

## Example Usage:

```javascript
const EnhancedPromise = require('./enhancedPromise');
const pendingPromises = require('./pendingPromises');

// Using EnhancedPromise and pendingPromises to manage promises
// ... (adding, removing, retrieving information about promises in a pending state)

// Set EnhancedPromise as the global Promise
global.Promise = EnhancedPromise;
