export interface Registration {
    id?: string;
    name: string;
    email: string;
    phone: string;
    college: string;
    year_of_study: number;
    team_name: string;
    team_size: number;
    programming_languages: string[];
    experience_level: 'Beginner' | 'Intermediate' | 'Advanced';
    github_url?: string;
    linkedin_url?: string;
    motivation: string;
    created_at?: string;
  }
  
  export interface ApiResponse<T = any> {
    success: boolean;
    message: string;
    data?: T;
    errors?: any[];
  }