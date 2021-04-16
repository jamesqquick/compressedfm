import PropTypes from 'prop-types';

const Instagram = ({ className, height, width }) => (
  <svg className={className} width={width} height={height} viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
    <path d="M26.5 2H5.5C3.575 2 2 3.575 2 5.5V26.5C2 28.425 3.575 30 5.5 30H26.5C28.425 30 30 28.425 30 26.5V5.5C30 3.575 28.425 2 26.5 2ZM16 12.5C19.2375 12.5 19.5 16 19.5 16C19.5 16 19.5875 19.5 16 19.5C12.4125 19.5 12.5 16 12.5 16C12.5 16 12.7625 12.5 16 12.5ZM26.5 24.75C26.5 25.7125 25.7125 26.5 24.75 26.5H7.25C6.2875 26.5 5.5 25.7125 5.5 24.75V16C5.5 15.0375 6.2875 14.25 7.25 14.25H9.2625C9.0875 14.775 9 15.3875 9 16C9 19.85 12.15 23 16 23C19.85 23 23 19.85 23 16C23 15.3875 22.9125 14.775 22.7375 14.25H24.75C25.7125 14.25 26.5 15.0375 26.5 16V24.75ZM26.5 9C26.5 9.9625 25.7125 10.75 24.75 10.75H23C22.0375 10.75 21.25 9.9625 21.25 9V7.25C21.25 6.2875 22.0375 5.5 23 5.5H24.75C25.7125 5.5 26.5 6.2875 26.5 7.25V9Z" />
  </svg>
);

Instagram.propTypes = {
  className: PropTypes.string,
  height: PropTypes.string,
  width: PropTypes.string,
};

Instagram.defaultProps = {
  className: '',
  height: '32',
  width: '32',
};

export { Instagram };
