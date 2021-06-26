import { Component } from '@angular/core';
import { Issue } from './issue.modal';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  issueDescription: string;
  issueSeverity: string;
  issueStatus: string;
  severityData: string[] = ['Critical', 'Major', 'Minor'];
  statusData: string[] = ['Open', 'In Progress', 'Closed'];
  issues: Issue[] = [
    new Issue('Issue One', 'Minor', 'Open'),
    new Issue('Issue Two', 'Major', 'In Progress'),
    new Issue('Issue Three', 'Critical', 'Closed'),
  ];

  onFormSubmit() {
    this.issues.push(
      new Issue(this.issueDescription, this.issueSeverity, this.issueStatus)
    );
  }
}
