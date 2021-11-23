import { Injectable } from "@angular/core";
import { IMenu } from "./menu.interface";
@Injectable(
    {providedIn: 'root',}
)
export class MenuService{
    private listMenu: IMenu[] =[
        {title: "Dashboard", url:'/dashboard', icono:"fas fa-tachometer-alt"},
        {title: "Clientes", url:'/dashboard', icono:"fas fa-user-tie"},
        {title: "Usuarios", url:'/users', icono:"fas fa-users"},
        {title: "Ventas", url:'/dashboard', icono:"fas fa-baby-carriage"},
        {title: "Reportes", url:'/dashboard', icono:"fas fa-chart-bar"},
        {title: "Posts", url:'/posts', icono:"fas fa-file-alt"}
    ];
    
    getListMenu():IMenu[]{      
        return [...this.listMenu];
    }
    getDataPath(path:string):Partial<IMenu>{
        const elementMatched = this.listMenu.find(
            (el) =>path.toLowerCase().indexOf(el.url.toLowerCase())>-1);
        console.log("path-services: "+path.toLowerCase())
        return{
            title: elementMatched?.title,
            icono: elementMatched?.icono
        }
    }
}