import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Matiere } from '../matieres/matiere.model';
import { Prof } from '../profs/prof.model';
import { AssignmentsService } from '../shared/assignments.service';
import { MatieresService } from '../shared/matieres.service';
import { ProfsService } from '../shared/profs.service';
import { Assignment } from './assignment.model';

@Component({
  selector: 'app-assignments',
  templateUrl: './assignments.component.html',
  styleUrls: ['./assignments.component.css'],
})
export class AssignmentsComponent implements OnInit {
  titre = 'Liste des assignments :';
  //ajoutActive = false;

  assignmentSelectionne?: Assignment;
  assignments: Assignment[] = [];
  matieres:Matiere[]=[]
  profs:Prof[]=[]

  // proprietes de pagination
  page: number = 1;
  limit: number = 10;
  totalDocs?: number;
  totalPages?: number;
  hasPrevPage?: boolean;
  prevPage!: number;
  hasNextPage?: boolean;
  nextPage!: number;
  matiereTransmis?: Matiere;

  constructor(
    private assignmentsService: AssignmentsService,
    private router: Router,
    private route: ActivatedRoute,
  private MatieresService:MatieresService,private ProfsService:ProfsService,private matieresService:MatieresService) {}

  ngOnInit(): void {
    // appelé juste avant l'affichage
    // On utilise le service pour récupérer le tableau
    // des assignments
    this.getAssignments(this.page, this.limit);
    this.getMatieres(this.page,this.limit)
    this.getProfs(this.page, this.limit)
    console.log('APPEL à getAssignments terminé');
  }
  
  getMatieres(page:number, limit:number) {
    this.MatieresService
      .getMatieresPagine(page, limit)
      .subscribe((data) => {
        this.matieres = data.docs; // les assignments
        this.page = data.page;
        this.limit = data.limit;
        this.totalDocs = data.totalDocs;
        this.totalPages = data.totalPages;
        this.hasPrevPage = data.hasPrevPage;
        this.prevPage = data.prevPage;
        this.hasNextPage = data.hasNextPage;
        this.nextPage = data.nextPage;
        console.log('données reçues');
      });
  }
  getAssignments(page:number, limit:number) {
    this.assignmentsService
      .getAssignmentsPagine(page, limit)
      .subscribe((data) => {
        this.assignments = data.docs; // les assignments
        this.page = data.page;
        this.limit = data.limit;
        this.totalDocs = data.totalDocs;
        this.totalPages = data.totalPages;
        this.hasPrevPage = data.hasPrevPage;
        this.prevPage = data.prevPage;
        this.hasNextPage = data.hasNextPage;
        this.nextPage = data.nextPage;
        console.log('données reçues');
      });
  }
  getProfs(page:number, limit:number) {
    this.ProfsService
      .getProfsPagine(page, limit)
      .subscribe((data) => {
        this.profs = data.docs; // les assignments
        this.page = data.page;
        this.limit = data.limit;
        this.totalDocs = data.totalDocs;
        this.totalPages = data.totalPages;
        this.hasPrevPage = data.hasPrevPage;
        this.prevPage = data.prevPage;
        this.hasNextPage = data.hasNextPage;
        this.nextPage = data.nextPage;
        console.log('données reçues');
      });
  }
  getAssignmentColor(a: any) {
    return a.rendu ? 'green' : 'red';
  }

  assignmentClique(assignment: Assignment) {
    this.assignmentSelectionne = assignment;
    console.log('assignment clique = ' + assignment.nom);
  }
 
  /*
  onNouvelAssignment(assignment:Assignment) {
    // assignment envoyé par le composant add-assignment
    //this.assignments.push(assignment);
    this.assignmentsService.addAssigment(assignment)
    .subscribe(message => {
      console.log(message);

      // IMPORTANT DE LE FAIRE ICI car l'ajout peut prendre plusieurs secondes
      // avec web services et BD distante
       // on cache le formulaire et on affiche la liste
       //this.formVisible = false;
    });
  }
*/
  onDeleteAssignment(assignment: Assignment) {
    // on supprime cet assignment
    this.assignmentsService
      .deleteAssignment(assignment)
      .subscribe((message) => {
        console.log(message);
      });
  }

  peuplerBD() {
    //this.assignmentsService.peuplerBD();

    this.assignmentsService.peuplerBDAvecForkJoin().subscribe(() => {
      // replaceUrl = true force le refresh de la page même si elle est
      // actuellement affichée
      this.router.navigate(['/home'], { replaceUrl: true });
    });
  }

  pagePrecedente() {
    this.getAssignments(this.prevPage, this.limit);
  }
  
  pageSuivante() {
      this.getAssignments(this.nextPage, this.limit);
  }
}
