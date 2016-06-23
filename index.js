/** Components **/
import React from 'react-native';
import Dimensions from './dimensions';

import buttonFactory from './components/button';
import navBarFactory from './components/navbar';
import textInputFactory from './components/text-input';

const Button = buttonFactory({ React, Dimensions });
const NavBar = navBarFactory({ React, Dimensions });
const TextInput = textInputFactory({ React, Dimensions });

module.exports = {
	Button,
	NavBar,
	TextInput,
};

