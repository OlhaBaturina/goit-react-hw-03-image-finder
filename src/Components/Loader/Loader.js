import Loader from 'react-loader-spinner';
import s from './Loader.module.css';

const CustomLoader = () => (
    <div className={s.Loader}>
        <Loader
            type="ThreeDots"
            color="#3f51b5"
            height={80}
            width={80}
            timeout={3000} //3 secs
        />
    </div>
);

export default CustomLoader;
