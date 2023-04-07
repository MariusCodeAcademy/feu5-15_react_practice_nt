## pasidarome NT svetaine

BASE URL = https://robust-safe-crafter.glitch.me/

Sukuriame du puslapius (IndexPage ir AddPage)

### IndexPage

Šis puslapis atsisiųs skelbimus iš API ir juos atvaizduos kortelėse. Filter funkcionalumas nėra privalaomas, tačiau stipresniems studentams - rekomenduojamas (t.y. paspaudus ant mygtuko turi filtruoti NT pagal konkretų miestą).

## AddPage

1. Suvedus informaciją į laukelius, juos turi POSTint į API.
2. validuoti visus ivesties laukus
3. sekmes atveju pranesti su komponentu ir nunaviguoti i IndexPage
4. sekmes atveju duomenis issiusti el pastu.

Duomenų formatas:

{
image: string,
city: string,
price: number,
description: string
}
