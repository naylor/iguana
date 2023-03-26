export class GroupsStr {
    Id:           number;
    IdClassroom:  number;
    Name:         string;
    Description:  string;
    KeyAccess:    string;
}

export class GroupHistoryStr {
    Id:           number;
    IdUser:       number;
    IdGroup:      number;
    ESelection:    number;
    EInsert:       number;
    EReplace:      number;
    EDelete:       number;
}