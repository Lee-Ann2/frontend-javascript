namespace Subjects {
    export class React extends Subjects {
      teacher: any;
      getRequirements(): string {
        return 'Here is the list of requirements for React';
      }
  
      getAvailableTeacher(): string {
        if (this.teacher.experienceTeachingReact > 0) {
          return `Available Teacher: ${this.teacher.firstName}`;
        } else {
          return 'No available teacher';
        }
      }
    }
}
  