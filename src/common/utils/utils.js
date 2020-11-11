import { ONE_NUMBER, ASTERISK, SEVERAL_NUMBERS } from '../data/types'

export const getHRtime = (hrTime, conditions, hourFormat) => {
  const { min, hour, dom, mon, dow } = conditions
  if (
    min === '*' &&
    hour === '*' &&
    dom === '*' &&
    mon === '*' &&
    dow === '*'
  ) {
    // 1s

    hrTime += `every minutes`
  } else if (
    min !== '*' &&
    hour === '*' &&
    dom === '*' &&
    mon === '*' &&
    dow === '*'
  ) {
    // 2
    // every hour as long as it's {} minutes
    hrTime += `everyday, every hour as long as it's ${min} minute `
  } else if (
    min === '*' &&
    hour !== '*' &&
    dom === '*' &&
    mon === '*' &&
    dow === '*'
  ) {
    // 3
    hrTime += `everyday, every minute as long as it's ${hour}${hourFormat}  `
  } else if (
    min === '*' &&
    hour === '*' &&
    dom !== '*' &&
    mon === '*' &&
    dow === '*'
  ) {
    // 4
    hrTime += `every hour every minute as long as it's ${dom}th`
  } else if (
    min === '*' &&
    hour === '*' &&
    dom === '*' &&
    mon !== '*' &&
    dow === '*'
  ) {
    // 5
    hrTime += `every hour every minute as long as it's in ${mon}`
  } else if (
    min === '*' &&
    hour === '*' &&
    dom === '*' &&
    mon === '*' &&
    dow !== '*'
  ) {
    // 6
    hrTime += `every hour every minute, everyday`
  } else if (
    min !== '*' &&
    hour !== '*' &&
    dom === '*' &&
    mon === '*' &&
    dow === '*'
  ) {
    // 7
    hrTime += `at ${hour}:${min}${hourFormat} everyday`
  } else if (
    min !== '*' &&
    hour === '*' &&
    dom !== '*' &&
    mon === '*' &&
    dow === '*'
  ) {
    // 8
    hrTime += `at ${min}minute(s) every hour as long as it's ${dom}th`
  } else if (
    min !== '*' &&
    hour === '*' &&
    dom === '*' &&
    mon !== '*' &&
    dow === '*'
  ) {
    // 9
    hrTime += `at ${min}minute(s) every hour everyday in ${mon}`
  } else if (
    min !== '*' &&
    hour === '*' &&
    dom === '*' &&
    mon === '*' &&
    dow !== '*'
  ) {
    // 10
    hrTime += `at ${min}minute(s) every hour as long as it's ${dow}`
  } else if (
    min !== '*' &&
    hour !== '*' &&
    dom !== '*' &&
    mon === '*' &&
    dow === '*'
  ) {
    // 11
    hrTime += `at ${hour}:${min}${hourFormat} as long as it's in ${dom}th`
  } else if (
    min !== '*' &&
    hour !== '*' &&
    dom === '*' &&
    mon !== '*' &&
    dow === '*'
  ) {
    // 12
    hrTime += `at ${hour}:${min}${hourFormat} as long as it's it's in ${mon}`
  } else if (
    min !== '*' &&
    hour !== '*' &&
    dom === '*' &&
    mon === '*' &&
    dow !== '*'
  ) {
    // 13
    hrTime += `at ${hour}:${min}${hourFormat} as long as it's ${dow}`
  } else if (
    min !== '*' &&
    hour !== '*' &&
    dom !== '*' &&
    mon !== '*' &&
    dow === '*'
  ) {
    // 14
    hrTime += `at ${hour}:${min}${hourFormat} as long as it's ${dom}th ${mon}`
  } else if (
    min !== '*' &&
    hour !== '*' &&
    dom !== '*' &&
    mon === '*' &&
    dow !== '*'
  ) {
    // 15
    hrTime += `at ${hour}:${min}${hourFormat} as long as it's ${dow} and ${dom}th  `
  } else if (
    min !== '*' &&
    hour !== '*' &&
    dom !== '*' &&
    mon !== '*' &&
    dow !== '*'
  ) {
    // 16
    hrTime += `at ${hour}:${min}${hourFormat} in ${dom}th ${mon} as long as it's on ${dow}`
  } else if (
    min === '*' &&
    hour !== '*' &&
    dom !== '*' &&
    mon === '*' &&
    dow === '*'
  ) {
    // 17
    hrTime += `every minute at ${hour}${hourFormat} as long as it's ${dom}th`
  } else if (
    min === '*' &&
    hour !== '*' &&
    dom === '*' &&
    mon !== '*' &&
    dow === '*'
  ) {
    // 18
    hrTime += `every minute at ${hour}${hourFormat} as long as it's ${mon}`
  } else if (
    min === '*' &&
    hour !== '*' &&
    dom === '*' &&
    mon === '*' &&
    dow !== '*'
  ) {
    // 19
    hrTime += `every minute at ${hour}${hourFormat} as long as it's ${dow}`
  } else if (
    min === '*' &&
    hour !== '*' &&
    dom !== '*' &&
    mon !== '*' &&
    dow === '*'
  ) {
    // 20
    hrTime += `every minute at ${hour}${hourFormat} as long as it's ${dom}th ${mon}`
  } else if (
    min === '*' &&
    hour !== '*' &&
    dom !== '*' &&
    mon === '*' &&
    dow !== '*'
  ) {
    // 21
    hrTime += `every minute at ${hour}${hourFormat} as long as it's ${dom}th and ${dow}`
  } else if (
    min === '*' &&
    hour !== '*' &&
    dom !== '*' &&
    mon !== '*' &&
    dow !== '*'
  ) {
    // 22
    hrTime += `every minute at ${hour}${hourFormat} as long as it's ${dow}, ${dom}th and ${mon}`
  } else if (
    min === '*' &&
    hour === '*' &&
    dom !== '*' &&
    mon !== '*' &&
    dow === '*'
  ) {
    // 23
    hrTime += `every hour every minute as long as it's ${dom}th ${mon}`
  } else if (
    min === '*' &&
    hour === '*' &&
    dom !== '*' &&
    mon === '*' &&
    dow !== '*'
  ) {
    // 24
    hrTime += `every hour every minute as long as it's ${dow} and ${dom}th`
  } else if (
    min === '*' &&
    hour === '*' &&
    dom !== '*' &&
    mon !== '*' &&
    dow !== '*'
  ) {
    // 25
    hrTime += `every hour every minute as long as it's ${dow} and ${dom}th ${mon}`
  } else if (
    min === '*' &&
    hour === '*' &&
    dom === '*' &&
    mon !== '*' &&
    dow !== '*'
  ) {
    // 26
    hrTime += `every hour every minute as long as it's ${dow} in ${mon}`
  } else if (
    min !== '*' &&
    hour === '*' &&
    dom === '*' &&
    mon !== '*' &&
    dow !== '*'
  ) {
    // 27
    hrTime += `at ${min}minute(s) every hour as long as it's ${dow} in ${mon}`
  } else if (
    min !== '*' &&
    hour === '*' &&
    dom !== '*' &&
    mon !== '*' &&
    dow !== '*'
  ) {
    // 28
    hrTime += `at ${min}minute(s) every hour as long as it's ${dow} in ${dom}th ${mon}`
  } else if (
    min !== '*' &&
    hour === '*' &&
    dom !== '*' &&
    mon !== '*' &&
    dow === '*'
  ) {
    // 29
    hrTime += `at ${min}minute(s) every hour as long as it's ${dom}th ${mon}`
  } else if (
    min !== '*' &&
    hour !== '*' &&
    dom === '*' &&
    mon !== '*' &&
    dow !== '*'
  ) {
    // 30
    hrTime += `at ${hour}:${min}${hourFormat} as long as it's ${dow} in ${mon}`
  } else if (
    min === '*' &&
    hour !== '*' &&
    dom === '*' &&
    mon !== '*' &&
    dow !== '*'
  ) {
    // 31
    hrTime += `at ${hour}${hourFormat} every minute as long as it's ${dow} in ${mon}`
  } else {
    // there is 1 possibility I can't think of
    throw Error('Sorry, something went wrong in config key of task object')
  }
  // console.log('hrTime::', hrTime)
  return hrTime
}

