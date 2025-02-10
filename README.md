# Contact Management API

## Setup

1. Clone repository
2. Install dependencies: `npm install`
3. Create `.env` file using `.env.example`
4. Start server: `npm run dev`

## API Endpoints

| Method | Endpoint      | Description        |
| ------ | ------------- | ------------------ |
| GET    | /contacts     | Get all contacts   |
| POST   | /contacts     | Create new contact |
| GET    | /contacts/:id | Get single contact |
| PUT    | /contacts/:id | Update contact     |
| DELETE | /contacts/:id | Delete contact     |

## Testing

Run tests: `npm test`

## Deployment

1. Create Heroku app
2. Set config vars:
   - MONGODB_URI (your MongoDB connection string)
3. Deploy using Git
