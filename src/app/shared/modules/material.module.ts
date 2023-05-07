import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';

@NgModule({
  imports: [BrowserAnimationsModule, MatToolbarModule],
  exports: [BrowserAnimationsModule, MatToolbarModule],
})
export class MaterialModule {}
