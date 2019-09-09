'use strict';

module.exports =

  {
    "label":"VZ-01",
    "row":[
      {
        "level":1,
        "locations":[
          {
            "name":"VZ-01-01",
            "stock":[
              {
                "product":"Left door",
                "qty":100,
                "replenishment":"slow"
              }
            ]
          }
        ]
      },
      {
        "level":2,
        "locations":[
          {
            "name":"VZ-01-02",
            "stock":[

            ]
          },
          {
            "name":"VZ-02-02",
            "stock":[
              {
                "product":"Rear brake disk",
                "qty":3,
                "replenishment":"fast"
              }
            ]
          }
        ]
      },
      {
        "level":3,
        "locations":[
          {
            "name":"VZ-01-03",
            "stock":[
              {
                "product":"Front brake disk",
                "qty":2,
                "replenishment":"standard"
              }
            ]
          },
          {
            "name":"VZ-01-04",
            "stock":[
              {
                "product":"Rear shock",
                "qty":10,
                "replenishment":"standard"
              },
              {
                "product":"Front shock",
                "qty":20,
                "replenishment":"standard"
              }
            ]
          }
        ]
      }
    ]
  }

;
