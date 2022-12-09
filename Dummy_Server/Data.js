let class_to_make_dummy_server = {

    groups: {
        1: {
            id: 1,
            name: 'Psyche Movie Club'
        }
    },

    films: {
        1: {
            fid:        1,
            title:      'The Discreet Charm of the Bourgeoisie',
            year:       1972,
            poster:     '/media/posters/discreet_charm.jpg',
            type:       'movie',
            summary:    'A surreal, virtually plotless series of dreams centered around six middle-class people and their consistently interrupted attempts to have a meal together.',
            genre:      'Surreal Comedy',
            director:   'Luis Buñuel',
            rankings:   {
              1:  {
                uid:      1,
                ranking:  3
              },
              2:  {
                uid:      2,
                ranking:  4
              },
              3:  {
                uid:      3,
                ranking:  2
              },
              4:  {
                uid:      4,
                ranking:  2
              }
            }
        }
    },

    users: {
          1:  {
              uid:  1,
              name: 'Tom'
          },
        2:  {
            uid:  2,
            name: 'June'
        },
          3:  {
              uid:  3,
              name: 'Tom'
          },
            4:  {
                uid:  4,
                name: 'Zarifa'
            }
    }

/*
    users: {
        1: {
            uid:        1,
            first_name: 'Tom'
        },
        2: {
            uid:        2,
            first_name: 'June'
        },
        3: {
            uid:        3,
            first_name: 'Wendy'
        },
        4: {
            uid:        4,
            first_name: 'Zarifa'
        },
    }




    users: [
        {
            uid:        1,
            first_name: 'Tom'
        },
        {
            uid:        2,
            first_name: 'June'
        },
        {
            uid:        3,
            first_name: 'Wendy'
        },
        {
            uid:        4,
            first_name: 'Zarifa'
        },
    ]

**************/

}




export default class_to_make_dummy_server
