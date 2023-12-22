let teamLogos = ["https://upload.wikimedia.org/wikipedia/en/thumb/0/01/KK_Crvena_zvezda_logo.svg/800px-KK_Crvena_zvezda_logo.svg.png",
                 'https://upload.wikimedia.org/wikipedia/en/thumb/5/56/Real_Madrid_CF.svg/1200px-Real_Madrid_CF.svg.png',
                 'https://upload.wikimedia.org/wikipedia/en/d/de/KK_Partizan_Logo.PNG']



let playersData = [
    {
    "name": "Nemanja Nedovic",
    "team": [teamLogos[0], 'CZV', 'VAL', 'EA7', 'PAO'],
    "position": ["G"],
    "height": 192,
    "age": 32,
    "jerseyNumber": 26
    },
    {
    "name": "Facundo Campazzo",
    "team": [teamLogos[1], 'RMB', 'CZV'],
    "position": ["G"],
    "height": 181,
    "age": 32,
    "jerseyNumber": 7
    },
    {
    "name": "Luca Vildoza",
    "team": [teamLogos[0], 'PAO', 'BSK', 'CZV'],
    "position": ["G"],
    "height": 191,
    "age": 28,
    "jerseyNumber": 1
    },
    {
    "name": "Luka Mitrovic",
    "team": [teamLogos[0], 'CZV'],
    "position": ["F", "C"],
    "height": 206,
    "age": 30,
    "jerseyNumber": 9
    },
    {
    "name": "Milos Teodosic",
    "team": [teamLogos[0], 'CZV', 'VIR', 'OLY'],
    "position": ["G"],
    "height": 196,
    "age": 36,
    "jerseyNumber": 4
    },
    {
    "name": "Ognjen Dobric",
    "team": [teamLogos[0], 'VIR', 'CZV'],
    "position": ["F"],
    "height": 200,
    "age": 29,
    "jerseyNumber": 13
    },
    {
    "name": "Branko Lazic",
    "team": [teamLogos[0], 'CZV'],
    "position": ["G"],
    "height": 195,
    "age": 35,
    "jerseyNumber": 10
    },
    {
    "name": "Yago Dos Santos",
    "team": [teamLogos[0], 'CZV'],
    "position": ["G"],
    "height": 175,
    "age": 24,
    "jerseyNumber": 99
    },
    {
    "name": "Adam Hanga",
    "team": [teamLogos[0], 'CZV', 'BSK', 'RMB', 'FCB'],
    "position": ["G","F"],
    "height": 200,
    "age": 34,
    "jerseyNumber": 5
    },
    {
    "name": "Dejan Davidovac",
    "team": [teamLogos[0], 'CZV'],
    "position": ["F"],
    "height": 203,
    "age": 28,
    "jerseyNumber": 7
    },
    {
    "name": "Rokas Giedraitis",
    "team": [teamLogos[0], 'CZV', 'BSK', 'ALB'],
    "position": [ "F"],
    "height": 201,
    "age": 31,
    "jerseyNumber": 31
    },
    {
    "name": "Mike Tobey",
    "team": [teamLogos[0], 'CZV', 'VAL', 'FCB'],
    "position": ["F", "C"],
    "height": 213,
    "age": 28,
    "jerseyNumber": 18
    },
    {
    "name": "Joel Bolomboy",
    "team": [teamLogos[0], 'CZV', 'OLY'],
    "position": ["F", "C"],
    "height": 203,
    "age": 29,
    "jerseyNumber": 21
    },
    {
    "name": "Dalibor Ilic",
    "team": [teamLogos[0], 'CZV'],
    "position": ["F"],
    "height": 202,
    "age": 23,
    "jerseyNumber": 22
    },
    {
    "name": "Marko Simonovic",
    "team": [teamLogos[0], 'CZV'],
    "position": ["C"],
    "height": 213,
    "age": 24,
    "jerseyNumber": 1
    },
    {
    "name": "Stefan Lazarevic",
    "team": [teamLogos[0], 'CZV'],
    "position": ["F"],
    "height": 198,
    "age": 26,
    "jerseyNumber": 27
    },
    {
    "name": "Nikola Topic",
    "team": [teamLogos[0], 'CZV'],
    "position": ["G", "G"],
    "height": 195,
    "age": 18,
    "jerseyNumber": 44
    },
    {
     "name": "Aleksa Avramovic",
     "team": [teamLogos[2], 'KKP'],
     "position": ["G"],
     "height": 192,
     "age": 29,
     "jerseyNumber": 4
     },
     {
     "name": "Savo Drezgic",
     "team": [teamLogos[2], 'KKP'],
     "position": ["G"],
     "height": 192,
     "age": 17,
     "jerseyNumber": 3
     },
     {
     "name": "Ognjen Jaramaz",
     "team": [teamLogos[2], 'KKP', 'BMB'],
     "position": ["G"],
     "height": 193,
     "age": 28,
     "jerseyNumber": 10
     },
     {
     "name": "James Nunnally",
     "team": [teamLogos[2], 'KKP', 'FEN', 'EA7', 'MTA'],
     "position": ["G", "F"],
     "height": 201,
     "age": 33,
     "jerseyNumber": 21
     },
     {
     "name": "Danilo Andjusic",
     "team": [teamLogos[2], 'KKP', 'VIR', 'ASM'],
     "position": ["G", "F"],
     "height": 195,
     "age": 32,
     "jerseyNumber": 33
     },
     {
     "name": "PJ Dozier",
     "team": [teamLogos[2], 'KKP'],
     "position": ["G"],
     "height": 198,
     "age": 27,
     "jerseyNumber": 35
     },
     {
     "name": "Kevin Punter",
     "team": [teamLogos[2], 'KKP', 'CZV', 'OLY', 'EA7', 'VIR'],
     "position": ["G", "F"],
     "height": 193,
     "age": 30,
     "jerseyNumber": 7
     },
     {
     "name": "Zach LeDay",
     "team": [teamLogos[2], 'KKP', 'OLY', 'EA7', 'ŽAL'],
     "position": ["F"],
     "height": 202,
     "age": 29,
     "jerseyNumber": 2
     },
     {
     "name": "Alen Smailagic",
     "team": [teamLogos[2], 'KKP'],
     "position": ["F", "C"],
     "height": 208,
     "age": 23,
     "jerseyNumber": 9
     },
     {
     "name": "Uros Trifunovic",
     "team": [teamLogos[2], 'KKP'],
     "position": ["F"],
     "height": 201,
     "age": 23,
     "jerseyNumber": 32
     },
     {
     "name": "Mateusz Ponitka",
     "team": [teamLogos[2], 'KKP', 'PAN'],
     "position": ["F"],
     "height": 198,
     "age": 30,
     "jerseyNumber": 37
     },
     {
     "name": "Tristan Vukcevic",
     "team": [teamLogos[2], 'KKP'],
     "position": ["F", "C"],
     "height": 213,
     "age": 20,
     "jerseyNumber": 1
     },
     {
     "name": "Balsa Koprivica",
     "team": [teamLogos[2], 'KKP'],
     "position": ["C"],
     "height": 216,
     "age": 23,
     "jerseyNumber": 5
     },
     {
     "name": "Frank Kaminsky",
     "team": [teamLogos[2], 'KKP'],
     "position": ["F", "C"],
     "height": 213,
     "age": 30,
     "jerseyNumber": 44
     },
     {
     "name": "Bruno Caboclo",
     "team": [teamLogos[2], 'KKP'],
     "position": ["F","C"],
     "height": 206,
     "age": 28,
     "jerseyNumber": 50
     },
     
    ]

module.exports = playersData


