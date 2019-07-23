import { Component, OnInit } from '@angular/core';
import {BookServiceService} from '../../services/book-service.service';

@Component({
  selector: 'app-research',
  templateUrl: './research.component.html',
  styleUrls: ['./research.component.scss']
})
export class ResearchComponent implements OnInit {

  // =================================
  // ========== Attributes ===========
  // =================================

  researchTitle: string;

  // =================================
  // ========= Constructors ==========
  // =================================

  constructor(private service: BookServiceService) { }


  // =================================
  // ======= Getters & Setters =======
  // =================================


  // =================================
  // =========== Methods =============
  // =================================


  ngOnInit() {
  }



}
