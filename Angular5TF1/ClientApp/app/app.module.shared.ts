import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './components/app/app.component';
import { NavMenuComponent } from './components/navmenu/navmenu.component';
import { HomeComponent } from './components/home/home.component';
import { FetchDataComponent } from './components/fetchdata/fetchdata.component';
import { CounterComponent } from './components/counter/counter.component';
import { NgxQRCodeModule } from 'ngx-qrcode2';
import { ContextMenuModule } from 'ngx-contextmenu';
import { TreeviewModule } from 'ngx-treeview';
import { NgxTreeViewComponent } from './components/fetchdata/ngxTreeView.component';
import { TreeModule } from 'angular-tree-component';


@NgModule({
    declarations: [
        AppComponent,
        NavMenuComponent,
        CounterComponent,
        FetchDataComponent,
        HomeComponent,
        NgxTreeViewComponent
    ],
    imports: [
        CommonModule,
        HttpModule,
        FormsModule,
        NgxQRCodeModule,
        ContextMenuModule.forRoot(),
        TreeviewModule.forRoot(),
        TreeModule,
        RouterModule.forRoot([
            { path: '', redirectTo: 'home', pathMatch: 'full' },
            { path: 'home', component: HomeComponent },
            { path: 'counter', component: CounterComponent },
            { path: 'fetch-data', component: FetchDataComponent },
            { path: 'treeView', component: NgxTreeViewComponent },
            { path: '**', redirectTo: 'home' }
        ])
    ]
})
export class AppModuleShared {
}
