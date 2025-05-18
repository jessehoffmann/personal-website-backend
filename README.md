# Personal Website Backend

This is the backend service for Jesse Thomas Hoffmann's personal portfolio website.

## Development

Install dependencies and run the app as follows
```bash
npm install
npm run dev
```
The server will start on port 8000 by default. You can change this by setting the `PORT` environment variable.

## Environment Variables

- `PORT`: Server port (default: 8000)
- `NODE_ENV`: Environment (development/production)
- `FORMSPREE_ENDPOINT`: Formspree endpoint for contact form

## Testing

Run the test suite:
```bash
npm test
```