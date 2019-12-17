import { LogoIcon } from './logoicon';
import { LogoType } from './logotype';
import './logo.scss';

export const Logo = () => {
    return <div className= "logo">
        <LogoIcon/>
        <LogoType/>
    </div>
}