interface Options {
  id: string;
  value: string;
}

interface PeriodTiming {
  id: string;
  timing: string;
  day: string;
}

interface ReservationInfo {
  staffName: string;
  semester: string;
  departmentWithBatch: string;
  date: string;
  timing: string;
  venue: string;
  purpose: string;
  negotiable: boolean;
  phone: string;
}

interface LabData {
  id: string;
  name: string;
  roomNo: string;
  status: Status;
  reservationInfo?: ReservationInfo;
}

interface LabDetails {
  data: LabData[];
}

interface LabBookingDetails {
  semester: string;
  departmentWithBatch: string;
  timings: PeriodTiming[] | string[];
  venue: string;
  negotiable: boolean;
  purpose: string;
}

enum Status {
  Reserved = 'Reserved',
  Available = 'Available',
  ClassTime = 'ClassTime',
}

export { Options, PeriodTiming, ReservationInfo, LabData, LabDetails, LabBookingDetails, Status };