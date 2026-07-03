import type { ScheduleDay } from '@/types'

/**
 * Race-weekend schedule. Add or reorder days here — the Schedule
 * section renders whatever this array contains, no code changes needed.
 */
export const schedule: ScheduleDay[] = [
  {
    id: 'friday',
    weekday: 'Friday',
    date: 'Nov 20',
    label: 'Opening Night',
    sessions: [
      {
        time: '16:30',
        title: 'Free Practice 1',
        category: 'practice',
        description: 'First running under the lights as teams dial in setup.',
      },
      {
        time: '20:00',
        title: 'Free Practice 2',
        category: 'practice',
        description: 'Long-run pace and tyre evaluation into the night.',
      },
      {
        time: '22:00',
        title: 'Pit Lane Live',
        category: 'show',
        description: 'Fan stage, driver appearances and season DJ set.',
      },
    ],
  },
  {
    id: 'saturday',
    weekday: 'Saturday',
    date: 'Nov 21',
    label: 'Qualifying Day',
    sessions: [
      {
        time: '17:00',
        title: 'Free Practice 3',
        category: 'practice',
        description: 'Final setup window before grid positions are decided.',
      },
      {
        time: '20:00',
        title: 'Qualifying',
        category: 'qualifying',
        description: 'Three-part shootout for pole around the street circuit.',
      },
      {
        time: '21:30',
        title: 'SARGA Support Series',
        category: 'support',
        description: 'The junior championship takes the floodlit stage.',
      },
    ],
  },
  {
    id: 'sunday',
    weekday: 'Sunday',
    date: 'Nov 22',
    label: 'Race Day',
    sessions: [
      {
        time: '18:00',
        title: 'Drivers Parade',
        category: 'show',
        description: 'The full grid greets the grandstands before lights out.',
      },
      {
        time: '20:00',
        title: 'SARGA Grand Prix',
        category: 'race',
        description: '58 laps of the Sarga Street Circuit for the win.',
      },
      {
        time: '22:15',
        title: 'Podium & Afterparty',
        category: 'show',
        description: 'Trophy ceremony followed by the season closing show.',
      },
    ],
  },
]
