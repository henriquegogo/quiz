import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import { CATEGORIES_URL, QUESTION_URL, getCategories, getQuestions } from '../services/ApiService';

const mock = new MockAdapter(axios);

describe('ApiService', () => {
	beforeEach(() => {
		mock.onGet(CATEGORIES_URL).reply(200, {
		});

		mock.onGet(QUESTION_URL).reply(200, {
		});
	});

	afterEach(() => {
		mock.reset()
	});

	xit('get categories', async () => {
		const response = await getCategories();
		expect(response).toBe({});
	});

	xit('get questions from category', async () => {
		const response = await getQuestions();
		expect(response).toBe({});
	});
});
