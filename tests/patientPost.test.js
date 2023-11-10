const request = require('supertest');
const app = require('../app');

describe('POST route tests', () => {
	it('should return a 200 status code and valid response for POST route', async () => {
		jest.setTimeout(async () => {
			const response = await request(app).post('/patients').send({
				firstName: 'ridham',
				middleName: 'dharmesh',
				lastName: 'patel',
				emailId: 'rydhamik@gmail.com',
				age: '12',
				gender: 'male',
				height: '123',
				smoke: 'no',
				alcohol: 'no',
				activity: 'no',
				allergies: 'no',
				symptoms: 'no',
				other_complaints: 'no',
				medications: 'no',
				recent_visits: [],
				doctor: [],
				contact_address_line: '124 grace st',
				contact_address_line_2: 'apt 2',
				contact_city: 'jersey city',
				contact_zip_code: '03423',
				contact_state: 'nj',
				contact_number: '1234567890',
				emergencey_contact_number: '1234567890',
				emergencey_contact_name: 'ridham',
				insurrance_member_id: '3312243234',
				insurrance_group_number: '12345',
				insurrance_plan_type: 'reg',
				insurrance_primarycare_provider: 'aetna',
			});
			expect(response.status).toBe(200);
		});
	})
});
