import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';
import Conainer from './Container';

export default function WebLayout(props) {
    const { children } = props;
    const { t, i18n } = useTranslation();
    const dispatch = useDispatch();

    const webLayoutProps = {
        t,
        i18n,
        children,
        dispatch,
    };

    return <Conainer {...webLayoutProps} />;
}
