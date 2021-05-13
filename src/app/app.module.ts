import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { FormsModule, } from '@angular/forms'
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home/home.component'; /*Requisi��es Ajax*/
import { RouterModule, Routes } from '@angular/router'
import { ModuleWithProviders } from '@angular/compiler/src/core';
import { LoginComponent } from './login/login.component';
import { UsuarioComponent } from './componente/usuario/usuario/usuario.component';
import { HttpInterceptorModule } from './service/header-interceptor';
import { UsuarioAddComponent } from './componente/usuario/usuario-add/usuario-add.component';
import { GuardiaoGuard } from './service/guardiao.guard';
import { NgxMaskModule, IConfig } from 'ngx-mask';
import { NgxPaginationModule } from 'ngx-pagination';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {NgxCurrencyModule} from "ngx-currency";
import { UsuarioReportComponent } from './componente/usuario/usuario-report/usuario-report.component';
import {ChartsModule} from 'ng2-charts';
import { BarChartComponent } from './componente/bar-chart/bar-chart.component';
import { FornecedorComponent } from './componente/fornecedor/fornecedor/fornecedor.component';
import { FornecedorAddComponent } from './componente/Fornecedor/fornecedor-add/fornecedor-add.component';
import { ProdutoComponent } from './componente/produto/produto/produto.component';


export const appRouters: Routes = [

  { path: 'home', component: HomeComponent, canActivate: [GuardiaoGuard] },
  { path: 'login', component: LoginComponent },
  { path: '', component: LoginComponent },
  { path: 'userList', component: UsuarioComponent, canActivate: [GuardiaoGuard] },
  { path: 'fornecedorList', component: FornecedorComponent, canActivate: [GuardiaoGuard] },
  { path: 'produtoList', component: ProdutoComponent, canActivate: [GuardiaoGuard] },
  { path: 'usuarioAdd', component: UsuarioAddComponent, canActivate: [GuardiaoGuard] },
  { path: 'usuarioAdd/:id', component: UsuarioAddComponent, canActivate: [GuardiaoGuard] },
  { path: 'fornecedorAdd', component: FornecedorAddComponent, canActivate: [GuardiaoGuard] },
  { path: 'fornecedorAdd/:id', component: FornecedorAddComponent, canActivate: [GuardiaoGuard] },
  { path: 'userReport', component: UsuarioReportComponent, canActivate: [GuardiaoGuard] },
  { path: 'chart', component: BarChartComponent, canActivate: [GuardiaoGuard] },
];


export const routes: ModuleWithProviders = RouterModule.forRoot(appRouters);

export const optionsMask: Partial<IConfig> | (() => Partial<IConfig>) = {};

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    UsuarioComponent,
    UsuarioAddComponent,
    UsuarioReportComponent,
    BarChartComponent,
    FornecedorComponent,
    FornecedorAddComponent,
    ProdutoComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    routes,
    HttpInterceptorModule,
    NgxMaskModule.forRoot(optionsMask),
    NgxPaginationModule,
    NgbModule,
    NgxCurrencyModule,
    ChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
