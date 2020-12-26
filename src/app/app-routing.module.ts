import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { SeriesAddComponent } from './series/series-add.component';
import { SeriesInfoComponent } from './series/series-info.component';
import { SeriesListComponent } from './series/series-list.component';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    component: SeriesListComponent
  },
  {
    path: 'series/info/:id',
    component: SeriesInfoComponent
  },
  {
    path: 'series/add',
    component: SeriesAddComponent
  },
  {
    path: 'series/add/:id',
    component: SeriesAddComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
