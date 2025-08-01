export type Subject = { id: string; name: string; };
export type Teacher = { id: string; name: string; };
export type Room = { id: string; number: string; };
export type Group = { 
  id: string; 
  name: string; 
  category_id?: string;
  category_name?: string;
  course?: number;
};

export type GroupCategory = {
  id: string;
  name: string;
  course: number;
};

export type ScheduleCell = {
  subjectId: string;
  teacherId: string;
  teacherId2?: string;
  roomId: string;
  roomId2?: string;
  time?: string;
};

export type Schedule = {
  [day: string]: {
    [lessonNumber: number]: {
      [groupId: string]: ScheduleCell | null;
    }
  }
}; 