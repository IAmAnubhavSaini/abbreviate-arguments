const utils = require('./utils')

function abbreviateArguments() {
    const list = utils.getUniqueArrayValues(Array.from(arguments).map(i => String(i))).sort()
    let abbreviations = {}
    let previous = ""
    for (let wordIndex in list) {
        let current = list[wordIndex]
        let next = list[wordIndex + 1] || ""
        let nextMatches = true
        let prevMatches = true

        for (var letterIndex = 0, currentLength = current.length; letterIndex < currentLength; letterIndex++) {
            var curChar = current.charAt(letterIndex)
            nextMatches = nextMatches && curChar === next.charAt(letterIndex)
            prevMatches = prevMatches && curChar === previous.charAt(letterIndex)
            if (!nextMatches && !prevMatches) {
                letterIndex++
                break
            }
        }

        previous = current
        if (letterIndex === currentLength) {
            abbreviations[current] = current
            continue
        }
        for (var a = current.substr(0, letterIndex); letterIndex <= currentLength; letterIndex++) {
            abbreviations[a] = current
            a += current.charAt(letterIndex)
        }
    }
    return utils.toObjectFromKeyValuePairs(utils.getUniqueKeyValuePairs(abbreviations))
}

module.exports = abbreviateArguments
