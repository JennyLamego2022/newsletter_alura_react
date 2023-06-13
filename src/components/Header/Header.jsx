import ToggleTheme from '../ToggleTheme/ToggleTheme'
import PropTypes from 'prop-types';

const Header = ({ user }) => {
    return <div className="flex h-20 bg-alura-200 dark:bg-dark-200 justify-between items-center px-5 sm:rounded-xl sm:m-5">
        <span className="text-gray-100">Olá, {user?.name||'Usuário'}</span>
        <h1>Newslatter</h1>
        <ToggleTheme/>
    </div>
}

Header.propTypes = {
    user:PropTypes.shape({
        name: PropTypes.string,
    }),
};

export default Header