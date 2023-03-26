import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';

//DECLARATIONS
import { MonitoringComponent } from './menu-management/monitoring/monitoring.component';
import { AppComponent } from './app.component';
import { CodeComponent } from "./code/code.component";
import { ClusterAvailableComponent } from './menu-management/cluster-available/cluster-available.component';
import { CurrentNodesComponent } from './menu-management/current-nodes/current-nodes.component';
import { ClusterInfoComponent } from './cluster-info/cluster-info.component';
import { DialogComponent } from './_services/dialog/dialog.component';
import { ExercisesComponent } from './menu-classroom/classroom/exercises/exercises.component';
import { ExercisesAnswerComponent } from './menu-classroom/classroom/exercises/exercises-answer/exercises-answer.component';
import { ExercisesAnswerEditComponent } from "./menu-classroom/classroom/exercises/exercises-answer/exercises-answer-edit/exercises-answer-edit.component";
import { ExercisesEditComponent } from './menu-classroom/classroom/exercises/exercises-edit/exercises-edit.component';
import { ExercisesFilesComponent } from "./menu-classroom/classroom/exercises/exercises-edit/exercises-files/exercises-files.component";
import { ExercisesGroupsComponent } from './menu-classroom/classroom/exercises/exercises-edit/exercises-groups/exercises-groups.component';
import { ExcelService } from "./_services/file.service";
import { ClassroomComponent } from "./menu-classroom/classroom/classroom.component";
import { ClassroomEditComponent } from "./menu-classroom/classroom/classroom-edit/classroom-edit.component";
import { GroupsComponent } from './menu-classroom/classroom/groups/groups.component';
import { GroupsEditComponent } from "./menu-classroom/classroom/groups/groups-edit/groups-edit.component";
import { GroupsMembersComponent } from "./menu-classroom/classroom/groups/groups-members/groups-members.component";
import { UsersClassroomJoinComponent } from "./menu-classroom/classroom/users/users-join/users-join.component";
import { HostCredentialsComponent } from './host-credentials/host-credentials.component';
import { HostLoginComponent } from './host-credentials/host-login/host-login.component';
import { HostStatusComponent } from './host-status/host-status.component';
import { ClassroomManagerComponent } from "./menu-management/classroom-manager/classroom-manager.component";
import { ClassroomManagerEditComponent } from "./menu-management/classroom-manager/classroom-manager-edit/classroom-manager-edit.component";
import { MatProgressBarComponent } from './_services/mat-progress-bar/mat-progress-bar.component';
import { MenuClassroomComponent } from './menu-classroom/menu-classroom.component';
import { MenuManagementComponent } from "./menu-management/menu-management.component";
import { SettingsComponent } from "./menu-management/settings/settings.component";
import { UsersClassroomComponent } from "./menu-classroom/classroom/users/users.component";
import { UsersClassroomEditComponent } from "./menu-classroom/classroom/users/users-edit/users-edit.component";
import { UsersComponent } from './users/users.component';
import { UsersEditComponent } from './users/users-edit/users-edit.component';
import { TryCodeComponent } from "./try-code/try-code.component";
import { WelcomeComponent } from "./welcome/welcome.component";

//IMPORTS
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientJsonpModule, HttpClientModule } from '@angular/common/http';
import { MatAutocompleteModule } from "@angular/material/autocomplete";
import { MatChipsModule } from "@angular/material/chips";
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatInputModule } from "@angular/material/input";
import { MatPaginatorModule } from "@angular/material/paginator";
import { MatProgressBarModule } from "@angular/material/progress-bar";
import { MatTableModule } from "@angular/material/table";
import { MatTabsModule } from "@angular/material/tabs";
import { MatSortModule } from "@angular/material/sort";
import { MatSelectModule } from "@angular/material/select";
import { MatListModule } from "@angular/material/list";
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatSnackBarModule} from '@angular/material/snack-bar';
import { FlexLayoutModule } from "@angular/flex-layout";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatExpansionModule } from '@angular/material/expansion';
import { MonacoEditorModule } from 'ngx-monaco-editor';
import { NgIdleKeepaliveModule } from '@ng-idle/keepalive';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

//PROVIDES
import { HttpErrorInterceptor } from './_helpers/HttpErrorInterceptor';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { EventEmitterService } from './_services/event-emitter.service';

//EXPORTS
import {CommonModule} from "@angular/common";
import {enableProdMode} from '@angular/core';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { LayoutModule } from '@angular/cdk/layout';

enableProdMode();

@NgModule({
  declarations: [
    AppComponent,
    ClusterAvailableComponent,
    ClusterInfoComponent,
    CurrentNodesComponent,
    DialogComponent,
    ExercisesComponent,
    ExercisesEditComponent,
    ExercisesFilesComponent,
    ExercisesAnswerComponent,
    ExercisesAnswerEditComponent,
    ExercisesGroupsComponent,
    CodeComponent,
    ClassroomComponent,
    ClassroomEditComponent,
    GroupsComponent,
    GroupsEditComponent,
    GroupsMembersComponent,
    HostCredentialsComponent,
    HostLoginComponent,
    HostStatusComponent,
    MatProgressBarComponent,
    MenuClassroomComponent,
    MenuManagementComponent,
    ClassroomManagerComponent,
    ClassroomManagerEditComponent,
    MonitoringComponent,
    SettingsComponent,
    UsersComponent,
    UsersEditComponent,
    UsersClassroomComponent,
    UsersClassroomJoinComponent,
    UsersClassroomEditComponent,
    TryCodeComponent,
    WelcomeComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserAnimationsModule,
    BrowserModule,
    CommonModule,
    CKEditorModule,
    FormsModule,
    HttpClientModule,
    HttpClientJsonpModule,
    MonacoEditorModule.forRoot(),
    MatAutocompleteModule,
    MatChipsModule,
    MatDialogModule,
    MatDividerModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatExpansionModule,
    MatInputModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatSortModule,
    MatSnackBarModule,
    MatTableModule,
    MatTabsModule,
    MatSelectModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    FlexLayoutModule,
    NgIdleKeepaliveModule.forRoot(),
    NgbModule,
    ReactiveFormsModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    MatIconModule,
    LayoutModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpErrorInterceptor,
      multi: true,
    }, EventEmitterService,
    ExcelService,
  ],
  bootstrap: [
    AppComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  entryComponents: [
    DialogComponent,
  ],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class AppModule { }
