import PropTypes from 'prop-types';

const Form = ({ onSubmit }) => {
    const safeSubmit = event => {
        event.preventDefault()
        event.stopPropagation()
        const name = event.target[0].value
        const email = event.target[1].value
        onSubmit({name, email})
    }
    return <form onSubmit={safeSubmit} className=' h-full flex flex-col items-center justify-center gap-10 -mt-20'>
        <input type="text" placeholder="Insira seu nome..." />
        <input type="email" placeholder="Insira seu e-mail..." />
        <button type="submit" className=' bg-alura-100 dark:bg-dark-200 py-1 px-5 rounded-full text-gray-200 uppercase'>Seguir</button>
    </form>
}

Form.propTypes = {
    onSubmit: PropTypes.func.isRequired,
  };

export default Form