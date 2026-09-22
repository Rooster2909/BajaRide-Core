export type UserRole = 'CLIENTE' | 'SOCIO' | 'MASTER_ADMIN';

export type ExperienceCategory =
  | 'UTV / Side-by-Side'
  | 'ATV / Cuatrimoto'
  | 'Trophy Truck Demo'
  | 'Baja Buggy'
  | 'Enduro Moto';

export type DifficultyLevel = 'Principiante' | 'Intermedio' | 'Avanzado' | 'Experto' | 'Baja Expert';

export interface Coordinates {
  lat: number;
  lng: number;
  label: string;
  reference: string;
  vhfChannel?: string;
  zone: 'San Felipe' | 'Ensenada' | 'Ojos Negros' | 'Cataviña' | 'Valle de Guadalupe';
}

export interface Experience {
  id: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  category: ExperienceCategory;
  difficulty: DifficultyLevel;
  durationHours: number;
  priceUSD: number;
  socioId: string;
  socioName: string;
  socioRating: number;
  socioReviewsCount: number;
  socioVerified: boolean;
  heroImage: string;
  gallery: string[];
  locationName: string;
  coordinates: Coordinates;
  whatsIncluded: string[];
  requiredGear: string[];
  maxVehiclesPerGroup: number;
  isActive: boolean;
  featured: boolean;
}

export interface AddonService {
  id: string;
  name: string;
  description: string;
  priceUSD: number;
  iconName: string;
}

export type ReservationState =
  | 'RESERVADA'
  | 'CONFIRMADA'
  | 'PREPARADA'
  | 'ACTIVA'
  | 'DEVUELTA'
  | 'COMPLETADA';

export interface Reservation {
  id: string; // Formato BR-XXXXX
  experienceId: string;
  experienceTitle: string;
  experienceImage: string;
  category: ExperienceCategory;
  socioId: string;
  socioName: string;
  date: string; // YYYY-MM-DD
  timeSlot: string; // Ej. '08:30 AM'
  vehiclesCount: number;
  participantsCount: number;
  selectedAddons: AddonService[];
  totalPriceUSD: number;
  customerName: string;
  customerEmail: string;
  customerPhone: string;
  emergencyContact: string;
  driversLicense: string;
  state: ReservationState;
  createdAt: string;
  meetingPoint: Coordinates;
  assignedFleetUnitId?: string;
  assignedGuideName?: string;
  checkInPassed?: boolean;
}

export type FleetUnitStatus = 'DISPONIBLE' | 'EN_RUTA' | 'MANTENIMIENTO';

export interface FleetUnit {
  id: string;
  name: string;
  model: string;
  plateNumber: string;
  status: FleetUnitStatus;
  hoursRun: number;
  nextServiceHours: number;
  lastInspectionDate: string;
  assignedDriver?: string;
}

export type BlockReason = 'Mantenimiento' | 'Clima Adverso' | 'Evento Baja 1000' | 'Descanso Operador';

export interface AvailabilityBlock {
  id: string;
  experienceId: string;
  startDate: string;
  endDate: string;
  reason: BlockReason;
  notes?: string;
  createdAt: string;
}

export interface UserAccount {
  id: string;
  email: string;
  name: string;
  phone: string;
  emergencyContact: string;
  driversLicense: string;
  roles: UserRole[];
  activeMode: UserRole;
  avatarUrl?: string;
  socioProfile?: {
    businessName: string;
    scoreCertified: boolean;
    satRfc: string;
    clabeInterbancaria: string;
    bankName: string;
  };
}

export interface BookingDraft {
  experienceId: string;
  date: string;
  timeSlot: string;
  vehiclesCount: number;
  participantsCount: number;
  selectedAddons: string[];
  customerName: string;
  customerEmail: string;
  customerPhone: string;
  emergencyContact: string;
  driversLicense: string;
  termsAccepted: boolean;
}

export type ThemeMode = 'dark' | 'light';

export interface AppState {
  user: UserAccount | null;
  activeMode: UserRole;
  experiences: Experience[];
  reservations: Reservation[];
  fleet: FleetUnit[];
  availabilityBlocks: AvailabilityBlock[];
  bookingDraft: BookingDraft | null;
  confirmedReservation: Reservation | null;
  selectedExperienceId: string | null;
  theme: ThemeMode;
  searchQuery: string;
  selectedCategory: string;
  selectedDifficulty: string;
  selectedZone: string;
  maxPriceUSD: number;
  isMasterAdminModalOpen: boolean;
  toastMessage: string | null;
}
