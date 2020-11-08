const sayHello = () => {
  console.log('Hello')
}

const sayGoobye = () => {
  console.log('Goodbye')
}

const RequestSomething = () => {
  console.log('Api request has been sent')
}

const sendNotification = () => {
  console.log('Send Event Notification')
}

const logUserOut = () => {
  console.log('log user out')
}

// these are the functions which will run according to your settings

const defaultTasks = [
  // tasks props should be array
  {
    fn: sayHello,
    id: '1',
    config: '*-*-*-*-*-utc',
    name: 'Say Hello',
    description: 'Say Hello on console'
  },
  {
    fn: sayGoobye,
    id: '2',
    config: '*-14-8-11-*-utc',
    name: 'Say Goodbye',
    description: 'Say Goodbye on console'
  },
  {
    fn: RequestSomething,
    id: '3',
    config: '*-14-*-*-*-utc',
    name: 'Request Something',
    description: 'Send API'
  },
  {
    fn: sendNotification,
    id: '4',
    config: '10-11-18-7-*-utc',
    name: 'Send Notification',
    description: 'Send Event Notification'
  },
  {
    fn: logUserOut,
    id: '5',
    config: '*-16-*-10-1-utc',
    name: 'Log user out'
  }
]

export default defaultTasks
