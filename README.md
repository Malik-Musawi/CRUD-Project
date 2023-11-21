# CRUD-Project: Full Stack Application

This project is a comprehensive full stack application developed as part of the INFO 3070 (Client Server) class at Fanshawe College. It showcases a unique implementation approach, integrating Angular, Docker MSSQL, and JetBrains Rider to emplifies a robust full stack CRUD (Create, Read, Update, Delete) application. It combines cutting-edge technologies and practices to provide a comprehensive learning experience in web development..

## Project Structure

The project is structured into two main components:

### 1. Frontend
- **Technology**: Angular
- **Location**: `FullStackApplication` directory
- **Structure**:
  - **Components**: Building blocks of the Angular application, located in `src/app/components`.
  - **Services**: Facilitates data and functionality sharing, located in `src/app/services`.
  - **Models**: Defines object structures, located in `src/app/models`.

### 2. Backend
- **Technology**: .NET Core
- **Location**: `FullStackAPI` directory
- **IDE**: JetBrains Rider
- **Database**: Connects to a Docker MSSQL database, configuration in `appsettings.json`.

## Development

### Frontend Development

- **Local Server**:
  ```sh
  ng serve --o
  ```
  This command starts a development server at `http://localhost:4200/`. The application automatically reloads on source file changes.
  
- **Build**:
  The build artifacts are stored in the `dist/` directory.

### Backend Development

- **Database Setup**:
  Ensure Docker is installed. The backend connects to a Docker MSSQL database as defined in `appsettings.json`.
  ```json
  "ConnectionStrings": {
    "FullStackConnectionString": "Server=localhost,1433;Database=FullStackDb;User Id=SA;Password=reallyStrongPwd123;TrustServerCertificate=True"
  }
  ```
  Replace connection details as necessary.

- **Running the Backend**:
  Navigate to `FullStackAPI` and use:
  ```sh
  dotnet build
  dotnet run
  ```
  The server runs at `http://localhost:5000` (HTTP) and `https://localhost:5001` (HTTPS). Modify `launchSettings.json` for different settings.

## Further Assistance

- **Angular**: For Angular CLI help, use `ng help` or visit the [Angular CLI Overview and Command Reference](https://angular.io/cli).
- **.NET Core**: For .NET Core CLI help, use `dotnet --help` or visit the [.NET Core CLI documentation](https://docs.microsoft.com/en-us/dotnet/core/tools/).

