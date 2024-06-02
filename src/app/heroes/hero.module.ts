import { NgModule } from "@angular/core";
import { HeroComponent } from "./components/hero/hero.component";
import { ListComponent } from "./components/list/list.component";



@NgModule(
{
  declarations: [
    HeroComponent,
    ListComponent
  ],

  exports: [HeroesModule]

})
export class HeroesModule
{

}
