export class ClassroomStr {
  Id:		  		    number;
  IdUser:               number;
  Name:   			    string;
  Description:          string;
  MaxStudents:          number;
  Enabled:              number;
  KeyAccess:   		    string;
}

export class ClassMembersStr {
  Id:		  		    number;
  IdUser:               number;
  IdClassroom:   		number;
  Module:               string;
}