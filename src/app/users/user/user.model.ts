export type Gender = 'male' | 'female';

export interface User {
  email: string;
  dateOfBirth: string;
  firstName: string;
  middleName: string;
  lastName: string;
  status: string;
  profileImageUrl: string;
  nationality: string;
  phoneNumber: string;
  gender: string;
  mainLanguage: string;
  recitations: string;
}
