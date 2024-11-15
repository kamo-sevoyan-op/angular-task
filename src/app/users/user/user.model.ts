export type Gender = 'male' | 'female';

export interface User {
  email: string | null;
  dateOfBirth: string | null;
  firstName: string | null;
  middleName: string | null;
  lastName: string | null;
  isActivated: string | null;
  profileImageUrl: string | null;
  nationality: string | null;
  phoneNumber: string | null;
  gender: string | null;
  mainLanguage: string | null;
  recitations: string | null;
}
