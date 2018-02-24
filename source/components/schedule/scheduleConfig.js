const schedules = [
  {
    title: 'Friday',
    events: [
      {
        time: '4:00 PM',
        column1: {
          title: 'Company Expo',
          location: 'Siebel (Atrium), ECEB (Atrium)'
        },
        column2: {
          title: 'Check In',
          location: 'DCL (Atrium)'
        }
      },
      {
        time: '6:30 PM',
        column1: {
          title: 'Dinner',
          location: 'Siebel (Basement & 2nd Floor), ECEB (1st & 3rd Floor)'
        },
        column2: {
          title: '',
          location: ''
        }
      },
      {
        time: '8:00 PM',
        column1: {
          title: 'Opening Ceremony',
          location: 'Kenney Gym'
        },
        column2: {
          title: '',
          location: ''
        }
      },
      {
        time: '10:00 PM',
        column1: {
          title: 'Panel (Systems)',
          location: 'ECEB (Room 1002)'
        },
        column2: {
          title: 'Panel (Web & Data)',
          location: 'Siebel (Room 1404)'
        }
      },
      {
        time: '10:30 PM',
        column1: {
          title: 'Project Matching (Systems)',
          location: 'ECEB (Room 1002)'
        },
        column2: {
          title: 'Project Matching (Web & Data)',
          location: 'Siebel (Room 1404)'
        }
      },
      {
        time: '11:00 PM',
        column1: {
          title: 'Hacking Starts',
          location: ''
        },
        column2: {
          title: 'Hardware Check Out',
          location: 'Siebel (Help Desk)'
        }
      }
    ]
  },
  {
    title: 'Saturday',
    events: [
      {
        time: '12:00 AM',
        column1: {
          title: 'Microsoft Workshop',
          location: 'Siebel (Room 1404)'
        },
        column2: {
          title: '',
          location: ''
        }
      },
      {
        time: '1:00 AM',
        column1: {
          title: 'Late-Night Meal',
          location: 'Siebel (Room 1404), ECEB (Room 1002)'
        },
        column2: {
          title: '',
          location: ''
        }
      },
      {
        time: '2:00 AM',
        column1: {
          title: 'Lightning Talks',
          location: 'ECEB (Room 1015)'
        },
        column2: {
          title: '',
          location: ''
        }
      },
      {
        time: '8:00 AM',
        column1: {
          title: 'Breakfast',
          location: 'Siebel (Basement & 2nd Floor), ECEB (1st & 3rd Floor)'
        },
        column2: {
          title: '',
          location: ''
        }
      },
      {
        time: '9:00 AM',
        column1: {
          title: 'Unity Workshop',
          location: 'ECEB (Room 1013)'
        },
        column2: {
          title: '',
          location: ''
        }
      },
      {
        time: '10:00 AM',
        column1: {
          title: 'Google Workshop',
          location: 'Siebel (Room 2405)'
        },
        column2: {
          title: '',
          location: ''
        }
      },
      {
        time: '11:00 AM',
        column1: {
          title: 'Fulcrum Workshop',
          location: 'ECEB (Room 1013)'
        },
        column2: {
          title: '',
          location: ''
        }
      },
      {
        time: '12:00 PM',
        column1: {
          title: 'Therapy Dogs',
          location: 'Siebel (Atrium)'
        },
        column2: {
          title: '',
          location: ''
        }
      },
      {
        time: '12:30 PM',
        column1: {
          title: 'Lunch',
          location: 'Siebel (Basement & 2nd Floor), ECEB (1st & 3rd Floor)'
        },
        column2: {
          title: '',
          location: ''
        }
      },
      {
        time: '1:30 PM',
        column1: {
          title: 'Katy Huff Keynote',
          location: 'ECEB (Room 1002)'
        },
        column2: {
          title: '',
          location: ''
        }
      },
      {
        time: '2:00 PM',
        column1: {
          title: 'Nerf Begins',
          location: 'Kenney Gym'
        },
        column2: {
          title: 'Therapy Dogs',
          location: 'ECEB (Atrium)'
        }
      },
      {
        time: '2:30 PM',
        column1: {
          title: 'Steve Klabnik Keynote',
          location: 'Siebel (Room 1404)'
        },
        column2: {
          title: '',
          location: ''
        }
      },
      {
        time: '3:30 PM',
        column1: {
          title: 'Panel (Women in OSS)',
          location: 'ECEB (Room 1002)'
        },
        column2: {
          title: '',
          location: ''
        }
      },
      {
        time: '4:30 PM',
        column1: {
          title: 'IMO Workshop',
          location: 'Siebel (Room 2405)'
        },
        column2: {
          title: '',
          location: ''
        }
      },
      {
        time: '5:30 PM',
        column1: {
          title: 'Qtum Workshop',
          location: 'ECEB (Room 1013)'
        },
        column2: {
          title: '',
          location: ''
        }
      },
      {
        time: '6:30 PM',
        column1: {
          title: 'Dinner',
          location: 'Siebel (Basement & 2nd Floor), ECEB (1st & 3rd Floor)'
        },
        column2: {
          title: '',
          location: ''
        }
      },
      {
        time: '7:30 PM',
        column1: {
          title: 'Keynote (Vijay Pai)',
          location: 'Siebel (Room 2405)'
        },
        column2: {
          title: '',
          location: ''
        }
      },
      {
        time: '8:00 PM',
        column1: {
          title: 'Rubrik Hangout',
          location: 'Siebel (Room 1304)'
        },
        column2: {
          title: '',
          location: ''
        }
      },
      {
        time: '8:30 PM',
        column1: {
          title: 'Keynote (Travis Oliphant)',
          location: 'ECEB (Room 1002)'
        },
        column2: {
          title: '',
          location: ''
        }
      },
    ]
  },
  {
    title: 'Sunday',
    events: [
      {
        time: '12:00 AM',
        column1: {
          title: 'Midnight Meal',
          location: 'Siebel (Basement & 2nd Floor), ECEB (1st & 3rd Floor)'
        },
        column2: {
          title: '',
          location: ''
        }
      },
      {
        time: '3:30 AM',
        column1: {
          title: 'Mini-Meal',
          location: 'Siebel (Basement & 2nd Floor), ECEB (1st & 3rd Floor)'
        },
        column2: {
          title: '',
          location: ''
        }
      },
      {
        time: '8:00 AM',
        column1: {
          title: 'Breakfast',
          location: 'Siebel (Basement & 2nd Floor), ECEB (1st & 3rd Floor)'
        },
        column2: {
          title: 'Hardware Check In',
          location: 'Siebel (Help Desk)'
        }
      },
      {
        time: '11:00 AM',
        column1: {
          title: 'Hacking Ends',
          location: ''
        },
        column2: {
          title: 'Lunch',
          location: 'Siebel (Basement), ECEB (1st & 3rd Floor)'
        }
      },
      {
        time: '12:00 PM',
        column1: {
          title: 'Project Expo',
          location: 'Siebel (Atrium)'
        },
        column2: {
          title: '',
          location: ''
        }
      },
      {
        time: '3:00 PM',
        column1: {
          title: 'Closing Ceremony',
          location: 'Kenney Gym'
        },
        column2: {
          title: '',
          location: ''
        }
      },
      {
        time: '5:00 PM',
        column1: {
          title: 'Bus Departure',
          location: 'Siebel'
        },
        column2: {
          title: '',
          location: ''
        }
      }
    ]
  }
]

export {schedules}
