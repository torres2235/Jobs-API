### Full Postman Documentation

https://documenter.getpostman.com/view/35384349/2sB2xFdnD8

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

## Login Endpoint

This endpoint is used to authenticate a user by logging them in. It accepts a POST request containing the user's credentials and returns a token upon successful authentication.

### Request

- **Method**: POST
    
- **Endpoint**: `{{PROD_URL}}/auth/login`
    
- **Request Body**: The request must include a JSON object with the following parameters:
    
    - `email` (string): The email address of the user attempting to log in.
        
    - `password` (string): The password associated with the user's account.
        

#### Example Request Body

``` json
{
  "email": "testing@email.com",
  "password": "secret"
}

 ```

### Response

On a successful login, the server responds with a status code of `200` and a JSON object containing the following fields:

- `user`: An object representing the authenticated user, which includes:
    
    - `name` (string): The name of the user (this may be empty if not provided).
        
- `token` (string): A token used for subsequent authenticated requests.
    

#### Example Response

``` json
{
    "user": {
        "name": "joshua"
    },
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2ODU5ZjcxYzRiYjVlYTRlNDBhNWEyOGUiLCJuYW1lIjoiam9zaHVhIiwiaWF0IjoxNzUwOTkwMDgzLCJleHAiOjE3NTM1ODIwODN9.p3f7GHcsNKXYr7p3fV3HzxU9jMbcep9X0TSPLPTGeXQ"
}

 ```

### Notes

- Ensure that the email and password provided in the request body are correct to receive a valid response.
    
- The token returned in the response should be stored securely for use in future requests requiring authentication.

Create Job Posting
This endpoint allows users to create a new job posting in the system. By submitting the required details, a new job entry will be added to the job listings.
Request
Method: POST
URL: {{PROD_URL}}/jobs
Request Body
The request body should be in JSON format and must include the following parameters:
company (string): The name of the company offering the job.
position (string): The title of the job position being offered.

Example Request Body:


JSON








{
  "company": "testing",
  "position": "testing engineer"
}


Response
Upon successful creation of the job posting, the API will return a response indicating the status of the operation. The response structure typically includes:
status (string): Indicates whether the job posting was created successfully or if there was an error.
jobId (string): The unique identifier for the newly created job posting.



JSON








{
    "job": {
        "company": "testing",
        "position": "testing engineer",
        "status": "pending",
        "createdBy": "6859f71c4bb5ea4e40a5a28e",
        "_id": "685e0076d2c957f329a20cc8",
        "createdAt": "2025-06-27T02:22:46.261Z",
        "updatedAt": "2025-06-27T02:22:46.261Z",
        "__v": 0
    }
}


Notes
Ensure that all required fields are provided in the request body to avoid validation errors. The API will respond with appropriate error messages if any required fields are missing or incorrectly formatted.


### API Endpoint: GET /jobs

This endpoint retrieves a list of jobs from the server.

#### Request Parameters

- **Authorization**: This endpoint requires authentication. Ensure that a valid token is included in the request headers to access the resource. A 401 Unauthorized status indicates that the request lacks valid authentication credentials.
    

#### Expected Response

- **Status Code**:
    
    - `200 OK`: Indicates that the request was successful and the job list is returned.
        
    - `401 Unauthorized`: Indicates that the request was made without valid authentication credentials.
        
- **Response Format**: The response will be in JSON format. In case of an unauthorized request, the response will include a message indicating the issue.
    

#### Notes

- Ensure that you handle the 401 status appropriately in your application to prompt for authentication if necessary.
    
- This endpoint does not require any additional query parameters or body content.


## API Endpoint: Retrieve Job Details

### Request

- **Method**: GET
    
- **Endpoint**: `{{PROD_URL}}/jobs/{job_id}`
    

### Parameters

- **Path Parameter**:
    
    - `job_id` (string): A unique identifier for the job whose details are being retrieved. In this example, the job ID is `685b29e1b7b41e25a8fc8eba`.
        

### Expected Response

The expected response for this request is typically a JSON object containing details about the job associated with the provided job ID. The response will include various attributes related to the job, such as its status, creation date, and any other relevant information.

### Example Response Format

``` json
{
    "job": {
        "_id": "685b29e1b7b41e25a8fc8eba",
        "status": "pending",
        "company": "google",
        "position": "intern",
        "createdBy": "6859f71c4bb5ea4e40a5a28e",
        "createdAt": "2025-06-24T22:42:41.224Z",
        "updatedAt": "2025-06-24T22:42:41.224Z",
        "__v": 0
    }
}

 ```

This endpoint allows users to access specific job information by providing the job ID, facilitating the retrieval of job-related data in a structured format.


### Update Job Details

This endpoint allows you to update the details of a specific job posting identified by its unique job ID.

**HTTP Method:** PATCH  
**Endpoint:** `{{PROD_URL}}/jobs/{jobId}`

#### Request Parameters

The request body should be a JSON object containing the following fields:

- **company** (string): The name of the company offering the job. This field is used to specify or update the company associated with the job.
    
- **position** (string): The title of the job position. This field is used to specify or update the job title.
    

Example Request Body:

``` json
{
  "company": "testing change",
  "position": "senior testing engineer"
}

 ```

#### Expected Response

Upon a successful update, the server will respond with a status code indicating the outcome of the operation. Typically, a `200 OK` status code is returned along with the updated job details in the response body.

``` json
{
    "job": {
        "_id": "685e0076d2c957f329a20cc8",
        "company": "testing change",
        "position": "senior testing engineer",
        "status": "pending",
        "createdBy": "6859f71c4bb5ea4e40a5a28e",
        "createdAt": "2025-06-27T02:22:46.261Z",
        "updatedAt": "2025-06-27T02:24:22.448Z",
        "__v": 0
    }
}

 ```

#### Notes

- Ensure that the job ID in the URL is valid and corresponds to an existing job posting.
    
- The request body fields are optional; you can update only the fields you wish to change.
    
- If the job ID does not exist, the server may return a `404 Not Found` error.


## Delete Job Endpoint

This endpoint allows users to delete a specific job from the system. The job is identified by its unique job ID, which is included in the URL path.

### Request

- **Method**: DELETE
    
- **URL**: `{{PROD_URL}}/jobs/{jobId}`
    

#### Path Parameters

- `jobId` (string): The unique identifier of the job to be deleted. In this example, the job ID is `685b2ff1f7bbeb0d54929222`.
    

### Headers

- `Authorization` (string): A token that grants permission to perform the delete operation. This should be included in the request header to authenticate the user.
    
- `Content-Type` (string): Typically set to `application/json`, indicating the format of the request body.
    

### Response

Upon a successful deletion, the API will return a response with the following structure:

- **Status Code**: `204 No Content`
    

This indicates that the job has been successfully deleted and there is no additional content in the response body.

In case of an error, the response may include an appropriate status code (e.g., `404 Not Found` if the job ID does not exist) along with a message detailing the error.

### Summary

To summarize, this DELETE request is used to remove a job from the system using its unique job ID. Ensure that the required headers are included for successful authentication and that the correct job ID is specified in the URL.
