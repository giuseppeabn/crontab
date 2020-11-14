import React, { useContext } from 'react'
import PropTypes from 'prop-types'
import { BasicCronContext } from '../../../contexts/basic/BasicCronContext'
import styles from '../../../styles.module.css'
import {
  formatDOW,
  formatHour,
  formatMonth,
  converConfigValuesToObject
} from '../../../common/utils/utils'
import { ASTERISK } from '../../../common/data/types'

const addHrTime = (tasks) => {
  if (!tasks.length) return []
  const result = tasks.map((task) => {
    // let year = "2020";
    const { config } = task
    const splittedConfig = config.split('-')
    const convertedConfig = splittedConfig.map((item) => {
      const obj = converConfigValuesToObject(item)
      return obj
    })
    let hrTime = ''

    // const { hour, hourFormat } = formatHour(convertedConfig[1])
    // const inserted = insertZero(splitted)
    // // console.log('inserted ::', inserted)
    const min = convertedConfig[0]
    const hour = convertedConfig[1]
    const dom = convertedConfig[2]
    const mon = formatMonth(convertedConfig[3])

    const dow = formatDOW(convertedConfig[4])

    if (mon.type === ASTERISK) {
      hrTime += 'Every Month'
    } else {
      const arr = mon.value
      hrTime += `In`
      for (let i = 0; i < arr.length; i++) {
        if (i === 0) {
          hrTime += ` ${arr[i]}`
        } else {
          hrTime += `, ${arr[i]}`
        }
      }
    }

    if (dom.type === ASTERISK) {
      hrTime += ''
    } else {
      const arr = dom.value
      hrTime += ` on`
      for (let i = 0; i < arr.length; i++) {
        if (i === 0) {
          hrTime += ` ${arr[i]}th`
        } else {
          hrTime += `, ${arr[i]}th`
        }
      }
    }

    if (dow.type === ASTERISK) {
      hrTime += ''
    } else {
      const arr = dow.value
      if (dom.type === ASTERISK) {
        hrTime += ` on`
      } else {
        hrTime += ` and`
      }
      for (let i = 0; i < arr.length; i++) {
        if (i === 0) {
          hrTime += ` ${arr[i]}`
        } else {
          hrTime += `, ${arr[i]}`
        }
      }
    }

    if (hour.type === ASTERISK) {
      hrTime += ' every hour'
    } else {
      const arr = hour.value
      hrTime += ` At`
      for (let i = 0; i < arr.length; i++) {
        const res = formatHour(arr[i])
        if (i === 0) {
          hrTime += ` ${res}`
        } else {
          hrTime += `, ${res}`
        }
      }
    }

    if (min.type === ASTERISK) {
      hrTime += ' every minute'
    } else {
      const arr = min.value
      if (hour.type !== ASTERISK) {
        hrTime += ` and At`
      } else {
        hrTime += ` At`
      }
      for (let i = 0; i < arr.length; i++) {
        if (i === 0) {
          hrTime += ` ${arr[i]} minute(s)`
        } else {
          hrTime += `, ${arr[i]} minute(s)`
        }
      }
    }

    // // since we have 32 possibilities, we are gonna have 32 if statements
    // const conditions = { min, hour, dom, mon, dow }
    // const res = getHRtime(hrTime, conditions)

    return { ...task, hrTime }
  })

  return result
}

const Dashboard = (props) => {
  const { tasks } = useContext(BasicCronContext)
  // console.log('tasks in Dashboard', tasks)

  const crons = addHrTime(tasks)
  // console.log('crons :::')
  return (
    <div className={styles.dashboard}>
      <table className={styles.dashboard__container}>
        <caption className={styles.dashboard__title__container}>
          <h1 className={styles.dashboard__title}>Dashboard</h1>
        </caption>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Schedule</th>
            <th>Schedule (HR)</th>
            <th>Description</th>
          </tr>
        </thead>
        {crons.length &&
          crons.map((cron, index) => (
            <tbody key={index}>
              <tr>
                <td>{cron.id}</td>
                <td>{cron.name}</td>
                <td>{cron.config}</td>
                <td>{cron.hrTime}</td>
                <td>{cron.description}</td>
              </tr>
            </tbody>
          ))}
      </table>
    </div>
  )
}

Dashboard.propTypes = {}

export default Dashboard
