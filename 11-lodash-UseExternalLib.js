const lodash = require('lodash')
const items = [1, [2, [3, [4]]]]
const flatItems = lodash.flattenDeep(items)
console.log(flatItems);