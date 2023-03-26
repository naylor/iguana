import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ExercisesComponent} from "./menu-classroom/classroom/exercises/exercises.component";
import {ExercisesEditComponent} from "./menu-classroom/classroom/exercises/exercises-edit/exercises-edit.component";
import {ExercisesAnswerComponent} from "./menu-classroom/classroom/exercises/exercises-answer/exercises-answer.component";
import {ExercisesAnswerEditComponent} from "./menu-classroom/classroom/exercises/exercises-answer/exercises-answer-edit/exercises-answer-edit.component";
import {ExercisesGroupsComponent} from "./menu-classroom/classroom/exercises/exercises-edit/exercises-groups/exercises-groups.component";
import {ClassroomComponent} from "./menu-classroom/classroom/classroom.component";
import {ClassroomEditComponent} from "./menu-classroom/classroom/classroom-edit/classroom-edit.component";
import {GroupsComponent} from './menu-classroom/classroom/groups/groups.component';
import {GroupsEditComponent} from "./menu-classroom/classroom/groups/groups-edit/groups-edit.component";
import {GroupsMembersComponent} from "./menu-classroom/classroom/groups/groups-members/groups-members.component";
import {UsersClassroomJoinComponent} from "./menu-classroom/classroom/users/users-join/users-join.component";
import {SettingsComponent} from "./menu-management/settings/settings.component";
import {TryCodeComponent} from "./try-code/try-code.component";
import {UsersComponent} from "./users/users.component";
import {UsersEditComponent} from "./users/users-edit/users-edit.component";
import {ClassroomManagerComponent} from "./menu-management/classroom-manager/classroom-manager.component";
import {ClassroomManagerEditComponent} from "./menu-management/classroom-manager/classroom-manager-edit/classroom-manager-edit.component";
import {WelcomeComponent} from "./welcome/welcome.component";
import {HostLoginComponent} from "./host-credentials/host-login/host-login.component";
import {CurrentNodesComponent} from "./menu-management/current-nodes/current-nodes.component";
import {ClusterAvailableComponent} from "./menu-management/cluster-available/cluster-available.component";
import {MonitoringComponent} from "./menu-management/monitoring/monitoring.component";
import {UsersClassroomEditComponent} from "./menu-classroom/classroom/users/users-edit/users-edit.component";
import {UsersClassroomComponent} from "./menu-classroom/classroom/users/users.component";

const routes: Routes = [
  { path: 'welcome',                component: WelcomeComponent,              },
  { path: '',                       component: WelcomeComponent,              },
  { path: '404',                    component: WelcomeComponent,              },
  { path: 'view-code',              component: TryCodeComponent,              },
  { path: 'settings',               component: SettingsComponent,             },
  { path: 'edit-user',              component: UsersEditComponent             },
  { path: 'add-user',               component: UsersEditComponent             },
  { path: 'view-user',              component: UsersComponent,                },
  { path: 'view-classroom',         component: ClassroomComponent             },
  { path: 'edit-classroom',         component: ClassroomEditComponent         },
  { path: 'add-classroom',          component: ClassroomEditComponent         },
  { path: 'add-join-classroom',     component: UsersClassroomJoinComponent,   },
  { path: 'edit-user-classroom',    component: UsersClassroomEditComponent,   },
  { path: 'add-user-classroom',     component: UsersClassroomEditComponent,   },
  { path: 'view-user-classroom',    component: UsersClassroomComponent,       },
  { path: 'edit-group',             component: GroupsEditComponent            },
  { path: 'add-group',              component: GroupsEditComponent            },
  { path: 'add-members',            component: GroupsMembersComponent,        },
  { path: 'view-group',             component: GroupsComponent,               },
  { path: 'view-exercise',          component: ExercisesComponent,            },
  { path: 'edit-exercise',          component: ExercisesEditComponent         },
  { path: 'add-exercise',           component: ExercisesEditComponent         },
  { path: 'add-groupex',            component: ExercisesGroupsComponent,      },
  { path: 'view-answer',            component: ExercisesAnswerComponent,      },
  { path: 'add-answer',             component: ExercisesAnswerEditComponent,  },
  { path: 'edit-answer',            component: ExercisesAnswerEditComponent,  },
  { path: 'host-login',             component: HostLoginComponent,            },
  { path: 'cluster-available',      component: ClusterAvailableComponent,     },
  { path: 'current-nodes',          component: CurrentNodesComponent,         },
  { path: 'monitoring',             component: MonitoringComponent,           },
  { path: 'edit-classroom-manager', component: ClassroomManagerEditComponent, },
  { path: 'add-classroom-manager',  component: ClassroomManagerEditComponent, },
  { path: 'view-classroom-manager', component: ClassroomManagerComponent,     },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
