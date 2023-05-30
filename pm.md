# Titel
Edwin Holgersson Olovsson, 2023-05-30

## Inledning
Målet med detta projekt var att använda kunskaperna vi har lärt oss under årets gång och göra något vi själv vill. Jag valde att göra ett spel med ett login in system. Målet var att ha ett spel med fler än en nivå som man kunde spela.  Sedan skulle ditt highscore sparas i en databas. Jag började bygga en bas sida för att få spelet att funka och sedan efter det la jag till en databas login och försökte få highscoret att sparas. Allt detta gjordes i Node, Phaser 3 , och SQL.

 ## Bakgrund

Jag började med att göra ett spel som gick ut på att skjuta sig själv bort från muspekaren och man skulle ta sig till ett mål. Steg ett var att få in banorna i Phaser 3, detta gjordes med inbyggda funktioner i phaser 3. Efter det la jag till en spelare och gjorde så att man kunde skjuta sig bort från muspekaren med hjälp av den inbyggda fysiken i phaser 3. Efter detta gjorde jag en sida för att kunna logga in och registrera användare. För att välja vilken level man ville köra fick jag göra en dålig lösning genom att ha olika javascript-filer för varje level som startades när man valde en specifik level. Jag hade inte tid för att lägga till funktionen att spara highscore i databasen. Jag tänkte göra detta med en metod som kallar på en funktion i router .js som sedan skickar highscoret till databasen.

## Positiva erfarenheter

Jag har inte lärt mig mycket av detta projekt på grund av att jag stötte på så många problem som jag inte kunde lösa. Detta första jag har lärt mig är att se till att köra på den nyaste versionen av paketen jag installerade och inte vad någon online tutorial säger. Detta hade också hjälpt att hitta en bra tutorial som inte ger massor med konstiga fel. Jag har lärt mig om hur man kan göra massor med saker i phaser 3 som t.ex. hur man lägger in 2d mappar, gör spelar animation (även om min är simpel skulle jag kunna göra en mer komplicerad). Jag har även lärt mig mer om hur man skriver SQL frågor även om jag inte fick sätta dem in i praktiken i programmet.  


## Negativa erfarenheter

Mycket har gått fel under projektets gång både med att phaser 3 inte ville göra som jag ville även när jag hade följt genomgångar till punkt och prick märkte senare att det berodde på versionen av phaser 3. All phaser 3 dokumentation var svår att hitta för att de håller på att göra om sidan vilket gjorde den ej tillgänglig eller svår att hitta. Jag använde många dåliga lösningar när det känns som att det finns bättre lösningar till exempel levlarna jag har olika javascript filer för varje men de är nästan exakt likadana vilket känns som att det borde ha funnits en bättre metod. Min plan var att ha en gui i spelet, däremot gick det inte jag hitta ingen metod som gjorde att jag kunde ha till exempel level väljare i spelet. Detta gjorde att jag gjorde den i html vilket gick bra men ser betydligt sämre ut. Jag hade också en period som jag hade svårt att lägga till banorna i phaser 3 men det började bara plötsligt att funka.
Till sist hade jag ingen tid i slutet att fixa high score systemet både för att läraren var sjuk men även att det tog mycket tid att fixa tidigare utpekade problem.    

## Sammanfattning

Projektet har gått sådär. Jag har inte haft någon tid att snygga till projektet och jag hann inte få alla funktioner jag ville ha. Spelet i sig själv tycker jag blev bra men att implementera alla design saker jag ville gick inte bra alls. Funktionerna i mitt spel funkar som jag vill och blev som jag tänkte mig. Däremot att få phaser 3 att prata med en databas funkade inte, jag hittade ingen metod för att få detta att funka. Jag skulle kunna få både databas och nivåsystem att funka och det hade gjort mitt projekt bra. Men utan detta så blev det bara sådär och inget jag skulle säga att jag är jättenöjd med. Jag hann även inte mobilanpassa sidan på grund av dåligt med tid men även att det är ett spel som inte är tänkt att användas på mobil. 
