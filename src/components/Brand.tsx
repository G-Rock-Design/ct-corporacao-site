import { site } from '../content';
export function Brand() {
    return <a className="brand" href="#inicio" aria-label="CT Corporação — início"><img src={site.logo} alt="" width="56" height="56"/><span>CORPORAÇÃO<small>CENTRO DE TREINAMENTO</small></span></a>;
}
