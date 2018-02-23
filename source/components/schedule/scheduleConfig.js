const schedules = [
  {
    title: 'Friday',
    events: [
      {
        time: '4:00 PM',
        column1: {
          title: 'Company Expo',
          location: 'Atrium'
        },
        column2: {
          title: 'Check In',
          location: 'DCL'
        }
      },
      {
        time: '6:30 PM',
        column1: {
          title: 'Dinner',
          location: 'Siebel: Basement & 2nd Floor, ECEB: 1st & 3rd Floor'
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
          location: 'Kennedy Gym Annex'
        },
        column2: {
          title: '',
          location: ''
        }
      },
      {
        time: '10:00 PM',
        column1: {
          title: 'Opening Panels',
          location: 'Siebel: 1404, ECEB: 1002'
        },
        column2: {
          title: '',
          location: ''
        }
      },
      {
        time: '11:00 PM',
        column1: {
          title: 'Project Fair',
          location: 'Throughout Siebel and ECEB'
        },
        column2: {
          title: 'Hacking Starts',
          location: ''
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
          location: 'Siebel 1404'
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
          location: 'Siebel: Basement & 2nd Floor, ECEB: 1st & 3rd Floor'
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
          location: 'ECEB: 1015'
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
          location: 'Siebel: Basement & 2nd Floor, ECEB: 1st & 3rd Floor'
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
          location: 'ECEB: 1013'
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
          location: 'Siebel: 2405'
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
          location: 'ECEB: 1013'
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
          location: 'Siebel: Basement & 2nd Floor, ECEB: 1st & 3rd Floor'
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
          location: 'ECEB: 1002'
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
          location: 'Kenny Gym Anex'
        },
        column2: {
          title: '',
          location: ''
        }
      },
      {
        time: '2:30 PM',
        column1: {
          title: 'Steve Klabnik Keynote',
          location: 'Siebel: 1404'
        },
        column2: {
          title: '',
          location: ''
        }
      },
      {
        time: '3:30 PM',
        column1: {
          title: 'Women in Open Source Panel',
          location: 'ECEB: 1002'
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
          location: 'Siebel: 2405'
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
          location: 'ECEB: 1013'
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
          location: 'Siebel: Basement & 2nd Floor, ECEB: 1st & 3rd Floor'
        },
        column2: {
          title: '',
          location: ''
        }
      },
      {
        time: '7:30 PM',
        column1: {
          title: 'Vijay Pai Keynote',
          location: 'Siebel: 1404'
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
          location: 'Siebel: 1304'
        },
        column2: {
          title: '',
          location: ''
        }
      },
      {
        time: '8:30 PM',
        column1: {
          title: 'Travis Oliphant Keynote',
          location: 'ECEB: 1002'
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
          location: 'Siebel: Basement & 2nd Floor, ECEB: 1st & 3rd Floor'
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
          location: 'Siebel: Basement & 2nd Floor, ECEB: 1st & 3rd Floor'
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
          location: 'Siebel: Basement & 2nd Floor, ECEB: 1st & 3rd Floor'
        },
        column2: {
          title: '',
          location: ''
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
          location: 'Siebel: Basement, ECEB: 1st & 3rd Floor'
        }
      },
      {
        time: '3:00 PM',
        column1: {
          title: 'Closing Ceremony',
          location: 'Kenny Gym Annex'
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
