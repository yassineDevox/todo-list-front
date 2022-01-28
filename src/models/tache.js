//creer un type dobjet tache
export class TacheModel {
    //ajouter des valeurs par defauts au paramettres ES6
    constructor(id=0, title="" ,completed=false,userId=1) {
        //this pour dire objet courant 
        this.userId = userId
        this.id = id
        this.title = title
        this.completed =completed 
    }
}

// //utilisation
// let t1 = new Tache(1,"dsqdqs","dazdazd")

