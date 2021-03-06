import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  count =0;

  nome = "Phillip Marques";

  text = " ";

  pessoas = [
    {
      nome: "Phillip",
      sobrenome: "Marques"
    },
    {
      nome: "Alceu",
      sobrenome: "Celino"
    },
    {
      nome: "Elis",
      sobrenome: "Bexiga"
    },
    {
      nome: "Banguela",
      sobrenome: "Pletin"
    }
  ]

  
  constructor(){

  }
  
  ngOnInit() {
    console.log(this.pessoas);
    let interval = setInterval(() =>{
      this.count++;
      if(this.count === 10){
        clearInterval(interval)
      }
    }, 1000)
  }

  clicou(nome: string): void{
    console.log("Clicou em mim", nome)
  }
  
}
