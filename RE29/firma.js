export class firma{
    constructor(naziv, radnici){
        this.naziv = naziv;
        this.radnici = radnici;
    }
    vratiZbirPlata(){
        let zbir = 0
        this.radnici.forEach(element => {
            zbir = zbir + element.plata;
        });
        return zbir;
    }
}