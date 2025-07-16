import { create } from 'zustand';

interface AppState {
  // UI State
  isLoading: boolean;
  setIsLoading: (loading: boolean) => void;
  
  // Navigation
  activeSection: string;
  setActiveSection: (section: string) => void;
  
  // WhatsApp Integration
  whatsappNumber: string;
  setWhatsappNumber: (number: string) => void;
  
  // Theme
  isDarkMode: boolean;
  toggleDarkMode: () => void;
}

export const useAppStore = create<AppState>((set) => ({
  // UI State
  isLoading: false,
  setIsLoading: (loading) => set({ isLoading: loading }),
  
  // Navigation
  activeSection: 'inicio',
  setActiveSection: (section) => set({ activeSection: section }),
  
  // WhatsApp Integration
  whatsappNumber: '5493764518346',
  setWhatsappNumber: (number) => set({ whatsappNumber: number }),
  
  // Theme
  isDarkMode: true, // Default to dark mode
  toggleDarkMode: () => set((state) => ({ isDarkMode: !state.isDarkMode })),
})); 