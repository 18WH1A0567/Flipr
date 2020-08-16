import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import {FormsModule} from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';
import { CompanyComponent } from './company/company.component';
import { AuthGuard } from './auth.guard';


const appRoot: Routes = [
  {path:'', component:HomepageComponent},
  {path:'app-homepage', component:HomepageComponent},
  {path:'app-company',canActivate:[AuthGuard], component:CompanyComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    CompanyComponent,
    
  ],
  imports: [
    BrowserModule,
    HttpClientModule,    
    AppRoutingModule,
    RouterModule.forRoot(appRoot),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
