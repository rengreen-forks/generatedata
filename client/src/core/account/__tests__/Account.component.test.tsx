import React from 'react'
import { renderWithStoreAndRouter } from '../../../../tests/testHelpers';
import Account from '../Account.component';

const i18n = require('../../../i18n/en.json');


describe('Account component', () => {
	it('render', () => {
		const { container } = renderWithStoreAndRouter(
			<Account
				selectedTab="dataSets"
				onChangeTab={() => {}}
				i18n={i18n}
			/>
		);

		const page = container.querySelector('.accountPage');
		expect(page).toBeTruthy();
	});
});
