import {Author} from './author';

export interface Book {

  // =================================
  // ========== Attributes ===========
  // =================================

  id: number;
  title: string;
  isbn: string;
  authors: Author[];
  subject: string;
  resume: string;
  pictureUrl: string;
  parutionDate: number;


  // =================================
  // ========= Constructors ==========
  // =================================




  // =================================
  // ======= Getters & Setters =======
  // =================================


  // =================================
  // =========== Methods =============
  // =================================

}
