## Register User

This endpoint allows for the registration of a new user in the system.

### HTTP Method

`POST`

### Endpoint

`{{PROD_URL}}/register`

### Request Body

The request must include a JSON payload with the following parameters:

- **name** (string): The full name of the user. This is a required field.
    
- **email** (string): The email address of the user. This must be a valid email format and is a required field.
    
- **password** (string): The password for the user account. This is a required field and should be kept secure.
    

### Expected Response

Upon successful registration, the server will respond with a confirmation message and may include additional user details. The response will typically be in JSON format.

### Example Request

``` json
{
  "name": "Joshua",
  "email": "testing@email.com",
  "password": "secret"
}

 ```

### Example Response

``` json
{
    "user": {
        "name": "Joshua"
    },
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2ODVlMDAxNWQyYzk1N2YzMjlhMjBjYzUiLCJuYW1lIjoiSm9zaHVhIiwiaWF0IjoxNzUwOTkwODY5LCJleHAiOjE3NTM1ODI4Njl9.8OnORigQ6CANaDu0HK4PmiPiZOGRtxTB2mEQ3arSwN4"
}

 ```
