# Oppgave 1
- [ ] Vise alle land med full informasjon
    - [ ] Vise common name
    - [ ] Flagg
    - [ ] Generell info(?)
- [ ] Vise alle land med subregion som bruker skriver inn
    - [ ] Brukerinput med tekst
    - [ ] Kun vise land med samme subregion som input
    - [ ] case-uavhengig (altså ikke bry seg om store eller små bokstaver)
    - [ ] kan akseptere sub-strings
- [ ] Vise totalt antall innbyggere
- [ ] Vise land med flest innbyggere
    - [ ] må bruke forløkke
    - [ ] må bruke if
- [ ] Vise land med færrest innbyggere
    - [ ] må bruke forløkke
    - [ ] må bruke if


## Step by step-løsning

### Vise alle land med full info
- [x] Bruker trykker på en knapp
    - [x] Forløkke for å gå gjennom alle landene i arrayet
        - [x] Inne i forløkka, skal vi hente ut informasjon om landet
        - [x]vise det på nettsiden.
            - [x] Husk å clear input

### Vise alle land med subregion som bruker skriver inn
- [x] Bruker skriver inn en subregion
- [x] Bruker trykker på knapp for å vise alle land med samme subregion som input
    - [x] Sjekk om bruker har skrevet inn noe
        - [x] Hvis ikke, si i fra at de må skrive noe. 
    - [x] Forløkke som går gjennom alle landene
        - [x] Hvis landets subregion matcher input og visse krav, skal det vises
            - [x] sammenligningen ignorerer store og små bokstaver
            - [x] sammenligningen trenger ikke å være komplett (substring)
                - [x] yey, da vises den.

### Vise totalt antall innbyggere
- [x] Bruker trykker på knapp
    - [x] Gå gjennom alle landene (forløkke)
        - [x] Summere opp antall innbyggere
            - [x] Vise totalt antall inbyggere i amerika

### Vise land med flest innbyggere
- [ ] Bruker trykker på knapp
    - [ ] Gå gjennom alle land
        - [ ] Sjekk om landet man er "inne i" har flere innbyggere enn forrige land med flest
            - [ ] Hvis ja - bytt ut landet med flest innbyggere
            - [ ] Helt til slutt - vis landet med flest innbyggere

### Vise land med færrest innbyggere
- [ ] Bruker trykker på knapp
    - [ ] Gå gjennom alle land
        - [ ] Sjekk om landet man er "inne i" har færre innbyggere enn forrige land med minst
            - [ ] Hvis ja - bytt ut landet med minst innbyggere
            - [ ] Helt til slutt - vis landet med minst innbyggere