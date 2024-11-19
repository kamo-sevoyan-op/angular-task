export type Gender = 'male' | 'female';
import { Tel } from "../../components/input-form/tel-input/tel-input";

export interface User {
  email: string;
  dateOfBirth: Date;
  firstName: string;
  middleName: string;
  lastName: string;
  status: string;
  profileImageUrl: string;
  nationality: string;
  phoneNumber: Tel;
  gender: Gender;
  mainLanguage: string;
  recitations: string;
}
