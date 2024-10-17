# Github actions Fagdag - node prosjekt

Dette git repoet inneholder et lite node prosjekt, med en Azure Function app, og et lite Test prosjekt.

I Github, kan du trykke "Fork", for å lage din egen kopi av repoet, til din egen brukerkonto.
Da kan du sette opp og kjøre Github Actions, ved å endre på `.github/workflows/workflow.yaml` filen.

Målet er å teste ut Github actions i praksis, og du skal dermed få løse noen oppgaver.

Du kan redigere og committe filer direkte på Github nettsiden,
eller trykke `.` for å åpne repoet i et VSCode interface i browseren (anbefales).
Eller laste ned koden lokalt, gjøre endringer og pushe tilbake.

Det kan være lurt å lage en ny commit, (og pushe til Github, om du jobber lokalt),
for hver oppgave, for å se om du har gjort det riktig.
Vi kan holde oss til å jobbe i `main` branchen.

//TODO: la repoet ha en basic workflow fil, med kommentarer hvor nye steps skal lages.
//og gi full workflow fil, for function deployment oppgaven (egen branch?) husk å customize function app navn
//TODO formatere alt, utenom sum tittelen, slik at bare den dukker opp i linting/format
Lage Deployment steg for å deploye til Azure (Gi full oppskrift)

## Oppgaver

_Dette prosjektet er et lite "mandags-prosjekt", og det har en unit-test som kanskje ikke virker som den skal, en dependency med en kjent sårbarhet, samt en eller flere lint/formaterings feil.
Dette skal vi forsøke å finne ved hjelp Github actions `steps`, og fikse med nye commits._

1. "Fork" repoet, slik at du har det på din egen Github konto og kan committe og herje på med Github actions.
2. I workflow.yaml filen, sett opp en `job` som gjør følgende:
   1. Kjører ved alle nye commits på `main` branchen
   2. Bruker ubuntu-latest til å kjøre jobben
   3. Og et `step` som Sjekker ut koden i repoet (`actions/checkout@v4`)
3. Legg til en `action` som setter opp node miljøet vi skal bruke til å bygge koden (solutionen). Bruk node versjon `20`.
4. Legg til en action som bruker `npm ci` for å installere dependencies.
5. Legg til en action som kjører unit testene i prosjektet. (`npm test`)
   1. Dersom den klarte å kjøre testene, var det noe som feilet?
   2. Kan du lage en ny commit med kode-endringer som fikser feilen, og se om testene nå blir grønne (får "Passed") i Github actions?
6. Legg til en action som utfører såbarhets sjekk av npm pakker i prosjektet. (`npm audit`)
   1. Sjekk loggen til jobben på Github, var det noen pakker med sårbarheter?
   2. Oppdater sårbarhetene
7. Legg til en action som linter koden med eslint. (HINT: `npm init @eslint/config@latest` for å legge til eslint)
   1. Legg til eslint
   2. Legg til en ny action som bruker eslint til å linte koden
   3. Sjekk loggen til jobben på Github, var det noen Lint feil?
   4. Fiks eventuele feil
8. Siste oppgave (type: Stor oppgave): Å Deploye koden til en Azure Function app! Se egen readme fil: [azure-oppsett.md](azure-oppsett.md)
