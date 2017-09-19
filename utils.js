const getAllIndices = require('indices-for-same-value').getAllIndices
const getAllKeys = require('keys-for-same-value').getAllKeys
const uV = require('unique-values')
const getUniqueArrayValues = uV.getUniqueArrayValues
const getUniqueObjectValues = uV.getUniqueObjectValues

function getUniqueKeyValuePairs(inObject) {
    var values = getUniqueObjectValues(inObject)
    var kvpairs = []
    for (const value of values) {
        let keys = getAllKeys(value, inObject)
        let sortedKeysByLengthAscending = keys.sort((a, b) => a.length - b.length)
        let key = sortedKeysByLengthAscending[0]
        kvpairs.push({
            key,
            value
        })
    }
    return kvpairs
}

function getUniqueIndexValuePairs(inArray) {
    var values = getUniqueArrayValues(inArray)
    var ivpairs = []
    for (const value of values) {
        let indices = getAllIndices(value, inArray)
        let sortedIndicesAcending = indices.sort()
        let index = sortedIndicesAcending[0]
        ivpairs.push({
            index,
            value
        })
    }
    return ivpairs
}

function toObjectFromKeyValuePairs(kvpairs) {
    var out = {}
    kvpairs.forEach(function (pair) {
        out[pair.key] = pair.value
    });
    return out;
}

function toArrayFromIndexValuePairs(ivpairs) {
    var out = []
    ivpairs.forEach(function (pair) {
        out[pair.index] = pair.value
    });
    return out
}

module.exports = {
    getAllIndices,
    getAllKeys,
    getUniqueArrayValues,
    getUniqueObjectValues,
    getUniqueIndexValuePairs,
    getUniqueKeyValuePairs,
    toArrayFromIndexValuePairs,
    toObjectFromKeyValuePairs
}
