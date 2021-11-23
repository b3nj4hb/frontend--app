import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IMenu } from '../../services/menu.interface';
import { MenuService } from '../../services/menu.service';

@Component({
  selector: 'adra-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.css']
})
export class TitleComponent implements OnInit {
@Input() nameTitle:string= "";
path: Partial<IMenu>;
  constructor(private readonly activateRoute: ActivatedRoute, private readonly menuService:MenuService) {
    const currentPath= '/' + this.activateRoute.snapshot.pathFromRoot[1].routeConfig?.path;
    console.log("urrentPath: "+currentPath);
    this.path = this.menuService.getDataPath(currentPath);
    console.log(this.path);
   }
  
  ngOnInit(): void {
  }

}
