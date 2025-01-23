# iNotes Project

## Project Overview
The goal of this project is to develop an application that allows users to create, retrieve, update, and delete notes. We are following an Agile approach using the SCRUM framework to manage our development process effectively. Throughout the project, we will document our progress and stages using GitHub Issues instead of JIRA.

## Participants

|Nr| Full Name              | Student ID | GitHub Username |
|--|------------------------|------------|------------------|
|1| Botirjon Shokirov   | 41923    | Botirjon2003     
|2| Murad Vahabli   | 123456     | MVazeZAQ         |
|3| Amanidinov             | 123457     | Amanidinov       |
|4| Vahid Nuraddinov       | 41744     | VahidNuraddinov  |
|5| Hajiyev Magsud         | 123459     | hajiyevmagsud    |
|6| Selam Sahabe Karadag| 40469     | selamsahabe      |
|7| Sevval Ozyurt          | 41293     | Sevval-Ozyurt    |
| 8|Oguzhan Yazdicutan     | 47563     | OguzhanYazdicutan         |
| 9|Sherzod Sodiqov          | 42176     | sherzod9sodikov    |

## Project Structure
We will be using a Git repository to store all elements of our project, including a general project description, documentation, diagrams, and other schematics. All documentation will be organized in this README file and a separate `SCRUMS.md` file.

## SCRUMS.md
For detailed information about our SCRUM planning, including sprint goals, completed issues, and upcoming tasks, please refer to the [SCRUMS.md](./SCRUMS.md) file.


# How to Run the Project

To run the project, follow these steps:

1.  Clone the repository to your local machine:
    
    ```
    git clone git@github.com:MVazeZAQ/MVTeam.git
    ```
    
2.  The project consists of two main folders: `backend` and `frontend`.
    

## Running the Backend

1.  Navigate to the `backend` folder:
    
    ```
    cd backend
    ```
 2.  Create env for project ([tutorial](https://www.dataquest.io/blog/a-complete-guide-to-python-virtual-environments/))  
3.  Install the required dependencies:
    
    ```
    pip install -r requirements.txt
    ```
    
4.  Run the server on port 8008:
    
    ```
    python manage.py runserver 8008
    ```
    

## Running the Frontend

1.  Navigate to the `frontend` folder:
    
    ```
    cd ../frontend
    ```
    
2.  Install the necessary dependencies (requires npm version 18 or above):
    
    ```
    npm install
    ```
    
3.  Start the frontend development server:
    
    ```
    npm run dev
    ```
    

After completing these steps, you should have the backend running on port [5174](http://localhost:5174/) and the frontend development server running on its designated port.
