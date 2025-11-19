export interface BaseStudent {
  name: string;
  email: string;
  phone: string;
  dob: string;
  gender: string;
  nationality: string;
  religion: string;
  address: string;
  parentName: string;
  parentEmail: string;
  parentPhone: string;
  parentOccupation: string;
  parentRelationship: string;
  parentAddress: string;
}

export interface Student extends BaseStudent {
  _id: string;
  __v: number;
}
