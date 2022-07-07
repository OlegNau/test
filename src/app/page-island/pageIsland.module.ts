import {NgModule} from "@angular/core";
import {TuiIslandModule, TuiMarkerIconModule} from "@taiga-ui/kit";
import {pageIslandComponent} from "./pageIsland.component";

@NgModule({
  imports: [TuiIslandModule, TuiMarkerIconModule ],
  exports: [ pageIslandComponent],
  declarations: [pageIslandComponent],
})

export class pageIslandModule {}
