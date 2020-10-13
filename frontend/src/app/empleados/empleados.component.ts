import { Component, OnInit } from '@angular/core';
import { EmpleadosService } from './empleados.service';
import { FormControl , FormGroup } from '@angular/forms';
import { empleado } from '../interfaces/empleado'

@Component({
  selector: 'app-empleados',
  templateUrl: './empleados.component.html',
  styleUrls: ['./empleados.component.css']
})
export class EmpleadosComponent implements OnInit {

  nuevoEmpleado = new FormGroup({
    nombre: new FormControl(''),
    apellido: new FormControl(''),
    cargo: new FormControl('')
  });

  listaEmpleados: empleado[];

  constructor(private empleadosService: EmpleadosService) {}

  getListaEmpleados():void{
    this.empleadosService.getlistaEmpleados().subscribe(empleados => this.listaEmpleados = empleados);
  };

  addEmpleado(){
    //this.empleadosService.addEmpleado(this.nuevoEmpleado.value).subscribe(res => console.log(res));    
  
    this.empleadosService.addEmpleado(this.nuevoEmpleado.value)
      .subscribe(res => {this.getListaEmpleados(); console.log(res); this.nuevoEmpleado.reset()});      
  }

  deleteEmpleado(id: String){
    this.empleadosService.deleteEmpleado(id).subscribe(res => {this.getListaEmpleados(); console.log(res);});
  }

  ngOnInit(): void {
    this.getListaEmpleados();    
  }

}
