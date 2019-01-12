`import Helper from '@ember/component/helper'`

isEqual = ([lhs, rhs]) ->
    return lhs==rhs

IsEqualHelper = Helper.extend
    compute: isEqual

`export { isEqual }`
`export default IsEqualHelper`
