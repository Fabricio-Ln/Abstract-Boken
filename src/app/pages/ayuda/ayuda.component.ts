import { Component, OnInit } from "@angular/core";
import { NgForm } from "@angular/forms";
import "./../../../assets/smtp.js"; 
declare let Email: any;

@Component({
  selector: 'app-ayuda',
  templateUrl: './ayuda.component.html',
  styleUrls: ['./ayuda.component.css']
})
export class AyudaComponent implements OnInit {
  constructor( ) { }
  
  ngOnInit() {
  }
  
  onSubmit(f: NgForm) {
  
  Email.send({
  Host : "smtp.elasticemail.com",
  Username : "Fabricio",
  Password : "7AFB1835C5A71927E9C87F05FE398C143AE3",
  To : "fabriciolc.ti@gmail.com",
  From : "bokenabstract@gmail.com",
  Subject : "User"
   } );
}
  
}
