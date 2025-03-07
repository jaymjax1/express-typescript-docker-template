# Application Layer
mkdir -p src/application/{dtos,services,exceptions}

# Domain Layer
mkdir -p src/domain/{entities,repositories,services}

# Infrastructure Layer
mkdir -p src/infrastructure/{db,repositories,external}

# Interface Layer
mkdir -p src/interfaces/{controllers,middlewares,routes}

# # Supporting Directories
mkdir -p src/config
mkdir -p src/tests/{application,domain,infrastructure}
mkdir -p src/types
# mkdir -p src/utils

# # Create basic files
# touch src/server.ts
# touch src/app.ts
touch src/routes.ts
# touch src/config/{env.ts,database.ts} 