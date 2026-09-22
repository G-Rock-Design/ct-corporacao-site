import { ArrowUpRight } from 'lucide-react';
import { site } from '../content';
export function ContactLink({ children = 'Quero conhecer o CT' }: {
    children?: React.ReactNode;
}) {
    return <a className="button button-primary" href={site.whatsapp}>{children}<ArrowUpRight size={20} aria-hidden="true"/></a>;
}
