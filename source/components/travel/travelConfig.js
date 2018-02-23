const travels = [
  {
    title: 'Purdue',
    rides: [
      {
        title: 'Purdue to UIUC:',
        pickup: [
          {
            time: '2/23/2018 at 4:15PM EST',
            location: 'Purdue Univ, Lawson Hall of Computer Science, 305 N University St, West'
          }
        ],
        arrival: [
          {
            time: '5:00PM CST',
            location: 'Siebel Center for Computer Science, 201 N Goodwin Ave, Urbana, IL 61801'
          }
        ]
      },
      {
        title: 'UIUC to Purdue:',
        pickup: [
          {
            time: '2/25/2018 at 5:15PM CST',
            location: 'Siebel Center for Computer Science, 201 N Goodwin Ave, Urbana, IL 61801'
          }
        ],
        arrival: [
          {
            time: '7:45PM EST',
            location: 'Purdue Univ, Lawson Hall of Computer Science, 305 N University St, West'
          }
        ]
      }
    ]
  },
  {
    title: 'Florida / Georgia Tech',
    rides: [
      {
        title: 'Florida/Georgia Tech to UIUC:',
        pickup: [
          {
            time: '2/23/2018 at 2:30AM EST',
            location: 'Florida, UF Commuter Lot, 1950 Gale Lemerand Drive, Gainesville, FL 32603'
          },
          {
            time: '2/23/2018 at 7:30AM EST',
            location: 'Georgia Tech, 266 4th St NW, Atlanta, GA 30332'
          }
        ],
        arrival: [
          {
            time: '5:30PM CST',
            location: 'Siebel Center for Computer Science, 201 N Goodwin Ave, Urbana, IL 61801'
          }
        ]
      },
      {
        title: 'UIUC to Florida/Georgia Tech:',
        pickup: [
          {
            time: '2/25/2018 at 5.15PM CST',
            location: 'Siebel Center for Computer Science, 201 N Goodwin Ave, Urbana, IL 61801'
          }
        ],
        arrival: [
          {
            time: 'Atlanta: 4:00AM EST',
            location: 'Georgia Tech, 266 4th St NW, Atlanta, GA 30332'
          },
          {
            time: 'Gainsville: 9:00AM EST',
            location: 'Florida, UF Commuter Lot, 1950 Gale Lemerand Drive, Gainesville, FL 32603'
          }
        ]
      }
    ]
  },
  {
    title: 'UMichigan / Michigan State',
    rides: [
      {
        title: 'UMichigan / Michigan State to UIUC:',
        pickup: [
          {
            time: '2/23/2018 at 10:30AM EST',
            location: 'UMichigan, Rackham Auditorium, 915 East Washington Street, Ann Arbor, MI 48109'
          },
          {
            time: '2/23/2018 at 12:00PM EST',
            location: 'Michigan State, Spartan Stadium, 570 Red Cedar Rd, East Lansing, MI 48824'
          }
        ],
        arrival: [
          {
            time: '4:15PM CST',
            location: 'Siebel Center for Computer Science, 201 N Goodwin Ave, Urbana, IL 61801'
          }
        ]
      },
      {
        title: 'UIUC to UMichigan / Michigan State:',
        pickup: [
          {
            time: '2/25/2018 at 5:15PM CST',
            location: 'Siebel Center for Computer Science, 201 N Goodwin Ave, Urbana, IL 61801'
          }
        ],
        arrival: [
          {
            time: 'Michigan State: 10:30PM EST',
            location: 'Michigan State, Spartan Stadium, 570 Red Cedar Rd, East Lansing, MI 48824'
          },
          {
            time: 'UMichigan: 11:45PM EST',
            location: 'UMichigan, Rackham Auditorium, 915 East Washington Street, Ann Arbor, MI 48109'
          }
        ]
      }
    ]
  },
  {
    title: 'Wisconsin',
    rides: [
      {
        title: 'Wisconsin to UIUC:',
        pickup: [
          {
            time: '2/23/2018 at 11:45AM CST',
            location: 'University of Wisconsin, 1210 West Dayton St, Madison, WI 53706'
          }
        ],
        arrival: [
          {
            time: '4:10PM CST',
            location: 'Siebel Center for Computer Science, 201 N Goodwin Ave, Urbana, IL 61801'
          }
        ]
      },
      {
        title: 'UIUC to Wisconsin:',
        pickup: [
          {
            time: '2/25/2018 at 5:15PM CST',
            location: 'Siebel Center for Computer Science, 201 N Goodwin Ave, Urbana, IL 61801'
          }
        ],
        arrival: [
          {
            time: '2/25/2018 at 9:00PM CST',
            location: 'University of Wisconsin, 1210 West Dayton St, Madison, WI 53706'
          }
        ]
      }
    ]
  },
  {
    title: 'Northwestern / DePaul',
    rides: [
      {
        title: 'Northwestern / DePaul to UIUC:',
        pickup: [
          {
            time: '2/23/2018 at 1:00PM CST',
            location: 'Northwestern University, 2311 Campus Dr, Evanston, IL 60208'
          },
          {
            time: '02/23/2018 at 2:00PM CST',
            location: 'DePaul University, 243 S Wabash Ave, Chicago, IL 60604'
          }
        ],
        arrival: [
          {
            time: '4:30PM CST',
            location: 'Siebel Center for Computer Science, 201 N Goodwin Ave, Urbana, IL 61801'
          }
        ]
      },
      {
        title: 'UIUC to Northwestern / DePaul:',
        pickup: [
          {
            time: '2/25/2018 at 5:15PM CST',
            location: 'Siebel Center for Computer Science, 201 N Goodwin Ave, Urbana, IL 61801'
          }
        ],
        arrival: [
          {
            time: 'DePaul: 8:00PM CST',
            location: 'DePaul University, 243 S Wabash Ave, Chicago, IL 60604'
          },
          {
            time: 'Northwestern: 9:00PM EST',
            location: 'Northwestern University, 2311 Campus Dr, Evanston, IL 60208'
          }
        ]
      }
    ]
  },
  {
    title: 'UIC / UChicago / IIT',
    rides: [
      {
        title: 'UIC / UChicago / IIT to UIUC:',
        pickup: [
          {
            time: '2/23/2018 at 1:00PM CST',
            location: 'UIC, 851 S. Morgan (m/c 152), Chicago, IL 60607'
          },
          {
            time: '2/23/2018 at 1:45PM CST',
            location: 'UChicago, Joseph Regenstein Library, 1100 E 57th St, Chicago, IL 60637'
          },
          {
            time: '2/23/2018 at 2.15PM CST',
            location: 'IIT, McCormic Student Village, 3241 South Wabash Ave, Chicago, IL 60616'
          }
        ],
        arrival: [
          {
            time: '5:00PM CST',
            location: 'Siebel Center for Computer Science, 201 N Goodwin Ave, Urbana, IL 61801'
          }
        ]
      },
      {
        title: 'UIUC to UIC / UChicago / IIT:',
        pickup: [
          {
            time: '2/25/2018 at 5:15PM CST',
            location: 'Siebel Center for Computer Science, 201 N Goodwin Ave, Urbana, IL 61801'
          }
        ],
        arrival: [
          {
            time: 'IIT: 7:45PM CST',
            location: 'IIT, McCormic Student Village, 3241 South Wabash Ave, Chicago, IL 60616'
          },
          {
            time: 'UChicago: 8:15PM CST',
            location: 'UChicago, Joseph Regenstein Library, 1100 E 57th St, Chicago, IL 60637'
          },
          {
            time: 'UIC: 8:45PM CST',
            location: 'UIC, 851 S. Morgan (m/c 152), Chicago, IL 60607'
          }
        ]
      }
    ]
  }
]
export {travels}
