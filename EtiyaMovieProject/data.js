module.exports = function(){
    return{
        movies:[
            {
                "id": 1,
                "name": "Guardians of the Galaxy Vol. 2",
                "year": "2017",
                "runtime": "136 min",
                "categories":[
                    {"id":1, "name":"Action"},
                    {"id":2, "name":"Adventure"},
                    {"id":3, "name":"Comedy"}
                ] ,
                "plot": "The Guardians struggle to keep together as a team while dealing with their personal family issues, notably Star-Lord's encounter with his father the ambitious celestial being Ego.",
                "poster": "https://m.media-amazon.com/images/M/MV5BNjM0NTc0NzItM2FlYS00YzEwLWE0YmUtNTA2ZWIzODc2OTgxXkEyXkFqcGdeQXVyNTgwNzIyNzg@._V1_SX300.jpg",
                "imdbRating": "7.6",
            }

        ],
        categories : [
            {"id":1, "name":"Action"},
            {"id":2, "name":"Adventure"},
            {"id":3, "name":"Comedy"},
            {"id":4, "name":"Dram"},
            {"id":5, "name":"Romantic"}

        ],
        users : [
            {"id":1, 
            "name":"Merve",
            "lastname":"Ünver",
            "email":"merve.unver@etiya.com",
            "password":"1234",
            "roles":{
                "id":3, "name":"role-3"
            } 
        }

        ],
        roles:[
            {"id":1, "name":"role-1"},
            {"id":2, "name":"role-2"},
            {"id":3, "name":"role-3"}

        ],
        userRoles:[
            {
              "id": 1,
              "userId": 1,
              "roleId": 3
            }
          ]
    }
}