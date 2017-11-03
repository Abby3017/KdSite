import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent} from './home/home.component';
import { CompanyComponent} from './company/company.component';
import { ComserviceComponent} from './comservice/comservice.component';
import { WorkComponent} from './work/work.component';

const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'company', component: CompanyComponent },
    { path: 'service', component: ComserviceComponent },
    { path: 'work', component: WorkComponent},
    { path: '**', redirectTo: ''}
];

export const routing: ModuleWithProviders =
RouterModule.forRoot(routes);