# Oppgave 8: Deploye applikasjonen til din egen Function app p� Azure.

Ja, mange steg, men ikke vær redd, det går fort.

1. Logg inn i Sonat Azure, og velg "Sonat Playground" subscriptionen.
2. Eventuelt, naviger til resource groupen: ["fagdag-github-actions"](https://portal.azure.com/#@sonatconsulting.onmicrosoft.com/resource/subscriptions/8db703d9-3a2c-49a9-9f7f-48fb8aa55aed/resourceGroups/fagdag-github-actions/overview)
3. Opprett din egen Azure Function app i resource group: "fagdag-github-actions", ved å trykke "+ Create"...
   1. Velg "Azure services only", og finn "Function app" i listen. Trykk på "Create"
   2. P[ "hosting options" velg "Consumption"
   3. Navngi Function appen slik: 'github-fagdag-<ditt-navn>' for å kunne skille de fra hverandre.
   4. Velg "node.js" som runtime stack. Og "20 (LTS)" som version. Velg "Norway east" som "Region", og "Linux" som operativsystem.
   5. Trykk "Create" nederst. Det er basics vi trenger for å sette opp denne demoen.
   6. Når Function appen er ferdig opprettet, trykk "Go to resource"
   7. Inne på Function appen, gå til "Configuration" -> "General settings", og sett "SCM Basic Auth Publishing" til "On", for å kunne publisere med publish profile. Lagre.
4. Gå tilbake til "Overview" på function appen, trykk "Get publish profile" for å laste ned publishprofile.PublishSettings fil
5. På Github repoet ditt, gå til "Settings" -> "Secrets and variables" -> "Actions" -> "New repository secret", med navn "AZURE_FUNCTIONAPP_PUBLISH_PROFILE", og legg innholdet av filen inn som secreten.
6. Skriv inn navnet på din Azure Function app, i env variabelen "AZURE_FUNCTIONAPP_NAME" i workflow.yaml
7. Alle Github actions workflow steg før Deploy steget, må virke (test,lint og sårbarhets sjekk). Eller bare kommenter de ut.
8. Push en ny commit, med Deploy steget i workflow.yaml, og følg med på status på jobben i Github actions. Får den til å deploye? ("Successfully deployed web package to App Service." i Deploy loggen)
9. I azure, trykk "Refresh" i menyen på function appen. Ser du Functionen "SumAvToTall" i listen?
10. Trykk på Functionen "SumAvToTall". Test den ved å: Trykke "Test/Run" og legg til url parameter "a" og "b" der. (Alternativt: "Get function url", og manuelt legg til to tall som parameter a og b)

## Bildeguide (nice!):

Steg 2:

![image](https://github.com/user-attachments/assets/82913ab8-c2f7-4115-a6c1-08af7965322f)

Steg 3.1:

![image](https://github.com/user-attachments/assets/a12bcc84-a05d-4e0c-87b0-355ad6b10f60)

Steg 3.3 - 3.5:

![image](https://github.com/user-attachments/assets/981ba310-7457-40e6-aaa5-59f6f77131de)

Steg 3.7:

![image](https://github.com/user-attachments/assets/3f0c7718-4968-4321-aa12-c22c25f35979)

Steg 4:

![image](https://github.com/user-attachments/assets/6d37d91e-dd7e-402d-a0f9-e060ab69e7a9)

Steg 5:

![image](https://github.com/user-attachments/assets/cfadb46c-4f5e-4411-a5c3-65595fc5e6db)


Steg 9:

![alt text](docs/9.png)

Steg 10:

![alt text](docs/10a.png)

![alt text](docs/10b.png)

![alt text](docs/10c.png)

Alternativt, bruk urlen direkte, med query params:
![alt text](docs/10d.png)
