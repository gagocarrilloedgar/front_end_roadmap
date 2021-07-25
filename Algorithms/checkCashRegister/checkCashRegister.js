

function checkCashRegister(price, cash, cid) {

    const units = [
        ["PENNY", 0.01],
        ["NICKEL", 0.05],
        ["DIME", 0.1],
        ["QUARTER", 0.25],
        ["ONE", 1],
        ["FIVE", 5],
        ["TEN", 10],
        ["TWENTY", 20],
        ["ONE HUNDRED", 100]
    ]

    const convertToBject = _cid => {
        let obj = {}
        let copiedArray = [..._cid] // avoid the original array changed
        copiedArray.reverse().forEach(item => {
            obj[item[0]] = item[1]
        })
        return obj
    }

    const newCid = convertToBject(cid);
    const newUnits = convertToBject(units)

    let res = { status: '', change: [] }
    let updatedCid = {}
    let updatedChange = cash - price

    for (let unit of Object.keys(newCid)) {

        let tempRes = Math.floor(updatedChange / newUnits[unit])
        let current = Math.round(newCid[unit] / newUnits[unit])

        let resAmount = current <= tempRes ? current : tempRes;
        let resAmountValue = resAmount * newUnits[unit]

        updatedCid[unit] = parseFloat((newCid[unit] - resAmountValue).toFixed(2))

        if (resAmount > 0) {
            res.change.push([unit, resAmountValue])
            updatedChange = parseFloat((updatedChange - resAmountValue).toFixed(2))
        }

    }

    if (updatedChange > 0) {
        res = { status: "INSUFFICIENT_FUNDS", change: [] }
    }
    else if (Object.keys(updatedCid).every(unit => 0 === updatedCid[unit])) {
        res = { status: 'CLOSED', change: cid }
    }
    else {
        res.status = 'OPEN'
    }

    return res;
}