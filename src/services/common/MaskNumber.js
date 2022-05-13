const MaskNumber = {}

const separator = [
    '.', ',', '-', '/'
]

MaskNumber.mask = function (baseNumber, maskNumber = '0') {
    this.baseArray = prepare(removeNaN(baseNumber))
    this.maskArray = prepare(maskNumber)

    this.response = execute(this.baseArray, this.maskArray)

    return this.response.join('')
}

MaskNumber.money = function (baseNumber, maskNumber = '000000000.00') {
    this.baseArray = prepare(removeNaN(baseNumber))
    this.maskArray = prepare(maskNumber)
    let separer = decimalSeparator(this.maskArray)

    if (this.baseArray.length < 2) {
        return '0' + separer + '0' + this.baseArray.join('')
    }

    if (this.baseArray.length < 3) {
        return '0' + separer + this.baseArray.join('')
    }

    this.response = execute(this.baseArray, this.maskArray)

    return this.response.join('')
}

MaskNumber.volume = function (baseNumber, maskNumber = '00000000.000') {
    this.baseArray = prepare(removeNaN(baseNumber))
    this.maskArray = prepare(maskNumber)
    let separer = decimalSeparator(this.maskArray)

    if (this.baseArray.length < 2) {
        return '0' + separer + '00' + this.baseArray.join('')
    }

    if (this.baseArray.length < 3) {
        return '0' + separer + '0' + this.baseArray.join('')
    }

    if (this.baseArray.length < 4) {
        return '0' + separer + this.baseArray.join('')
    }

    this.response = execute(this.baseArray, this.maskArray)

    return this.response.join('')
}

function removeNaN(num = 0) {
    let str = ''
    for (let char in num) {
        if (!isNaN(Number.parseInt(num[char]))) {
            str += num[char]
        }
    }
    return (Number(str));
}

function prepare(base) {
    return [...base.toString()]
}

function decimalSeparator(maskArray) {
    let maskArrayReverse = [...maskArray].reverse()
    let dsep = ''
    maskArrayReverse.forEach(sep => {
        if (!dsep && separator.includes(sep)) dsep = sep
    });
    return dsep
}

function execute(baseArray, maskArray) {
    let response = []
    let baseCount = baseArray.length
    let maskCount = maskArray.length

    do {

        if (
            separator.includes(
                MaskNumber.maskArray[maskCount - 1]
            )
        ) {
            response.unshift(MaskNumber.maskArray[maskCount - 1])
            maskCount--
            continue
        }
        response.unshift(MaskNumber.baseArray[baseCount - 1])

        baseCount--
        maskCount--
    } while (baseCount > 0)

    return response
}

export default MaskNumber
