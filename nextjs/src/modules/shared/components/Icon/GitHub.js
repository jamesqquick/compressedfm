import PropTypes from 'prop-types';

const GitHub = ({ className, height, width }) => (
  <svg className={className} width={width} height={height} viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
    <path d="M16 0C7.2 0 0 7.2 0 16C0 24.8 7.2 32 16 32C24.8 32 32 24.8 32 16C32 7.2 24.8 0 16 0ZM25.5 25.5C24.3 26.7 22.8 27.7 21.2 28.4C20.8 28.6 20.4 28.7 20 28.9V26.5C20 25.2 19.6 24.3 18.7 23.7C19.2 23.6 19.7 23.6 20.2 23.5C20.7 23.4 21.1 23.3 21.6 23.1C22.1 22.9 22.6 22.7 23 22.5C23.4 22.3 23.8 21.9 24.2 21.5C24.6 21.1 24.9 20.7 25.1 20.2C25.3 19.7 25.5 19.1 25.7 18.4C25.8 17.7 25.9 16.9 25.9 16.1C25.9 14.5 25.4 13.1 24.3 12C24.8 10.8 24.7 9.4 24.1 7.9H23.7C23.4 7.9 22.9 8 22.2 8.2C21.5 8.5 20.7 8.9 19.8 9.5C18.6 9.2 17.3 9 15.9 9C14.6 9 13.3 9.2 12.1 9.5C11.5 9.1 11 8.8 10.5 8.6C10.2 8.2 9.8 8.1 9.5 8C9.2 7.9 8.9 7.8 8.6 7.8C8.3 7.8 8.2 7.8 8.1 7.8C8 7.8 8 7.8 7.9 7.8C7.3 9.3 7.3 10.6 7.7 11.9C6.6 13 6.1 14.4 6.1 16C6.1 16.8 6.2 17.6 6.3 18.3C6.4 19 6.6 19.6 6.9 20.1C7.1 20.6 7.5 21 7.8 21.4C8.2 21.8 8.6 22.1 9 22.4C9.4 22.6 9.9 22.9 10.4 23C10.9 23.2 11.4 23.3 11.8 23.4C12.3 23.5 12.8 23.6 13.3 23.6C12.4 24.2 12 25.1 12 26.4V28.8C11.5 28.7 11.1 28.5 10.6 28.3C9 27.6 7.6 26.7 6.3 25.4C5.1 24.2 4.1 22.7 3.4 21.1C2.7 19.4 2.3 17.7 2.3 15.9C2.3 14.1 2.7 12.3 3.4 10.7C4.1 9.1 5 7.7 6.3 6.4C7.5 5.2 9 4.2 10.6 3.5C12.3 2.8 14 2.4 15.8 2.4C17.6 2.4 19.4 2.8 21 3.5C22.6 4.2 24 5.1 25.3 6.4C26.5 7.6 27.5 9.1 28.2 10.7C28.9 12.4 29.3 14.1 29.3 15.9C29.3 17.7 28.9 19.5 28.2 21.1C27.7 22.8 26.7 24.3 25.5 25.5Z" />
  </svg>
);

GitHub.propTypes = {
  className: PropTypes.string,
  height: PropTypes.string,
  width: PropTypes.string,
};

GitHub.defaultProps = {
  className: '',
  height: '32',
  width: '32',
};

export { GitHub };
