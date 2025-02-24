set shell := ["cmd.exe", "/c"]

default:
    bun run dev

# Initialize this project with a package manager
setup PACKAGE_MANAGER='bun':
    {{PACKAGE_MANAGER}} i

# Run something, im not sure what
stack NAME='testing':
    echo "Running Stack Command! {{NAME}}"

# Push your project with the release flag
release MESSAGE:
    git add .
    git commit -m "[release] {{MESSAGE}}"
    git push

# Push your project 
push MESSAGE:
    git add .
    git commit -m "{{MESSAGE}}"
    git push
