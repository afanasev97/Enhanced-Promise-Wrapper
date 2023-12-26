# Enhanced Promise Wrapper

This repository contains a module providing enhanced functionality over standard JavaScript promises, allowing for the tracking and management of promises in a pending state.

## Files in the Repository:

### 1. `enhancedPromise.js`
The `enhancedPromise.js` module includes the `EnhancedPromise` class, serving as a wrapper over standard promises with additional functionality. This wrapper enables the tracking of promises in a pending state and provides extended capabilities.

### Usage:

To use `EnhancedPromise` and manage promises in the pending state, follow the steps below:

1. **Installation:**
   - Clone this repository or download the `enhancedPromise.js` file.
   
2. **Import into Your Project:**
   - Import `EnhancedPromise` and `pendingPromises` into your project:
   
   ```javascript
   const { EnhancedPromise, pendingPromises } = require('./enhancedPromise');
