export interface RSVPFormData {
  fullName: string;
  email: string;
  phone: string;
  company: string;
}

export interface RSVPState {
  loading: boolean;
  success: boolean;
  error: string | null;
}