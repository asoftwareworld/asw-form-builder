import { ModuleWithProviders, NgModule }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AswFormBuilderComponent } from './layout/asw-form-builder/asw-form-builder.component';
import { AboutUsComponent } from './layout/about-us/about-us.component';
import { ContactUsComponent } from './layout/contact-us/contact-us.component';

// Route Configuration
export const routes: Routes = [
  { path: '', component: AswFormBuilderComponent },
  { path: 'home', component: AswFormBuilderComponent },
  { path: 'about-us', component: AboutUsComponent },
  { path: 'contact-us', component: ContactUsComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      useHash: true
    })
  ],
  exports: [RouterModule
  ],
})
export class AppRoutingModule { }
