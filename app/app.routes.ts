import { Routes } from '@angular/router';
import { SourceComponent } from './source/source.component';
import { TargetComponent } from './target/target.component';

import { LoginformComponent } from './loginform/loginform.component';
import { LoggedinComponent } from './loginform/loggedin/loggedin.component';
import { BuypackComponent } from './buypack/buypack.component';
import { Buypack2Component } from './buypack2/buypack2.component';
import { PaymentdoneComponent } from './buypack2/paymentdone/paymentdone.component';
import { ContactusComponent } from './contactus/contactus.component';
import { MyAdvtComponent } from './loginform/loggedin/my-advt/my-advt.component';

export const routes: Routes = [
   
    { path: '', component: SourceComponent },
    { path: 'target', component: TargetComponent },
    {path: 'loggedin', component:LoggedinComponent},
    {path: 'login', component:LoginformComponent},
    {path: 'buypack', component:BuypackComponent},
    {path: 'mypack', component:Buypack2Component},
    {path: 'paymentdone', component: PaymentdoneComponent},
    {path: 'contact-us', component: ContactusComponent},
    {path: 'myadvertisements', component:MyAdvtComponent}
    
];
