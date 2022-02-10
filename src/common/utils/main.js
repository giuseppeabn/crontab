import {
  validateMin,
  validateHour,
  validateDom,
  validateMon,
  validateDow,
  IsNeededToRunNow
} from './validateTime'
import { getCurrentTime } from './utils'

const formatDow = (dow) => {
  if (dow === 0) return 7
  else return dow
}

const detectTaskTime = (arr, tz) => {
  const now = getCurrentTime(tz)

  const min = arr[0]
  const hour = arr[1]
  const dom = arr[2]
  const mon = arr[3]
  const dow = arr[4]

  const minValidateRes = IsNeededToRunNow(min, now.getMinutes().toString())
  const hourValidateRes = IsNeededToRunNow(hour, now.getHours().toString())
  const domValidateRes = IsNeededToRunNow(dom, now.getDate().toString())
  const monValidateRes = IsNeededToRunNow(mon, (now.getMonth() + 1).toString())
  const dowValidateRes = IsNeededToRunNow(
    dow,
    formatDow(now.getDay()).toString()
  )

  if (!minValidateRes.isNeededToRun) {
    return minValidateRes.isNeededToRun
  }
  if (!hourValidateRes.isNeededToRun) {
    return hourValidateRes.isNeededToRun
  }
  if (!domValidateRes.isNeededToRun) {
    return domValidateRes.isNeededToRun
  }
  if (!monValidateRes.isNeededToRun) {
    return monValidateRes.isNeededToRun
  }
  if (!dowValidateRes.isNeededToRun) {
    return dowValidateRes.isNeededToRun
  }

  return true
}

export const runFn = (task, tz) => {
  const { fn, splittedConf, objOfConf } = task

  const isNotAsterisk = splittedConf
    .slice(0, splittedConf.length - 1)
    .find((item) => item !== '*')

  if (isNotAsterisk === undefined) fn()
  else {
    const minValidateRes = validateMin(objOfConf[0])

    const hourValidateRes = validateHour(objOfConf[1])

    const domValidateRes = validateDom(objOfConf[2])

    const monValidateRes = validateMon(objOfConf[3])

    const dowValidateRes = validateDow(objOfConf[4])

    if (minValidateRes.error) return console.error(minValidateRes.msg)
    else if (hourValidateRes.error) return console.error(hourValidateRes.msg)
    else if (domValidateRes.error) return console.error(domValidateRes.msg)
    else if (monValidateRes.error) return console.error(monValidateRes.msg)
    else if (dowValidateRes.error) return console.error(dowValidateRes.msg)

    if (detectTaskTime(objOfConf, tz)) fn()
  }

  return true
}

const callRepeater = (task, timeZone) => {
  const { fn, objOfConf } = task
  if (detectTaskTime(objOfConf, timeZone)) fn()
  setInterval(() => {
    if (detectTaskTime(objOfConf, timeZone)) fn()
  }, 60000)
}

export const repeatExecute = (arr, tz) => {
  const killOnTime = setInterval(() => {
    if (getCurrentTime(tz).getSeconds() === 0) {
      for (const el of arr) {
        if (el.valid) callRepeater(el, tz)
      }
      clearInterval(killOnTime)
    }
  }, 1000)
}
