import { type ButtonHTMLAttributes, type ReactNode } from 'react';
import { cn } from '../lib/utils';
import type { LucideIcon } from 'lucide-react';
interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'glass' | 'glowing';
    size?: 'sm' | 'md' | 'lg';
    icon?: LucideIcon;
    iconPosition?: 'left' | 'right';
    children: ReactNode;
}
export function Button({ variant = 'primary', size = 'md', icon: Icon, iconPosition = 'right', className, children, ...props }: ButtonProps) {
    const baseStyles = "group relative inline-flex items-center justify-center rounded-full font-semibold transition-all duration-300 overflow-hidden";
    const variants = {
        primary: "bg-white text-black shadow-[0_0_30px_rgba(255,255,255,0.2)] hover:scale-[1.02]",
        secondary: "bg-brand-graphite text-white hover:bg-brand-black hover:-translate-y-0.5 hover:shadow-[0_0_20px_rgba(0,0,0,0.5)] border border-white/5",
        outline: "border border-gray-600 text-white hover:bg-white/5",
        ghost: "text-gray-400 hover:text-white hover:bg-white/5",
        glass: "bg-white/5 border border-white/10 text-white hover:bg-white/10 hover:border-white/30 backdrop-blur-md",
        glowing: "bg-brand-red text-white shadow-[0_0_30px_rgba(237,28,36,0.5)] hover:shadow-[0_0_50px_rgba(237,28,36,0.8)] hover:scale-[1.03] border border-red-400/50"
    };
    const sizes = {
        sm: "px-4 py-2 text-sm",
        md: "px-6 py-2.5 text-base",
        lg: "px-8 py-4 text-lg"
    };
    return (<button className={cn(baseStyles, variants[variant], sizes[size], className)} {...props}>
      <span className="relative z-10 flex items-center gap-2">
        {Icon && iconPosition === 'left' && <Icon className="w-5 h-5 transition-transform group-hover:-translate-x-0.5"/>}
        {children}
        {Icon && iconPosition === 'right' && <Icon className="w-5 h-5 transition-transform group-hover:translate-x-0.5"/>}
      </span>
    </button>);
}
