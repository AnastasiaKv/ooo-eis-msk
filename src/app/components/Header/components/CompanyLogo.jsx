import React from 'react';
import CompanyLogo from '../../../../assets/img/eis-logo.svg'; // Path to your icons.svg
import PropTypes from 'prop-types';
import {ReactComponent as YourSvg} from '../../../../assets/img/eis-logo.svg';

const Logo = ({name, width, height}) => <YourSvg name={name} height={height} width={width} />;


export default Logo;
