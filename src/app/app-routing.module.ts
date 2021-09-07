import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { MoviedetsilsComponent } from './moviedetsils/moviedetsils.component';
import { MoviesComponent } from './movies/movies.component';
import { NetworkComponent } from './network/network.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { PeopleComponent } from './people/people.component';
import { RegisterComponent } from './register/register.component';
import { RoutingGuardGuard } from './routing-guard.guard';
import { TvComponent } from './tv/tv.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', canActivate: [RoutingGuardGuard], component: HomeComponent },
  { path: 'about', canActivate: [RoutingGuardGuard], component: AboutComponent },
  { path: 'movies', canActivate: [RoutingGuardGuard], component: MoviesComponent },
  { path: 'network', canActivate: [RoutingGuardGuard], component: NetworkComponent },
  { path: 'tv', canActivate: [RoutingGuardGuard], component: TvComponent },
  { path: 'people', canActivate: [RoutingGuardGuard], component: PeopleComponent },
  { path: 'movieDetails/:mediaType/:movieId', canActivate: [RoutingGuardGuard], component: MoviedetsilsComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: '**', component: NotfoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
