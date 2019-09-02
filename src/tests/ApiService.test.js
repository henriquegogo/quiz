import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import { CATEGORIES_URL, QUESTION_URL, getCategories, getQuestions } from '../services/ApiService';

const mock = new MockAdapter(axios);

describe('ApiService', () => {
  beforeEach(() => {
    mock.onGet(CATEGORIES_URL).reply(200, {
      trivia_categories: [
        { "id": 9, "name": "General Knowledge" },
        { "id": 10, "name": "Entertainment: Books" }
      ]
    });

    mock.onGet(QUESTION_URL.replace('{difficulty}', 'medium').replace('{category}', 9)).reply(200, {
      "response_code": 0,
      "results": [
        { "category": "General Knowledge", "type": "multiple", "difficulty": "medium",
          "question": "Which language is NOT Indo-European?",
          "correct_answer": "Hungarian", "incorrect_answers": ["Russian","Greek","Latvian"]
        },
        { "category": "General Knowledge", "type": "multiple", "difficulty": "medium",
          "question": "What character was once considered to be the 27th letter of the alphabet?",
          "correct_answer": "Ampersand", "incorrect_answers":["Interrobang","Tilde","Pilcrow"]
        }
      ]
    });

    mock.onAny().reply(200, {
      "response_code": 0,
      "results": []
    });
  });

  afterEach(() => {
    mock.reset()
  });

  it('get categories', async () => {
    const response = await getCategories();
    expect(response).toMatchObject([
      { id: 9, name: "General Knowledge"},
      { id: 10, name: "Entertainment: Books"}
    ]);
  });

  it('get questions from category', async () => {
    const response = await getQuestions(9, 'medium');
    expect(response.length).toBe(2);
    expect(response[0].category).toBe('General Knowledge');
    expect(response[0].difficulty).toBe('medium');
  });

  it('dont get questions from invalid category or invalid difficulty', async () => {
    const response = await getQuestions(888, 'noway');
    expect(response.length).toBe(0);
  });
});
