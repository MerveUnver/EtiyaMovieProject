module.exports = function(){
    return{
        movies:[
            {
                "id": 1,
                "name": "Intersteller",
                "year": "2017",
                "runtime": "136 min",
                "categories":[
                    {"id":1, "name":"Action"},
                    {"id":2, "name":"Adventure"},
                   
                ] ,
                "plot": "The Guardians struggle to keep together as a team while dealing with their personal family issues, notably Star-Lord's encounter with his father the ambitious celestial being Ego.",
                "poster": "https://i.pinimg.com/originals/18/f0/e4/18f0e445b329c569ee5932e6a8923959.jpg",
                "imdbRating": 7.6,
            },
            {
                "id": 2,
                "name": "Inception",
                "year": "2017",
                "runtime": "136 min",
                "categories":[
                    {"id":1, "name":"Action"},
                    {"id":2, "name":"Adventure"},
                    
                ] ,
                "plot": "The Guardians struggle to keep together as a team while dealing with their personal family issues, notably Star-Lord's encounter with his father the ambitious celestial being Ego.",
                "poster": "https://getwallpapers.com/wallpaper/full/0/6/4/1109774-inception-wallpaper-1920x1080-computer.jpg",
                "imdbRating": 7.6,
            },
            {
                "id": 3,
                "name": "Blonde",
                "year": "2017",
                "runtime": "164 min",
                "categories":[
                    {"id":4, "name":"Dram"},
                    {"id":5, "name":"Romantic"}
                ] ,
                "plot": "A fictionalized chronicle of the inner life of Marilyn Monroe.",
                "poster": "https://images.hdqwalls.com/download/blonde-ana-de-armas-8n-3840x2160.jpg",
                "imdbRating": 5.6,
            },
            {
                "id": 4,
                "name": "Avatar",
                "year": "2017",
                "runtime": "102 min",
                "categories":[
                    {"id":1, "name":"Action"},
                    {"id":2, "name":"Adventure"}
                ] ,
                "plot": "The Guardians struggle to keep together as a team while dealing with their personal family issues, notably Star-Lord's encounter with his father the ambitious celestial being Ego.",
                "poster": "https://www.webtekno.com/images/editor/default/0002/88/bb337955063f1cb6da122d18e15c64ee0eb147d5.jpeg",
                "imdbRating": 7.8,
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