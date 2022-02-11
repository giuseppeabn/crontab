# reactjs-crontab

The reactjs-crontab module is very light-weight task scheduler in reactjs based on [linux crontab](https://www.geeksforgeeks.org/crontab-in-linux-with-examples). This module allows you to schedule task in reactjs.

**Cron Syntax Guide** at [link](https://d180vcwahe2y6s.cloudfront.net/index.html)

## Getting Started

```bash
npm install --save amsa-reactjs-crontab
```

## Usage 1

To schedule component,

```jsx
import React from 'react'
import Crontab from 'amsa-reactjs-crontab'

const styles = {
  text: {
    margin: '70px',
    color: 'skyblue'
  }
}

const HelloMsg = () => {
  return <h1 style={styles.text}>Hello AMSA!</h1>
}

const App = () => {
  const [open, setOpen] = React.useState(null)

  const sayHello = () => {
    setOpen(true)
  }
  // this is the function which will run according to your settings

  const tasks = React.useMemo(
    () => [
      {
        id: '1',
        fn: sayHello,
        config: '* * * * *'
        // this runs every minutes
      },
      {
        id: '2',
        fn: sayHello,
        config: '* 13,14 10 4 *'
        // In April At 9AM and At 35 minute(s), 36 minute(s)
      }
    ],
    []
  )
  // tasks should be memoized

  return (
    <div>
      <Crontab
        tasks={tasks}
        timeZone='UTC' // UTC timezone.
      />
      {open && <HelloMsg />}
    </div>
  )
}

export default App
```

Copying and pasting code above will render `<HelloMsg />`

## Usage 2

To schedule function,

```jsx
import React from 'react'
import Crontab from 'reactjs-crontab'
import 'reactjs-crontab/dist/index.css'

const sayHello = () => {
  console.log('Hello AMSA')
}

const RequestSomething = () => {
  console.log('Api request has been sent')
}

// these are the functions which will run according to the config

const App = () => {
  const tasks = React.useMemo(
    () => [
      {
        fn: sayHello,
        config: '* * * * *',
        // Execute every minutes
        id: '1',
        name: 'Say Hello' // optional
      },
      {
        fn: RequestSomething,
        config: '* 15,19 * 11,12 *',
        // Execute In November, December At 3PM and 7PM every minute
        id: '2',
        name: 'Request Something' // optional
      }
    ],
    []
  )
  // tasks should be memoized

  return (
    <Crontab
      tasks={tasks}
      timeZone='UTC'
      // timezone is UTC timezone.
    />
  )
}
export default App
```

Copying and pasting code above will result something like this below

This will do what it says at the scheduled time.

## Features

- **Supports All Timezones**
- **Supports All modern browsers**
- **No extra dependencies** except React
- **No style library** is used to style the components. **vanilla css** is used.
- Provide **specific error message**, you will find it so easy to debug.
- Provide Demo website which helps you to easily set up your crontab

## Cron Syntax

```
 # ┌──────────── minute
 # │ ┌────────── hour
 # │ │ ┌──────── day of month
 # │ │ │ ┌────── month
 # │ │ │ │ ┌──── day of week
 # │ │ │ │ │
 # * * * * *
```

```
MIN HOUR DOM MON DOW
```

OR

Can be multiple values like this

```
 # ┌──────────── minute
 # │   ┌────────── hour
 # │   │   ┌──────── day of month
 # │   │   │ ┌────── month
 # │   │   │ │ ┌──── day of week
 # │   │   │ │ │
 # 1,2 6,7 * * *
```

```
MIN,MIN HOUR,HOUR DOM,DOM MON,MON DOW,DOW
```

### Allowed values

| field        | value             |
| ------------ | ----------------- |
| minute       | 0-59              |
| hour         | 0-23              |
| day of month | 1-31              |
| month        | 1-12              |
| day of week  | 1-7 (7 is Sunday) |

## API

```
Crontab Props {
  tasks: [
    {
      fn: yourFn,
      id: '1',
      config: '* 11 18 10,13 *',
      name: 'logUserOut'
    }
  ],
  timeZone: "UTC", "local" or "YOUR PREFERRED TIMEZONE",
}

Crontab.propTypes = {
  tasks: PropTypes.arrayOf(
    PropTypes.shape({
      fn: PropTypes.func.isRequired,
      config: PropTypes.string.isRequired,
      id: PropTypes.string,
      name: PropTypes.string
    })
  ),
  timeZone: PropTypes.string.isRequired
}

Crontab.defaultProps = {
  tasks: [],
  timeZone: 'UTC'
}

```

## Supported Timezones

'Europe/Andorra',
'Asia/Dubai',
'Asia/Kabul',
'Europe/Tirane',
'Asia/Yerevan',
'Antarctica/Casey',
'Antarctica/Davis',
'Antarctica/DumontDUrville', // https://bugs.chromium.org/p/chromium/issues/detail?id=928068
'Antarctica/Mawson',
'Antarctica/Palmer',
'Antarctica/Rothera',
'Antarctica/Syowa',
'Antarctica/Troll',
'Antarctica/Vostok',
'America/Argentina/Buenos_Aires',
'America/Argentina/Cordoba',
'America/Argentina/Salta',
'America/Argentina/Jujuy',
'America/Argentina/Tucuman',
'America/Argentina/Catamarca',
'America/Argentina/La_Rioja',
'America/Argentina/San_Juan',
'America/Argentina/Mendoza',
'America/Argentina/San_Luis',
'America/Argentina/Rio_Gallegos',
'America/Argentina/Ushuaia',
'Pacific/Pago_Pago',
'Europe/Vienna',
'Australia/Lord_Howe',
'Antarctica/Macquarie',
'Australia/Hobart',
'Australia/Currie',
'Australia/Melbourne',
'Australia/Sydney',
'Australia/Broken_Hill',
'Australia/Brisbane',
'Australia/Lindeman',
'Australia/Adelaide',
'Australia/Darwin',
'Australia/Perth',
'Australia/Eucla',
'Asia/Baku',
'America/Barbados',
'Asia/Dhaka',
'Europe/Brussels',
'Europe/Sofia',
'Atlantic/Bermuda',
'Asia/Brunei',
'America/La_Paz',
'America/Noronha',
'America/Belem',
'America/Fortaleza',
'America/Recife',
'America/Araguaina',
'America/Maceio',
'America/Bahia',
'America/Sao_Paulo',
'America/Campo_Grande',
'America/Cuiaba',
'America/Santarem',
'America/Porto_Velho',
'America/Boa_Vista',
'America/Manaus',
'America/Eirunepe',
'America/Rio_Branco',
'America/Nassau',
'Asia/Thimphu',
'Europe/Minsk',
'America/Belize',
'America/St_Johns',
'America/Halifax',
'America/Glace_Bay',
'America/Moncton',
'America/Goose_Bay',
'America/Blanc-Sablon',
'America/Toronto',
'America/Nipigon',
'America/Thunder_Bay',
'America/Iqaluit',
'America/Pangnirtung',
'America/Atikokan',
'America/Winnipeg',
'America/Rainy_River',
'America/Resolute',
'America/Rankin_Inlet',
'America/Regina',
'America/Swift_Current',
'America/Edmonton',
'America/Cambridge_Bay',
'America/Yellowknife',
'America/Inuvik',
'America/Creston',
'America/Dawson_Creek',
'America/Fort_Nelson',
'America/Vancouver',
'America/Whitehorse',
'America/Dawson',
'Indian/Cocos',
'Europe/Zurich',
'Africa/Abidjan',
'Pacific/Rarotonga',
'America/Santiago',
'America/Punta_Arenas',
'Pacific/Easter',
'Asia/Shanghai',
'Asia/Urumqi',
'America/Bogota',
'America/Costa_Rica',
'America/Havana',
'Atlantic/Cape_Verde',
'America/Curacao',
'Indian/Christmas',
'Asia/Nicosia',
'Asia/Famagusta',
'Europe/Prague',
'Europe/Berlin',
'Europe/Copenhagen',
'America/Santo_Domingo',
'Africa/Algiers',
'America/Guayaquil',
'Pacific/Galapagos',
'Europe/Tallinn',
'Africa/Cairo',
'Africa/El_Aaiun',
'Europe/Madrid',
'Africa/Ceuta',
'Atlantic/Canary',
'Europe/Helsinki',
'Pacific/Fiji',
'Atlantic/Stanley',
'Pacific/Chuuk',
'Pacific/Pohnpei',
'Pacific/Kosrae',
'Atlantic/Faroe',
'Europe/Paris',
'Europe/London',
'Asia/Tbilisi',
'America/Cayenne',
'Africa/Accra',
'Europe/Gibraltar',
'America/Godthab',
'America/Danmarkshavn',
'America/Scoresbysund',
'America/Thule',
'Europe/Athens',
'Atlantic/South_Georgia',
'America/Guatemala',
'Pacific/Guam',
'Africa/Bissau',
'America/Guyana',
'Asia/Hong_Kong',
'America/Tegucigalpa',
'America/Port-au-Prince',
'Europe/Budapest',
'Asia/Jakarta',
'Asia/Pontianak',
'Asia/Makassar',
'Asia/Jayapura',
'Europe/Dublin',
'Asia/Jerusalem',
'Asia/Kolkata',
'Indian/Chagos',
'Asia/Baghdad',
'Asia/Tehran',
'Atlantic/Reykjavik',
'Europe/Rome',
'America/Jamaica',
'Asia/Amman',
'Asia/Tokyo',
'Africa/Nairobi',
'Asia/Bishkek',
'Pacific/Tarawa',
'Pacific/Enderbury',
'Pacific/Kiritimati',
'Asia/Pyongyang',
'Asia/Seoul',
'Asia/Almaty',
'Asia/Qyzylorda',
'Asia/Qostanay', // https://bugs.chromium.org/p/chromium/issues/detail?id=928068
'Asia/Aqtobe',
'Asia/Aqtau',
'Asia/Atyrau',
'Asia/Oral',
'Asia/Beirut',
'Asia/Colombo',
'Africa/Monrovia',
'Europe/Vilnius',
'Europe/Luxembourg',
'Europe/Riga',
'Africa/Tripoli',
'Africa/Casablanca',
'Europe/Monaco',
'Europe/Chisinau',
'Pacific/Majuro',
'Pacific/Kwajalein',
'Asia/Yangon',
'Asia/Ulaanbaatar',
'Asia/Hovd',
'Asia/Choibalsan',
'Asia/Macau',
'America/Martinique',
'Europe/Malta',
'Indian/Mauritius',
'Indian/Maldives',
'America/Mexico_City',
'America/Cancun',
'America/Merida',
'America/Monterrey',
'America/Matamoros',
'America/Mazatlan',
'America/Chihuahua',
'America/Ojinaga',
'America/Hermosillo',
'America/Tijuana',
'America/Bahia_Banderas',
'Asia/Kuala_Lumpur',
'Asia/Kuching',
'Africa/Maputo',
'Africa/Windhoek',
'Pacific/Noumea',
'Pacific/Norfolk',
'Africa/Lagos',
'America/Managua',
'Europe/Amsterdam',
'Europe/Oslo',
'Asia/Kathmandu',
'Pacific/Nauru',
'Pacific/Niue',
'Pacific/Auckland',
'Pacific/Chatham',
'America/Panama',
'America/Lima',
'Pacific/Tahiti',
'Pacific/Marquesas',
'Pacific/Gambier',
'Pacific/Port_Moresby',
'Pacific/Bougainville',
'Asia/Manila',
'Asia/Karachi',
'Europe/Warsaw',
'America/Miquelon',
'Pacific/Pitcairn',
'America/Puerto_Rico',
'Asia/Gaza',
'Asia/Hebron',
'Europe/Lisbon',
'Atlantic/Madeira',
'Atlantic/Azores',
'Pacific/Palau',
'America/Asuncion',
'Asia/Qatar',
'Indian/Reunion',
'Europe/Bucharest',
'Europe/Belgrade',
'Europe/Kaliningrad',
'Europe/Moscow',
'Europe/Simferopol',
'Europe/Kirov',
'Europe/Astrakhan',
'Europe/Volgograd',
'Europe/Saratov',
'Europe/Ulyanovsk',
'Europe/Samara',
'Asia/Yekaterinburg',
'Asia/Omsk',
'Asia/Novosibirsk',
'Asia/Barnaul',
'Asia/Tomsk',
'Asia/Novokuznetsk',
'Asia/Krasnoyarsk',
'Asia/Irkutsk',
'Asia/Chita',
'Asia/Yakutsk',
'Asia/Khandyga',
'Asia/Vladivostok',
'Asia/Ust-Nera',
'Asia/Magadan',
'Asia/Sakhalin',
'Asia/Srednekolymsk',
'Asia/Kamchatka',
'Asia/Anadyr',
'Asia/Riyadh',
'Pacific/Guadalcanal',
'Indian/Mahe',
'Africa/Khartoum',
'Europe/Stockholm',
'Asia/Singapore',
'America/Paramaribo',
'Africa/Juba',
'Africa/Sao_Tome',
'America/El_Salvador',
'Asia/Damascus',
'America/Grand_Turk',
'Africa/Ndjamena',
'Indian/Kerguelen',
'Asia/Bangkok',
'Asia/Dushanbe',
'Pacific/Fakaofo',
'Asia/Dili',
'Asia/Ashgabat',
'Africa/Tunis',
'Pacific/Tongatapu',
'Europe/Istanbul',
'America/Port_of_Spain',
'Pacific/Funafuti',
'Asia/Taipei',
'Europe/Kiev',
'Europe/Uzhgorod',
'Europe/Zaporozhye',
'Pacific/Wake',
'America/New_York',
'America/Detroit',
'America/Kentucky/Louisville',
'America/Kentucky/Monticello',
'America/Indiana/Indianapolis',
'America/Indiana/Vincennes',
'America/Indiana/Winamac',
'America/Indiana/Marengo',
'America/Indiana/Petersburg',
'America/Indiana/Vevay',
'America/Chicago',
'America/Indiana/Tell_City',
'America/Indiana/Knox',
'America/Menominee',
'America/North_Dakota/Center',
'America/North_Dakota/New_Salem',
'America/North_Dakota/Beulah',
'America/Denver',
'America/Boise',
'America/Phoenix',
'America/Los_Angeles',
'America/Anchorage',
'America/Juneau',
'America/Sitka',
'America/Metlakatla',
'America/Yakutat',
'America/Nome',
'America/Adak',
'Pacific/Honolulu',
'America/Montevideo',
'Asia/Samarkand',
'Asia/Tashkent',
'America/Caracas',
'Asia/Ho_Chi_Minh',
'Pacific/Efate',
'Pacific/Wallis',
'Pacific/Apia',
'Africa/Johannesburg'

## License
