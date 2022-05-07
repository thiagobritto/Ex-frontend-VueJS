import MaskNumber from "@/services/MaskNumber";

export default {
    mounted(el, binding) {
        el.oninput = (evt) => {
            if (!evt.isTrusted) return

            el.value = MaskNumber.money(el.value, binding.value)

            el.dispatchEvent(event('input'))

        }
    }
}

function event(name) {
    var evt = document.createEvent('Event')
    evt.initEvent(name, true, true)
    return evt
}

// function cleanChar(str) {
//     let strToArray = [...str.toString()]
//     let arrayClear = []

//     strToArray.forEach(char => {
//         if (!isNaN(Number.parseInt(char)))
//             arrayClear.push(char)
//     })

//     return arrayClear.join('')
// }