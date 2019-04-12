import { Component, ViewChild } from '@angular/core';
import { AgGridNg2 } from 'ag-grid-angular';

import data from './mock/sample_student.json';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  @ViewChild('agGrid') agGrid: AgGridNg2;

  title = 'UI Mockup';
  note = '*Note that this grid is enabled to sort and filter columns.';

  columnDefs = [
      {headerName: "Student_ID__c", field: "Student_ID__c", sortable: true, filter: true, checkboxSelection: true},
      {headerName: "ActiveInternship__c", field: "ActiveInternship__c", sortable: true, filter: true },
      {headerName: "Advisor__c", field: "Advisor__c", sortable: true, filter: true },
      {headerName: "Bio__c", field: "Bio__c", sortable: true, filter: true },
      {headerName: "Contact_Type_Identifier__c", field: "Contact_Type_Identifier__c", sortable: true, filter: true },
      {headerName: "Ethnicity__c", field: "Ethnicity__c", sortable: true, filter: true },
      {headerName: "External_id__c", field: "External_id__c", sortable: true, filter: true },
      {headerName: "Intern_Coordinator__c", field: "Intern_Coordinator__c", sortable: true, filter: true }, 
      {headerName: "LinkedIn_Profile__c", field: "LinkedIn_Profile__c", sortable: true, filter: true },
      {headerName: "Middle_Name__c", field: "Middle_Name__c", sortable: true, filter: true },
      {headerName: "School_Name__c", field: "School_Name__c", sortable: true, filter: true }, 
      {headerName: "Social_Status__c", field: "Social_Status__c", sortable: true, filter: true },
      {headerName: "Student_Gender__c", field: "Student_Gender__c", sortable: true, filter: true },
      {headerName: "Student_Grade__c", field: "Student_Grade__c", sortable: true, filter: true },
      {headerName: "Student_Status__c", field: "Student_Status__c", sortable: true, filter: true },
      {headerName: "IsUserActive__c", field: "IsUserActive__c", sortable: true, filter: true },
      {headerName: "IsBulkUpload__c", field: "IsBulkUpload__c", sortable: true, filter: true },
      {headerName: "Last_Login__c", field: "Last_Login__c", sortable: true, filter: true },
      {headerName: "Previous_Community_Login__c", field: "Previous_Community_Login__c", sortable: true, filter: true },
      {headerName: "Profile_Pic_URL__c", field: "Profile_Pic_URL__c", sortable: true, filter: true },
      {headerName: "Desired_Professions__c", field: "Desired_Professions__c", sortable: true, filter: true },
      {headerName: "Graduation_Date__c", field: "Graduation_Date__c", sortable: true, filter: true },
      {headerName: "Profile_Pic_Attachment_Id__c", field: "Profile_Pic_Attachment_Id__c", sortable: true, filter: true },
      {headerName: "URL_Photo_Link__c", field: "URL_Photo_Link__c", sortable: true, filter: true },
      {headerName: "Last_Notifications_Retrieved_At__c", field: "Last_Notifications_Retrieved_At__c", sortable: true, filter: true },
  ]

  rowData = data; // sample data from json

  getSelectedRows() {
    const selectedNodes = this.agGrid.api.getSelectedNodes();
    const selectedData = selectedNodes.map(node => node.data);
    const selectedDataStringPresentation = selectedData.map(node => node.make + ' ' + node.model).join(', ');
    alert(`Selected nodes: ${selectedDataStringPresentation}`);
  }
}
