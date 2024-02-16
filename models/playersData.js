let teamLogos = ["https://upload.wikimedia.org/wikipedia/en/thumb/0/01/KK_Crvena_zvezda_logo.svg/800px-KK_Crvena_zvezda_logo.svg.png",
                 'https://upload.wikimedia.org/wikipedia/en/thumb/5/56/Real_Madrid_CF.svg/1200px-Real_Madrid_CF.svg.png',
                 'https://upload.wikimedia.org/wikipedia/en/d/de/KK_Partizan_Logo.PNG',
                 'https://upload.wikimedia.org/wikipedia/en/thumb/4/47/FC_Barcelona_%28crest%29.svg/1200px-FC_Barcelona_%28crest%29.svg.png',
                 'https://upload.wikimedia.org/wikipedia/en/thumb/1/18/Panathinaikos_BC_logo.svg/1200px-Panathinaikos_BC_logo.svg.png',
                 'https://upload.wikimedia.org/wikipedia/en/thumb/d/d5/AS_Monaco_Basket_Logo.png/170px-AS_Monaco_Basket_Logo.png',
                 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Virtus_Bologna_logo.svg/201px-Virtus_Bologna_logo.svg.png',
                 'https://upload.wikimedia.org/wikipedia/en/thumb/7/7f/Olympiacos_BC_logo.svg/1200px-Olympiacos_BC_logo.svg.png',
                 'https://upload.wikimedia.org/wikipedia/en/thumb/0/0b/Fenerbah%C3%A7e_Men%27s_Basketball_logo.svg/1200px-Fenerbah%C3%A7e_Men%27s_Basketball_logo.svg.png',
                 'https://upload.wikimedia.org/wikipedia/en/6/6a/Saski_Baskonia.png']

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
    "position": ["G"],
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
// ----------------------------------------NE PRILAZI GUFANE -----------------------------------------------------------
    class Player {
        constructor(name, team, position, height, age, jerseyNumber, /*image*/) {
            this.name = name;
            this.team = team;
            this.position = position;
            this.height = height;
            this.age = age;
            this.jerseyNumber = jerseyNumber;
            // this.image = image;
        }
    }

    // RMB FCB VIR FEN PAO OLY KKP CZV ASM EA7 ALB ASV ZAL MAC BAY EFE VAL BSK
    let sergioLlul = new Player('Sergio Llull', [teamLogos[1], 'RMB'], ['G'], '191', '36', '23');  playersData.push(sergioLlul)
    let carlosAlocen = new Player('Carlos Alocen', [teamLogos[1], 'RMB'], ['G'], '194', '23', '12');  playersData.push(carlosAlocen)
    let sergioRodriguez = new Player('Sergio Rodriguez', [teamLogos[1], 'RMB', 'EA7'], ['G'], '191', '37', '13');  playersData.push(sergioRodriguez)
    let fabienCauser = new Player('Fabien Causer', [teamLogos[1], 'RMB', 'BSK'], ['G'], '196', '36', '1');  playersData.push(fabienCauser)
    let rudyFernandez = new Player('Rudy Fernandez', [teamLogos[1], 'RMB'], ['G', 'F'], '196', '38', '5');  playersData.push(rudyFernandez)
    let albertoAbalde = new Player('Alberto Abalde', [teamLogos[1], 'RMB', 'VAL'], ['G'], '202', '28', '6');  playersData.push(albertoAbalde)
    let hugoGonzalez = new Player('Hugo Gonzalez', [teamLogos[1], 'RMB'], ['G', 'F'], '198', '18', '9');  playersData.push(hugoGonzalez)
    let marioHezonja = new Player('Mario Hezonja', [teamLogos[1], 'RMB', 'PAO'], ['F'], '203', '28', '11');  playersData.push(marioHezonja)
    let gabrielDeck = new Player('Gabriel Deck', [teamLogos[1], 'RMB'], ['F'], '198', '29', '14');  playersData.push(gabrielDeck)
    let vincentPourier = new Player('Vincent Pourier', [teamLogos[1], 'RMB', 'BSK'], ['C'], '213', '30', '17');  playersData.push(vincentPourier)
    let edyTavares = new Player('Edy Tavares', [teamLogos[1], 'RMB'], ['C'], '221', '31', '22');  playersData.push(edyTavares)
    let guerschonYabusele = new Player('Guerschon Yabusele', [teamLogos[1], 'RMB'], ['F'], '201', '28', '28');  playersData.push(guerschonYabusele)
    let eliNdiaye = new Player('Eli Ndiaye', [teamLogos[1], 'RMB'], ['F', 'C'], '204', '19', '30');  playersData.push(eliNdiaye)
    let dzananMusa = new Player('Dzanan Musa', [teamLogos[1], 'RMB', 'EFE'], ['G', 'F'], '205', '24', '31');  playersData.push(dzananMusa)

    let oscarDaSilva = new Player('Oscar Da Silva', [teamLogos[3], 'FCB', 'ALB'], ['F'], '206', '25', '1');  playersData.push(oscarDaSilva)
    let pauliOriol = new Player('Pauli Oriol', [teamLogos[3], 'FCB'], ['F'], '201', '29', '3');  playersData.push(pauliOriol)
    let janVesely = new Player('Jan Vesely', [teamLogos[3], 'FCB', 'KKP', 'FEN'], ['C'], '213', '33', '6');  playersData.push(janVesely)
    let darioBrizuela = new Player('Dario Brizuela', [teamLogos[3], 'FCB'], ['G'], '188', '29', '8');  playersData.push(darioBrizuela)
    let rickyRubio = new Player('Ricky Rubio', [teamLogos[3], 'FCB'], ['G'], '188', '33', '9');  playersData.push(rickyRubio)
    let nikolaKalinic = new Player('Nikola Kalinic', [teamLogos[3], 'FCB', 'CZV' , 'VAL', 'FEN'], ['F'], '201', '29', '3');  playersData.push(nikolaKalinic)
    let tomasSatoransky = new Player('Tomas Satoransky ', [teamLogos[3], 'FCB'], ['G'], '200', '32', '13');  playersData.push(tomasSatoransky)
    let willyHernangomez = new Player('Willy Hernangomez', [teamLogos[3], 'FCB', 'RMB'], ['C'], '211', '29', '14');  playersData.push(willyHernangomez)
    let nicolasLaprovittola = new Player('Nicolas Laprovittola', [teamLogos[3], 'FCB' , 'RMB', 'BSK'], ['G'], '191', '34', '20');  playersData.push(nicolasLaprovittola)
    let alexAbrines = new Player('Alex Abrines', [teamLogos[3], 'FCB'], [ 'G','F'], '198', '30', '21');  playersData.push(alexAbrines)
    let jabariParker = new Player('Jabari Parker ', [teamLogos[3], 'FCB'], ['F'], '203', '28', '22');  playersData.push(jabariParker)
    let jamesNnaji = new Player('James Nnaji', [teamLogos[3], 'FCB'], ['C'], '211', '19', '23');  playersData.push(jamesNnaji)
    let michaelCaicedo = new Player('Michael Caicedo', [teamLogos[3], 'FCB'], ['G','F'], '198', '20', '24');  playersData.push(michaelCaicedo)
    let rokasJokubaitis = new Player('Rokas Jokubaitis', [teamLogos[3], 'FCB'], ['G'], '193', '23', '31');  playersData.push(rokasJokubaitis)
   
    let panagiotisKalaitzakis = new Player('Panagiotis Kalaitzakis', [teamLogos[4], 'PAO'], ['G', 'F'], '200', '25', '0');  playersData.push(panagiotisKalaitzakis)
    let lucaVildoza = new Player('Luca Vildoza', [teamLogos[4], 'PAO' , 'CZV','BSK'], ['G'], '200', '25', '2');  playersData.push(lucaVildoza)
    let dimitrosMoraitis = new Player('Dimitrostis', [teamLogos[4], 'PAO' ], ['G'], '194', '25', '6');  playersData.push(dimitrosMoraitis)
    let aleksanderBalcerowski = new Player('Aleksander Balcerowski', [teamLogos[4], 'PAO' ], ['C'], '215', '23', '8');  playersData.push(aleksanderBalcerowski)
    let kostasSloukas = new Player('Kostas Sloukas', [teamLogos[4], 'PAO' , 'OLY' , 'FEN' ], ['G'], '190', '34', '10');  playersData.push(kostasSloukas)
    let alexandrosSamodurov = new Player('Alexandros Samodurov', [teamLogos[4], 'PAO' ], ['G'], '210', '18', '20');  playersData.push(alexandrosSamodurov)
    let ioannisPapapetrou = new Player('Ioanis Papapetrou', [teamLogos[4], 'PAO','KKP','OLY' ], ['F','C'], '206', '29', '21');  playersData.push(ioannisPapapetrou)
    let jerianGrant = new Player('Jerian Grant', [teamLogos[4], 'PAO','EA7' ], ['G'], '193', '31', '22');  playersData.push(jerianGrant)
    let kendrickNunn = new Player('Kendrick Nunn', [teamLogos[4], 'PAO' ], ['G'], '191', '28', '25');  playersData.push(kendrickNunn)
    let mathiasLessort = new Player('Mathias Lessort', [teamLogos[4], 'PAO' , 'CZV','ASM','KKP','BAY','MAC' ], ['C'], '206', '28', '26');  playersData.push(mathiasLessort)
    let kostasAntetokounmpo = new Player('Kostas Antetokounmpo', [teamLogos[4], 'PAO' , 'ASV','FEN' ], ['C'], '208', '26', '37');  playersData.push(kostasAntetokounmpo)
    let mariusGrigonis = new Player('Marius Grigonis', [teamLogos[4], 'PAO' ,'ALB','ZAL' ], ['G' , 'F'], '198', '29', '40');  playersData.push(mariusGrigonis)
    let juanchoHernangomez = new Player('Juancho Hernangomez', [teamLogos[4], 'PAO' ], ['F'], '206', '28', '41');  playersData.push(juanchoHernangomez)
    let dinosMitoglou = new Player('Dinos Mitoglou', [teamLogos[4], 'PAO', 'EA7' ], ['F' , 'C'], '210', '27', '44');  playersData.push(dinosMitoglou)
    let lefterisMantzoukas = new Player('Lefteris Mantzoukas', [teamLogos[4], 'PAO' ], ['G'], '207', '20', '72');  playersData.push(lefterisMantzoukas)

    let elieOkobo = new Player('Elie Okobo', [teamLogos[5], 'ASM' , 'ASV' ], ['G'], '191', '26', '2');  playersData.push(elieOkobo)
    let jordanLloyd = new Player('Jordan Lloyd', [teamLogos[5], 'ASM' , 'CZV', 'VAL' ], ['G'], '193', '30', '3');  playersData.push(jordanLloyd)
    let jaronBlossomgame = new Player('Jaron Blossomgame', [teamLogos[5], 'ASM' ], ['F'], '198', '30', '4');  playersData.push(jaronBlossomgame)
    let johnBrown = new Player('John Brown', [teamLogos[5], 'ASM' ], ['F'], '203', '32', '10');  playersData.push(johnBrown)
    let alphaDiallo = new Player('Alpha Diallo', [teamLogos[5], 'ASM' ], ['F'], '201', '26', '11');  playersData.push(alphaDiallo)
    let petrCornelie = new Player('Petr Cornelie', [teamLogos[5], 'ASM' , 'RMB' ], ['F','C'], '211', '28', '12');  playersData.push(petrCornelie)
    let mouhammadouJaiteh = new Player('Mouhammadou Jaiteh', [teamLogos[5], 'ASM' ,  ], ['C'], '211', '29', '14');  playersData.push(mouhammadouJaiteh)
    let kembaWalker = new Player('Kemba Walker', [teamLogos[5], 'ASM' ], ['G'], '183', '33', '15');  playersData.push(kembaWalker)
    let donatasMotiejunas = new Player('Donatas Motiejunas', [teamLogos[5], 'ASM' , 'ZAL' ], ['F', 'C'], '213', '33', '20');  playersData.push(donatasMotiejunas)
    let terryTarpey = new Player('Terry Tarpey', [teamLogos[5], 'ASM' ], ['F'], '196', '29', '22');  playersData.push(terryTarpey)
    let yakubaOuttara = new Player('Yakuba Outtara', [teamLogos[5], 'ASM' ], ['G'], '192', '32', '24');  playersData.push(yakubaOuttara)
    let matthewStrazel = new Player('Matthew Strazel', [teamLogos[5], 'ASM' , 'ASV' ], ['G'], '182', '21', '32');  playersData.push(matthewStrazel)
    let dontaHall = new Player('Donta Hall', [teamLogos[5], 'ASM' ], ['C'], '208', '26', '45');  playersData.push(dontaHall)
    let mikeJames = new Player('Mike James', [teamLogos[5], 'ASM' , 'BSK','PAO','EA7' ], ['G'], '185', '33', '55');  playersData.push(mikeJames)

    let isaiaCordinier = new Player('Isaia Cordninier', [teamLogos[6], 'VIR' ], ['G' , 'F'], '196', '27', '00');  playersData.push(isaiaCordinier)
    let gabrielLundberg = new Player('Gabriel Lundberh', [teamLogos[6], 'VIR' ], ['G'], '193', '29', '1');  playersData.push(gabrielLundberg)
    let marcoBelinelli = new Player('Marco Belinelli', [teamLogos[6], 'VIR' ], ['G' , 'F'], '196', '37', '3');  playersData.push(marcoBelinelli)
    let alessandroPajola = new Player('Alessandro Pajola', [teamLogos[6], 'VIR' ], ['G'], '194', '24', '6');  playersData.push(alessandroPajola)
    let ognjenDobric = new Player('Ognjen Dobric ', [teamLogos[6], 'VIR' , 'CZV' ], ['G' , 'F'], '200', '29', '13');  playersData.push(ognjenDobric)
    let brunoMascolo = new Player('Bruno Mascolo ', [teamLogos[6], 'VIR' ], ['G'], '190', '27', '14');  playersData.push(brunoMascolo)
    let devontaeCacok = new Player('Devontae Cacok', [teamLogos[6], 'VIR' ], ['C'], '203', '27', '15');  playersData.push(devontaeCacok)
    let rihardsLomazs = new Player('Rihards Lomazs', [teamLogos[6], 'VIR' ,'ASV' ], ['G'], '193', '27','19');  playersData.push(rihardsLomazs)
    let tornikeShengelia = new Player('Tornike Shengelia', [teamLogos[6], 'VIR' , 'VAL', 'BSK' ], ['F'], '206', '32', '21');  playersData.push(tornikeShengelia)
    let danielHakcett = new Player('Daniel Hackett', [teamLogos[6], 'VIR' , 'OLY' , 'EA7' ], ['G'], '196', '36', '23');  playersData.push(danielHakcett)
    let leoMenalo = new Player('Leo Menalo', [teamLogos[6], 'VIR' ], ['F'], '208', '22', '24');  playersData.push(leoMenalo)
    let jordanMickey = new Player('Jordan Mickey', [teamLogos[6], 'VIR', 'RMB' ], ['F','C'], '203', '29', '25');  playersData.push(jordanMickey)
    let achillePolonara = new Player('Achille Polonara', [teamLogos[6], 'VIR','BSK','FEN','EFE','ZAL' ], ['G'], '203', '32', '33');  playersData.push(achillePolonara)
    let anteZizic = new Player('Ante Zizic', [teamLogos[6], 'VIR','MAC','EFE' ], ['C'], '210', '27', '41');  playersData.push(anteZizic)
    let bryantDunston = new Player('Bryant Dunston', [teamLogos[6], 'VIR' , 'OLY', 'EFE' ], ['C'], '203', '37', '42');  playersData.push(bryantDunston)
    let awuduAbass = new Player('Awudu Abass', [teamLogos[6], 'VIR', ' EA7' ], ['F'], '198', '31', '55');  playersData.push(awuduAbass)

    let thomasWalkup = new Player('Thomas Walkup', [teamLogos[7], 'OLY' , 'ZAL' ], ['G'], '193', '31', '0');  playersData.push(thomasWalkup)
    let nigelWilliams_Goss = new Player('Nigel Williams-Goss', [teamLogos[7], 'OLY', 'RMB' , 'KKP' ], ['G'], '191', '29', '1');  playersData.push(nigelWilliams_Goss)
    let mosesWright = new Player('Moses Wright', [teamLogos[7], 'OLY' ], ['C'], '206', '25', '2');  playersData.push(mosesWright)
    let isaiahCanaan = new Player('Isaiah Canaan', [teamLogos[7], 'OLY' ], ['G'], '183', '32', '3');  playersData.push(isaiahCanaan)
    let michalisLountzis = new Player('Michalis Lountzis', [teamLogos[7], 'OLY' , 'PAO' ], ['G'], '198', '25', '4');  playersData.push(michalisLountzis)
    let giannoulisLarentzakis = new Player('Giannoulis Larentzakis', [teamLogos[7], 'OLY' ], ['G'], '196', '30', '5');  playersData.push(giannoulisLarentzakis)
    let nazMitrou_Long = new Player('Naz Mitrou-Long', [teamLogos[7], 'OLY','ZAL','EA7' ], ['G'], '193', '30', '8');  playersData.push(nazMitrou_Long)
    let moustaphaFall = new Player('Moustapha Fall', [teamLogos[7], 'OLY' , 'ASV', 'ASM' ], ['C'], '218', '31', '10');  playersData.push(moustaphaFall)
    let kostasPapanikolaou = new Player('Kostas Papanikolaou', [teamLogos[7], 'OLY' , 'FCB' ], ['F'], '204', '33', '16');  playersData.push(kostasPapanikolaou)
    let ignasBrazdeikis = new Player('Ignas Brazdeikis', [teamLogos[7], 'OLY' , 'ZAL' ], ['F'], '201', '25', '17');  playersData.push(ignasBrazdeikis)
    let alecPeters = new Player('Alec Peters', [teamLogos[7], 'OLY' ,'BSK ','EFE' ], ['F'], '206', '28', '25');  playersData.push(alecPeters)
    let filipPetrusev = new Player('Filip Petrusev', [teamLogos[7], 'OLY' , 'EFE', 'ZVE' ], ['G'], '211', '23', '30');  playersData.push(filipPetrusev)
    let nikolaMilutinov = new Player('Nikola Milutinov', [teamLogos[7], 'OLY' ,'KKP' ], ['C'], '213', '29', '33');  playersData.push(nikolaMilutinov)
    let lukeSikma = new Player('Luke Sikma', [teamLogos[7], 'OLY','ALB','VAL' ], ['F'], '203', '34', '43');  playersData.push(lukeSikma)
    let georgiosTanoulis = new Player('Georgios Tanoulis', [teamLogos[7], 'OLY' ], ['C'], '210', '21', '50');  playersData.push(georgiosTanoulis)
    let shaquielleMcKissic = new Player('Shaquille McKissic', [teamLogos[7], 'OLY' ], ['F' , 'C'], '203', '32', '10');  playersData.push(shaquielleMcKissic)

    let jonathanMotley = new Player('Jonathan Motley', [teamLogos[8], 'FEN' ], ['F'], '206', '28', '0');  playersData.push(jonathanMotley)
    let metecanBirsen = new Player('Metecan Birsen', [teamLogos[8], 'FEN' , 'EFE' ], ['F'], '208', '28', '1');  playersData.push(metecanBirsen)
    let sehmusHazer = new Player('Sehmus Hazer', [teamLogos[8], 'FEN' ], ['G'], '191', '25', '2');  playersData.push(sehmusHazer)
    let scottieWilbekin = new Player('Scottie Wilbekin', [teamLogos[8], 'FEN' , 'MAC' ], ['G'], '188', '30', '3');  playersData.push(scottieWilbekin)
    let sertacSanli = new Player('Sertac Sanli', [teamLogos[8], 'FEN' , 'FCB' , 'EFE' ], ['C'], '213', '32', '5');  playersData.push(sertacSanli)
    let georgiosPapagiannis = new Player('Georgios Papagiannis', [teamLogos[8], 'FEN' , 'PAO' ], ['C'], '220', '26', '9');  playersData.push(georgiosPapagiannis)
    let melihMahmutoglu = new Player('Melih Mahmutoglu', [teamLogos[8], 'FEN' ], ['G'], '191', '33', '10');  playersData.push(melihMahmutoglu)
    let nigelHayes = new Player('Nigel Hayes', [teamLogos[8], 'FEN' , 'ZAL ','FCB' ], ['F'], '203', '29', '11');  playersData.push(nigelHayes)
    let tarikBiberovic = new Player('Tarik Biberovic', [teamLogos[8], 'FEN' ], ['F'], '201', '23', '13');  playersData.push(tarikBiberovic)
    let amineNoua = new Player('Amine Noua', [teamLogos[8], 'FEN' , 'ASV' ], ['F'], '202', '27', '17');  playersData.push(amineNoua)
    let dyshawnPierre = new Player('dyshawnPierre', [teamLogos[8], 'FEN' ], ['F'], '198', '30', '21');  playersData.push(dyshawnPierre)
    let yigitHamzaMestoglu = new Player('Yigit Hamza Mestoglu', [teamLogos[8], 'FEN' ], ['F'], '203', '19', '22');  playersData.push(yigitHamzaMestoglu)
    let markoGuduric = new Player('Marko Guduric', [teamLogos[8], 'FEN' , 'CZV' ], ['G','F'], '198', '28', '23');  playersData.push(markoGuduric)
    let tylerDorsey = new Player('Tyler Dorsey', [teamLogos[8], 'FEN' , 'OLY' ], ['G'], '193', '27', '27');  playersData.push(tylerDorsey)
    let nickCalathes = new Player('Nick Calathes', [teamLogos[8], 'FEN' , 'PAO' , 'FCB' ], ['G'], '198', '35', '33');  playersData.push(nickCalathes)
    let YamMadar = new Player('Yam Madar ', [teamLogos[8], 'FEN' , 'KKP' ], ['G'], '190', '23', '41');  playersData.push(YamMadar)
    let nateSestina = new Player('Nate Sestina', [teamLogos[8], 'FEN' ], ['F' , 'C'], '211', '26', '77');  playersData.push(nateSestina)

    let markusHoward = new Player('Markus Howard', [teamLogos[9], 'BSK' ], ['G'], '179', '24', '0');  playersData.push(markusHoward)
    let sanderRaieste = new Player('Sander Riaeste', [teamLogos[9], 'BSK' ], ['F'], '204', '24', '2');  playersData.push(sanderRaieste)
    let chrisChiozza = new Player('Chris Chiozza', [teamLogos[9], 'BSK' ], ['G'], '180', '28', '3');  playersData.push(chrisChiozza)
    let tadasSedekerskis = new Player('Tadas Sedekerskis', [teamLogos[9], 'BSK' ], ['F'], '206', '26', '8');  playersData.push(tadasSedekerskis)
    let vanjaMarinkovic = new Player('Vanja Marinkovic', [teamLogos[9], 'BSK' , 'KKP', 'VAL' ], ['G'], '198', '27', '9');  playersData.push(vanjaMarinkovic)
    let codiMiller_McIntyre = new Player('Codi Miller-McIntyre', [teamLogos[9], 'BSK','KKP' ], ['G'], '191', '29', '10');  playersData.push(codiMiller_McIntyre)
    let daniDiez = new Player('Dani Diez', [teamLogos[9], 'BSK' , 'RMB' ], ['F'], '201', '30', '11');  playersData.push(daniDiez)
    let nikasRogkavopoulos = new Player('Nikas Rogkavopoulos', [teamLogos[9], 'BSK' ], ['F'], '203', '22', '17');  playersData.push(nikasRogkavopoulos)
    let khalifaDiop = new Player('Khalida Diop', [teamLogos[9], 'BSK' ], ['C'], '215', '22', '18');  playersData.push(khalifaDiop)
    let maikKotsar = new Player('Maik Kotsar', [teamLogos[9], 'BSK' ], ['C'], '211', '27', '21');  playersData.push(maikKotsar)
    let mattCostello = new Player('Matt Costello', [teamLogos[9], 'BSK' ], ['F','C'], '208', '30', '24');  playersData.push(mattCostello)
    let jordanTheodore = new Player('Jordan Theodore', [teamLogos[9], 'BSK','EA7' ], ['G'], '183', '35', '25');  playersData.push(jordanTheodore)
    let chimaMoneke = new Player('Chima Moneke', [teamLogos[9], 'BSK', 'ASM' ], ['C'], '198', '28', '95');  playersData.push(chimaMoneke)

    let jaredHarper = new Player('Jared Harper', [teamLogos[9], 'VAL' ], ['G'], '178', '26', '0');  playersData.push(jaredHarper)
    let victorClaver = new Player('Victor Claver', [teamLogos[9], 'VAL','FCB' ], ['F'], '207', '35', '1');  playersData.push(victorClaver)
    let nateReuvers = new Player('Nate Reuvers', [teamLogos[9], 'VAL' ], ['C'], '211', '25', '3');  playersData.push(nateReuvers)
    let jaimePradilla = new Player('Jaime Pradila', [teamLogos[9], 'VAL' ], ['F','C'], '205', '23', '4');  playersData.push(jaimePradilla)
    let justinAnderson = new Player('Justin Anderson', [teamLogos[9], 'VAL' ], ['G','F'], '196', '30', '5');  playersData.push(justinAnderson)
    let xabierLopez_Arostegui = new Player('Xabier Lopez-Arostegui', [teamLogos[9], 'VAL' ], ['F'], '200', '26', '6');  playersData.push(xabierLopez_Arostegui)
    let chrisJones = new Player('Chris Jones', [teamLogos[9], 'VAL','ASV','MAC' ], ['G'], '188', '30', '7');  playersData.push(chrisJones)
    let damienInglis = new Player('Damien Inglis', [teamLogos[9], 'VAL','ASM' ], ['F'], '203', '28', '10');  playersData.push(damienInglis)
    let stefanJovic = new Player('Stefan Jovic', [teamLogos[9], 'VAL','CZV','PAO','BAY' ], ['G'], '198', '33', '16');  playersData.push(stefanJovic)
    let boubacarToure = new Player('Boubacar Toure', [teamLogos[9], 'VAL' ], ['C'], '213', '28', '21');  playersData.push(boubacarToure)
    let kassiusRobertson = new Player('Kassius Robertson', [teamLogos[9], 'VAL' ], ['G'], '191', '29', '30');  playersData.push(kassiusRobertson)
    let brandonDavies = new Player('Brandon Davies', [teamLogos[9], 'VAL','EA7','FCB','ZAL','ASM' ], ['C'], '208', '32', '32');  playersData.push(brandonDavies)
    let semiOjeleye = new Player('Semi Ojeleye', [teamLogos[9], 'VAL','VIR' ], ['F'], '198', '29', '37');  playersData.push(semiOjeleye)
    let kevinPangos = new Player('Kevin Pangos', [teamLogos[9], 'VAL','EA7','FCB','ZAL' ], ['G'], '185', '31', '47');  playersData.push(kevinPangos)

    let antoniusCleveland = new Player('Antonius Cleveland', [teamLogos[9], 'MAC' ], ['G','F'], '196', '30', '1');  playersData.push(antoniusCleveland)
    let jamesWebb = new Player('James Webb', [teamLogos[9], 'MAC','VAL' ], ['F'], '206', '30', '3');  playersData.push(jamesWebb)
    let lorenzoBrown = new Player('Lorenzo Brown', [teamLogos[9], 'MAC','CZV','FEN' ], ['G'], '196', '33', '4');  playersData.push(lorenzoBrown)
    let wadeBaldwin = new Player('Wade Baldwin', [teamLogos[9], 'MAC','OLY','BSK','BAY' ], ['G'], '193', '27', '5');  playersData.push(wadeBaldwin)
    let rafiMenco = new Player('Rafi Menco', [teamLogos[9], 'MAC' ], ['F'], '200', '29', '8');  playersData.push(rafiMenco)
    let romanSorkin = new Player('Roman Sorkin', [teamLogos[9], 'MAC' ], ['F','C'], '208', '27', '9');  playersData.push(romanSorkin)
    let johnDiBartolomeo = new Player('John DiBartolomeo', [teamLogos[9], 'MAC' ], ['G'], '183', '32', '12');  playersData.push(johnDiBartolomeo)
    let jasielRivero = new Player('Jasiel Rivero', [teamLogos[9], 'MAC','VAL' ], ['F','C'], '206', '30', '14');  playersData.push(jasielRivero)
    let jakeCohen = new Player('Jake Cohen', [teamLogos[9], 'MAC' ], ['F','C'], '209', '33', '15');  playersData.push(jakeCohen)
    let joeThomasson = new Player('Joe Thomasson', [teamLogos[9], 'MAC' ], ['G'], '193', '30', '24');  playersData.push(joeThomasson)
    let joshNebo = new Player('Josh Nebo', [teamLogos[9], 'MAC' ], ['C'], '206', '26', '32');  playersData.push(joshNebo)
    let tamirBlatt = new Player('Tamir Blatt', [teamLogos[9], 'MAC','ALB' ], ['G'], '178', '26', '45');  playersData.push(tamirBlatt)
    let bonzieColson = new Player('Bonzie Colson', [teamLogos[9], 'MAC' ], ['F'], '198', '28', '50');  playersData.push(bonzieColson)

    let rodneyMcGruder = new Player('Rodney McGruder', [teamLogos[9], 'EA7' ], ['G'], '193', '28', '1');  playersData.push(rodneyMcGruder)
    let maodoLo = new Player('Maodo Lo', [teamLogos[9], 'EA7','ALB','BAY' ], ['G'], '191', '31', '0');  playersData.push(maodoLo)
    let alexPoythress = new Player('Alex Poythress', [teamLogos[9], 'EA7','MAC' ], ['F','C'], '206', '30', '2');  playersData.push(alexPoythress)
    let giordanoBortolani = new Player('Giordano Bortolani', [teamLogos[9], 'EA7' ], ['G'], '193', '23', '3');  playersData.push(giordanoBortolani)
    let stefanoTonut = new Player('Stefano Tonut', [teamLogos[9], 'EA7' ], ['G'], '194', '30', '7');  playersData.push(stefanoTonut)
    let nicoloMelli = new Player('Nicolo Melli', [teamLogos[9], 'EA7','FEN' ], ['F','C'], '205', '33', '9');  playersData.push(nicoloMelli)
    let billyBaron = new Player('Billy Baron', [teamLogos[9], 'EA7','CZV' ], ['G'], '188', '33', '12');  playersData.push(billyBaron)
    let shabazzNapier = new Player('Shabazz Napier', [teamLogos[9], 'EA7','CZV' ], ['G'], '183', '32', '13');  playersData.push(shabazzNapier)
    let giampaoloRicci = new Player('Giampaollo Ricci', [teamLogos[9], 'EA7','VIR' ], ['F'], '202', '32', '17');  playersData.push(giampaoloRicci)
    let diegoFlaccadori = new Player('Diego Flaccadori', [teamLogos[9], 'EA7','BAY' ], ['G'], '195', '27', '21');  playersData.push(diegoFlaccadori)
    let devonHall = new Player('Devon Hall', [teamLogos[9], 'EA7' ], ['G'], '196', '28', '22');  playersData.push(devonHall)
    let shavonShields = new Player('Shavon Shields', [teamLogos[9], 'EA7','BSK' ], ['F'], '201', '29', '31');  playersData.push(shavonShields)
    let nikolaMirotic = new Player('Nikola Mirotic', [teamLogos[9], 'EA7','FCB','RMB' ], ['F'], '208', '33', '33');  playersData.push(nikolaMirotic)
    let kyleHines = new Player('Kyle Hines', [teamLogos[9], 'EA7','OLY' ], ['F','C'], '198', '37', '42');  playersData.push(kyleHines)
    let johannesVoigtmann = new Player('Johannes Voigtman', [teamLogos[9], 'EA7','BSK' ], ['F','C'], '211', '31', '77');  playersData.push(johannesVoigtmann)
    
    let keenanEvans = new Player('Keenan Evans',[teamlogos[9],'ZAL','MAC'],['G'], '191','27','2'); playersData.push(keenanEvans)
    let lukasLekavicius = new Player('Lukas Lekavicius',[teamlogos[9],'ZAL','PAO'],['G'], '180','29','4'); playersData.push(lukasLekavicius)
    let kevarriusHayes = new Player('Kevarius Hayes',[teamlogos[9],'ZAL','ASV'],['C'], '206','26','8'); playersData.push(kevarriusHayes)
    let dovydasGiedraitis = new Player('Dovydas Giedraitis',[teamlogos[9],'ZAL'],['G'], '193','23','9'); playersData.push(dovydasGiedraitis)
    let rolandsSmits = new Player('Rolands Smits',[teamlogos[9],'ZAL','FCB'],['F','C'], '208','28','10'); playersData.push(rolandsSmits)
    let laurynasBirutis = new Player('Laurynas Birutis',[teamlogos[9],'ZAL'],['C'], '213','26','15'); playersData.push(laurynasBirutis)
    let karolisLukosiunas = new Player('Karolis Lukosiunas',[teamlogos[9],'ZAL'],['G'], '195','26','16'); playersData.push(karolisLukosiunas)
    let edmondSumner = new Player('Edmond Sumner',[teamlogos[9],'ZAL'],['G'], '197','28','26'); playersData.push(edmondSumner)
    let tomasDimsa = new Player('Tomas Dimsa',[teamlogos[9],'ZAL'],['G'], '196','30','33'); playersData.push(tomasDimsa)
    let bradyManek = new Player('Brady Manek',[teamlogos[9],'ZAL'],['F'], '206','25','45'); playersData.push(bradyManek)
    let arnasButkevicius = new Player('Arnas Butkevicius',[teamlogos[9],'ZAL'],['F'], '197','31','51'); playersData.push(arnasButkevicius)
    let edgarasUlanovas = new Player('Edgaras Ulanovas',[teamlogos[9],'ZAL','FEN'],['F'], '199','32','92'); playersData.push(edgarasUlanovas)
    
    let shaneLarkin = new Player('Shane Larkin',[teamlogos[9],'EFE','BSK'],['G'], '183','31','0'); playersData.push(shaneLarkin)
    let rodrigueBeaubois = new Player('Rodrigue Beaubois',[teamlogos[9],'EFE','BSK'],['G'], '188','35','1'); playersData.push(rodrigueBeaubois)
    let elijahBryant = new Player('Elijah Bryant',[teamlogos[9],'EFE','MAC'],['G','F'], '196','28','6'); playersData.push(elijahBryant)
    let ridvanOncel = new Player('Ridvan Oncel',[teamlogos[9],'EFE'],['G'], '191','26','10'); playersData.push(ridvanOncel)
    let ertenGazi = new Player('Erten Gazi',[teamlogos[9],'EFE'],['G'], '191','26','11'); playersData.push(ertenGazi)
    let willClyburn = new Player('Will Clyburn',[teamlogos[9],'EFE'],['F'], '201','33','12'); playersData.push(willClyburn)
    let dariusThompson = new Player('Darius Thompson',[teamlogos[9],'EFE','BSK'],['G'], '193','28','13'); playersData.push(dariusThompson)
    let dogusOzdemiroglu = new Player('Dogus Ozdemiroglu ',[teamlogos[9],'EFE'],['G'], '191','27','18'); playersData.push(dogusOzdemiroglu)
    let yildizliBurakCan = new Player('Yildizli Burak Can',[teamlogos[9],'EFE'],['F'], '203','29','19'); playersData.push(yildizliBurakCan)
    let tiborPleiss = new Player('Tibor Pleiss',[teamlogos[9],'EFE','BSK','VAL','FCB'],['C'], '221','34','21'); playersData.push(tiborPleiss)
    let justusHollatz = new Player('Justus Hollatz',[teamlogos[9],'EFE'],['G'], '191','22','23'); playersData.push(justusHollatz)
    let osmaniErcan = new Player('Osmani Ercan',[teamlogos[9],'EFE'],['F','C'], '206','25','24'); playersData.push(osmaniErcan)
    let danielOturu = new Player('Daniel Oturu',[teamlogos[9],'EFE'],['C'], '208','24','25'); playersData.push(danielOturu)
    let mikeDaum = new Player('Miek Daum',[teamlogos[9],'EFE'],['F'], '206','28','31'); playersData.push(mikeDaum)
    let erkanYilmaz = new Player('Erkan Yilmaz',[teamlogos[9],'EFE'],['F'], '196','26','33'); playersData.push(erkanYilmaz)
    let derekWillis = new Player('Derek Willis',[teamlogos[9],'EFE'],['F'], '206','28','35'); playersData.push(derekWillis)
    let TyriqueJones = new Player('Tyrique Jones',[teamlogos[9],'EFE'],['F','C'], '206','26','88'); playersData.push(TyriqueJones)
    
    let nickWeiler_Babb = new Player('Nick Weiller-Babb',[teamlogos[9],'BAY'],['G'], '196','28','0'); playersData.push(nickWeiler_Babb)
    let sylvianFrancisco = new Player('Sylvian Francisco',[teamlogos[9],'BAY'],['G'], '185','26','1'); playersData.push(sylvianFrancisco)
    let carsenEdwards = new Player('Carsen Edwards',[teamlogos[9],'BAY','FEN'],['G'], '180','25','3'); playersData.push(carsenEdwards)
    let nielsGiffey = new Player('nielsGiffey',[teamlogos[9],'BAY','ALB','ZAL'],['F'], '200','32','7'); playersData.push(nielsGiffey)
    let dinoRadoncic = new Player('Dino Radoncic',[teamlogos[9],'BAY','RMB'],['F'], '203','25','8'); playersData.push(dinoRadoncic)
    let isaacBonga = new Player('Isaac Bonga',[teamlogos[9],'BAY'],['G'], '204','24','9'); playersData.push(isaacBonga)
    let leandroBolmaro = new Player('Leandro Bolmaro',[teamlogos[9],'BAY','FCB'],['G'], '198','23','10'); playersData.push(leandroBolmaro)
    let vladimirLucic = new Player('Vladimir Lucic',[teamlogos[9],'BAY','KKP','VAL'],['F'], '204','34','11'); playersData.push(vladimirLucic)
    let anderasObst = new Player('Andreas Obst',[teamlogos[9],'BAY'],['G'], '191','27','13'); playersData.push(anderasObst)
    let sergeIbaka = new Player('Serge Ibaka',[teamlogos[9],'BAY'],['F','C'], '208','34','14'); playersData.push(sergeIbaka)
    let jan_niklasWimberg = new Player('Jan Niklas Wimberg',[teamlogos[9],'BAY'],['F'], '206','28','17'); playersData.push(jan_niklasWimberg)
    let eliasHarris = new Player('Elias Harris',[teamlogos[9],'BAY'],['F'], '203','34','20'); playersData.push(eliasHarris)
    let dankoBrankovic = new Player('Danko Brankovic',[teamlogos[9],'BAY'],['C'], '216','23','22'); playersData.push(dankoBrankovic)
    let devinBooker = new Player('Devin Booker',[teamlogos[9],'BAY','FEN'],['F','C'], '205','32','31'); playersData.push(devinBooker)
    
    let mikeScott = new Player('Mike Scott',[teamlogos[9],'ASV'],['F'], '201','35','00'); playersData.push(mikeScott)
    let deshaunThomas = new Player('Deshaun Thomas',[teamlogos[9],'ASV','EA7','BAY','PAO','MAC','EFE','FCB'],['F'], '201','32','1'); playersData.push(deshaunThomas)
    let parisLee = new Player('Paris Lee',[teamlogos[9],'ASV','PAO','ASM'],['G'], '183','28','3'); playersData.push(parisLee)
    let charlesKahudi = new Player('Cahrles Kahudi',[teamlogos[9],'ASV'],['F'], '199','37','5'); playersData.push(charlesKahudi)
    let joffreyLauvergne = new Player('Jeffrey Lauvergne',[teamlogos[9],'ASV','VAL','KKP','FEN','ZAL'],['F','C'], '211','32','7'); playersData.push(joffreyLauvergne)
    let timotheLuwawu_Cabarrot = new Player('Timothe Luwawu-Cabarot',[teamlogos[9],'ASV','EA7'],['F'], '201','28','9'); playersData.push(timotheLuwawu_Cabarrot)
    let nandoDe_Colo = new Player('Nando de Colo',[teamlogos[9],'ASV'],['G'], '196','36','12'); playersData.push(nandoDe_Colo)
    let borisDallo = new Player('Boris Dallo',[teamlogos[9],'ASV','KKP'],['G','F'], '196','29','10'); playersData.push(borisDallo)
    let edwinJackson = new Player('Edwin Jackson',[teamlogos[9],'ASV','FCB'],['G'], '191','34','11'); playersData.push(edwinJackson)
    let youssouphaFall = new Player('Yousoupha Fall',[teamlogos[9],'ASV','BSK'],['C'], '221','29','19'); playersData.push(youssouphaFall)
    let davidLighty = new Player('David Lighty ',[teamlogos[9],'ASV'],['G','F'], '198','35','23'); playersData.push(davidLighty)
    let noamYaacov = new Player('Noam Yaacov',[teamlogos[9],'ASV'],['G'], '185','19','31'); playersData.push(noamYaacov)

    let sterlingBrown = new Player('Sterling Brown',[teamlogos[9],'ALB'],['G','F'], '196','29','0'); playersData.push(sterlingBrown)
    let gabrieleProcida = new Player('Gabirele Procida',[teamlogos[9],'ALB'],['G','F'], '198','21','1'); playersData.push(gabrieleProcida)
    let matteoSpagnolo = new Player('Matteo Spagnolo',[teamlogos[9],'ALB','RMB'],['G'], '193','21','3'); playersData.push(matteoSpagnolo)
    let yaniWetzell = new Player('Yani Wetzell',[teamlogos[9],'ALB','BSK'],['F','C'], '208','27','5'); playersData.push(yaniWetzell)
    let timSchneider = new Player('Tim Schneider',[teamlogos[9],'ALB'],['F'], '208','26','10'); playersData.push(timSchneider)
    let mattThomas = new Player('Matt Thomas',[teamlogos[9],'ALB','PAO'],['G'], '191','29','11'); playersData.push(mattThomas)
    let martinHermannsson = new Player('Martin Hermansson',[teamlogos[9],'ALB','VAL'],['G'], '190','29','15'); playersData.push(martinHermannsson)
    let zigaSamar = new Player('Ziga Samar',[teamlogos[9],'ALB'],['G'], '197','23','18'); playersData.push(zigaSamar)
    let louisOlinde = new Player('Louis Olinde',[teamlogos[9],'ALB'],['F'], '205','25','19'); playersData.push(louisOlinde)
    let christKoumadje = new Player('Christ Koumadje',[teamlogos[9],'ALB'],['C'], '224','27','21'); playersData.push(christKoumadje)
    let johannesThiemann = new Player('Johannes Thiemann',[teamlogos[9],'ALB'],['F','C'], '205','30','32'); playersData.push(johannesThiemann)
    let justinBean = new Player('Justin Bean',[teamlogos[9],'ALB'],['F'], '201','27','34'); playersData.push(justinBean)


    let shuffledArray = playersData.slice().sort(() => Math.random() - 0.5)       
module.exports = playersData


