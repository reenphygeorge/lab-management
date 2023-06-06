import { NumberOptions } from './ReactSelect';

interface Data {
  id: string;
  staffName: string;
  date: string;
  timing: string;
  venue: string;
  issue: string;
  status: string;
  systemNo: number[];
}

interface LabList {
  id: string;
  labName: string;
}

interface SystemNos {
  value: string;
  label: string;
}

enum Status {
  Pending = 'Pending',
  Resolved = 'Resolved',
}

interface NewReportData {
  systemNo: NumberOptions[];
  venue: string;
  issue: string;
}

interface ResolveInfo {
  comment: string;
}

export { Data, Status, LabList, NewReportData, ResolveInfo };
