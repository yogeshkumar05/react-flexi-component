# react-flexi-component
create react components from json


Given a flexiconfig object, create corresponding UI for each entry

const flexiConfig = {
      items: [
        {
          "name": "person_name",
          "label": "Person's Name",
          "type": "TextField",
          "children": [{
            "name": "person_name_1",
            "label": "First Person's Name",
            "type": "TextField",
            'children': [{
              "name": "person_name_2",
            "label": "Second Person's Name",
            "type": "TextField"
            }]
          }]
        },
        {
          "name": "states",
                "label": "Person's state",
          "type": "DropDown",
                "values": [
                    "Maharashtra",
                    "Kerala",
                    "Tamil Nadu"
          ],
          'children': [{
            "name": "states_1",
          "label": "First Person's state",
          "type": "DropDown",
          "values": [
            "Karnataka",
            "Kerala",
            "Tamil Nadu"
  ]
          }]
        }
       ]
    };