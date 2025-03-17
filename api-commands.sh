#!/bin/bash

# Colors for output
GREEN='\033[0;32m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Function to display all users
show_users() {
    echo -e "${BLUE}Fetching all users...${NC}"
    curl http://localhost:3000/api/users | json_pp
}

# Function to add a new user
add_user() {
    if [ -z "$1" ] || [ -z "$2" ] || [ -z "$3" ]; then
        echo "Usage: ./api-commands.sh add_user \"Name\" \"email@example.com\" age"
        echo "Example: ./api-commands.sh add_user \"John Doe\" \"john@example.com\" 30"
        exit 1
    fi

    echo -e "${BLUE}Adding new user...${NC}"
    curl -X POST http://localhost:3000/api/users \
    -H "Content-Type: application/json" \
    -d "{
        \"name\": \"$1\",
        \"email\": \"$2\",
        \"age\": $3
    }" | json_pp
}

# Main command handler
case "$1" in
    "show")
        show_users
        ;;
    "add")
        add_user "$2" "$3" "$4"
        ;;
    *)
        echo "Usage:"
        echo "  Show all users:    ./api-commands.sh show"
        echo "  Add new user:      ./api-commands.sh add \"Name\" \"email@example.com\" age"
        echo "Example:"
        echo "  ./api-commands.sh add \"John Doe\" \"john@example.com\" 30"
        ;;
esac 