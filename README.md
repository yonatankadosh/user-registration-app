# User Registration App

A full-stack application with React frontend and NestJS backend.

## Features
- User registration
- User listing
- MySQL database
- Docker containerization

## How to Run
1. Make sure Docker and Docker Compose are installed
2. Run `docker-compose up`
3. Access the application at http://localhost:3001

## API Commands
Use the `api-commands.sh` script to interact with the API:

```bash
# Show all users
./api-commands.sh show

# Add a new user
./api-commands.sh add "John Doe" "john@example.com" 30
```
