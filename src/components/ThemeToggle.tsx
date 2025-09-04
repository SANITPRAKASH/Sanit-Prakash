import { Moon, Sun } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useTheme } from '@/contexts/ThemeContext';

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={toggleTheme}
      className="relative w-9 h-9 p-0 border border-purple-500/40 hover:border-purple-400 hover:bg-purple-500/20 transition-all duration-300 group overflow-hidden"
      title={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
    >
      {/* Sun Icon for Light Mode */}
      <Sun 
        className={`w-4 h-4 text-purple-400 absolute inset-0 m-auto transition-all duration-500 transform ${
          theme === 'light' 
            ? 'scale-100 rotate-0 opacity-100' 
            : 'scale-0 rotate-180 opacity-0'
        }`} 
      />
      
      {/* Moon Icon for Dark Mode */}
      <Moon 
        className={`w-4 h-4 text-purple-400 absolute inset-0 m-auto transition-all duration-500 transform ${
          theme === 'dark' 
            ? 'scale-100 rotate-0 opacity-100' 
            : 'scale-0 -rotate-180 opacity-0'
        }`} 
      />

      {/* Wakanda-style glow effect */}
      <div className="absolute inset-0 bg-purple-500/0 group-hover:bg-purple-500/10 transition-colors duration-300"></div>
      
      {/* Purple glow on hover */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <div className="absolute inset-0 bg-purple-500/20 blur-xl"></div>
      </div>
    </Button>
  );
};

export default ThemeToggle;