export const formatHour = (hour) => {
  if (hour.type === ASTERISK) return { hour }
  console.log('hour ::', hour)
  const values = hour.value
  let hourFormat = ''

  const convertedArr = values.map((item) => {
    let intHour = Number(item)
    if (intHour > 12) {
      intHour -= 12
      hourFormat = 'P.M.'
    } else {
      hourFormat = 'A.M.'
    }
    const res = intHour.toString()

    return res
  })
}

export const formatMonth = (mon) => {
  if (typeof mon !== typeof {}) throw Error('Bad argument')
  const { value } = mon
  const msg = `Bad config, month is required to be less than 13`
  const formatted = value.map((val) => {
    switch (val) {
      case '1':
        return 'January'
      case '2':
        return 'Faburary'
      case '3':
        return 'March'
      case '4':
        return 'April'
      case '5':
        return 'May'
      case '6':
        return 'June'
      case '7':
        return 'July'
      case '8':
        return 'Augest'
      case '9':
        return 'September'
      case '10':
        return 'October'
      case '11':
        return 'November'
      case '12':
        return 'December'
      default:
        throw Error(msg)
    }
  })
  const result = { ...mon, value: formatted }
  return result
}

export const formatDOW = (dow) => {
  if (typeof dow !== typeof {}) throw Error('Bad args')
  const msg = 'Bad config, dow is required to be less than 8'
  const { value } = dow
  const formatted = value.map((val) => {
    switch (val) {
      case '1':
        return 'Monday'
      case '2':
        return 'Tuesday'
      case '3':
        return 'Wednesday'
      case '4':
        return 'Thirsday'
      case '5':
        return 'Friday'
      case '6':
        return 'Saturday'
      case '7':
        return 'Sunday'
      default:
        throw Error(msg)
    }
  })
  const result = { ...dow, value: formatted }
  return result
}

export const insertZero = (arr) => {
  // console.log('arr ', arr)
  const result = arr.map((item) => {
    if (item.length === 1 && item !== '*') {
      return (item = `0${item}`)
    } else if (item === '*') {
      return item
    } else {
      return item
    }
  })

  // console.log('result', result)

  return result
}

export const converConfigValuesToObject = (str) => {
  const arr = str.split(',')
  if (arr[0] === '*') {
    return {
      type: ASTERISK,
      length: arr.length,
      value: arr
    }
  }
  if (arr.length === 1) {
    return {
      type: ONE_NUMBER,
      length: arr.length,
      value: arr
    }
  } else if (arr.length > 1) {
    return {
      type: SEVERAL_NUMBERS,
      length: arr.length,
      value: arr
    }
  } else {
    throw Error('Bad Settings')
  }
}
