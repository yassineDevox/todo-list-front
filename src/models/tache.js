//creer un type dobjet tache
export class Tache {
    //ajouter des valeurs par defauts au paramettres ES6
    constructor(id=0, title="",isCompleted=false ) {
        //this pour dire objet courant 
        this.id = id
        this.title = title
        this.isCompleted =isCompleted 
    }
}

// //utilisation
// let t1 = new Tache(1,"dsqdqs","dazdazd")

