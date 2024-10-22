import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddDespesaComponent } from './components/add-despesa/add-despesa.component';
import { ContentComponent } from './components/content/content.component';

const routes: Routes = [
  { path: '', redirectTo: '/content', pathMatch: 'full' }, // Redireciona para o componente Content por padrão
  { path: 'add-despesa', component: AddDespesaComponent },
  // { path: 'content', component: ContentComponent },
  // outras rotas aqui...
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
