import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DefaultComponent } from './default.component';
import { DashboardComponent } from 'src/app/modules/dashboard/dashboard.component';
import { Card1Component } from 'src/app/modules/card1/card1.component';
import { PostsComponent } from 'src/app/modules/posts/posts.component';
import { SharedModule } from 'src/app/shared/shared.module';
import{MatSidenavModule}from '@angular/material/sidenav';
import{MatCardModule}from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import{FlexLayoutModule}from '@angular/flex-layout'
import { DashboardService } from 'src/app/modules/dashboard.service';
import{MatPaginatorModule}from '@angular/material/paginator';
import{MatTableModule}from '@angular/material/table';
import{MatIconModule}from '@angular/material/icon';

@NgModule({
  declarations: [
    DefaultComponent,
    DashboardComponent,
    PostsComponent,
    Card1Component
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
    
    MatSidenavModule,
    MatDividerModule,
    FlexLayoutModule,
    MatCardModule,
    MatPaginatorModule,
    MatTableModule,
    MatIconModule,
    MatButtonModule
  ],
  providers:[
    DashboardService
  ]
})
export class DefaultModule { }
