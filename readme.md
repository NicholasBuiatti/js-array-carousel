MILESTONE 1
Per prima cosa, creiamo il markup statico come visto in mattinata. Costruiamo il container e inseriamo le immagini.
Solo una sarà visibile grazie a una sua classe, avremo così la struttura base. Condite con un pò di CSS per dare stile (senza esagerare).
Vi consiglio di rispolvere object-fit :occhiolino:

---creo la pagina html con un container per immagini.

---ne seleziono solo una da vedere e nascondo le altre (display:none, opacity, z-index?)

<<<<<<< HEAD
--setto display-block su tutte

--setto display-unset su una cosi da poter controllare l'immagine visibile

=======
>>>>>>> d95c75f7921f30ebfe7f1c68e31b4c4ba4470720
MILESTONE 2
Ora dobbiamo scrivere del codice che al caricamento della pagina sposti la slide attiva da quella corrente alla successiva, non pensate al click.
Ragionate prima sul necessario. Devo recuperare un elemento specifico? Devo recuperare più elementi?
Aiutandovi anche e soprattutto con la console dell'ispettore recuperate tutti gli elementi necessari.
Scrivete poi il codice che all'avvio della pagina in automatico sposti la slide attiva dalla prima alla seconda.

MILESTONE 3
Al click dell'utente sulle frecce, il programma cambierà l’immagine attiva, che quindi verrà visualizzata al posto della precedente.
Se abbiamo lavorato correttamente in milestone 2 dovrebbe bastarci poco. Creiamo un event listener per gestire il click sul pulsante.
All'interno spostiamo il codice scritto in milestone 2 per far si che la slide non venga cambia al caricamento della pagina, ma al nostro click sul pulsante.
Se superate l'ultima slide si spacca tutto e non fa nulla: è un bonus.

MILESTONE 4
Create un ulteriore pulsante che vi permetta di fare il lavoro inverso: la slide attiva invece di andare avanti torna indietro.
Potete partire copiando il codice ma cosa dovete cambiare? In questa milestone vi assicurerete di aver davvero capito la precedente :occhiolino: