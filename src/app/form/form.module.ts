import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ReactiveFormsModule } from "@angular/forms";
import { MediaItemFormComponent } from "./media-item-form.component";
import { newItemRouting } from "./form.routing";

@NgModule({
  imports: [CommonModule, ReactiveFormsModule, newItemRouting],
  declarations: [MediaItemFormComponent],
})
export class NewItemModule {}
