import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ServicesComponent } from './services/services.component';
import { ContactsComponent } from './contacts/contacts.component';
import { RegisterComponent } from './register/register.component';
import { CompareComponent } from './compare/compare.component';

export const routes: Routes = [
    {path: 'login', component:LoginComponent},
     {path: 'header', component:HeaderComponent},
     {path: 'footer', component:FooterComponent},
     {path: 'aboutUs', component:AboutUsComponent},
     {path: 'services', component:ServicesComponent},
     {path: 'contacts', component:ContactsComponent},
     {path: 'register', component:RegisterComponent},
     {path: 'compare', component:CompareComponent},
];

